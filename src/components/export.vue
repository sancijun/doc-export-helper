<template>
    <n-card :style="{ width: '500px' }" title="选择你要导出的文档" size="huge">
        <template #header-extra>
            <n-button strong secondary type="success" @click="save">导出</n-button>
        </template>
        <div>
            <div :style="{ padding: '10px', paddingBottom: '30px' }">
                <n-space v-if="page === 'docs'" vertical>
                    <n-cascader v-model:value="doc_options_value" multiple allow-checking-not-loaded :options="doc_options"
                        cascade :check-strategy="'child'" :show-path="false" remote :on-load="handleLoadDocFolder"
                        filterable clearable placeholder="选择文件" />

                </n-space>

                <n-space justify="space-around" v-if="page === 'wiki'" :style="{ maxHeight: '80vh', overflow: 'auto' }">
                    <n-checkbox-group v-model:value="wikis">
                        <n-list bordered>
                            <n-list-item v-for="item in wiki_spaces" :key="item.space_id">
                                <template #prefix>
                                    <n-checkbox :value="JSON.stringify({ space: item.space_id, name: item.name })" />
                                </template>
                                <n-thing :title="item.name">{{ item.description }}</n-thing>
                                <template #suffix>
                                    <n-button @click="openSelectWiki(item.space_id, item.name)">下载</n-button>
                                </template>
                            </n-list-item>
                        </n-list>
                    </n-checkbox-group>

                </n-space>
            </div>
        </div>
        <n-modal v-model:show="downloading" :mask-closable="false" title="下载中" @positive-click="closeDownloadModel"
            size="huge" :style="{ width: '400px', maxHeight: '600px' }">
            <n-card>
                <template #header>下载中</template>
                <div :style="{
                    overflow: 'auto',
                    maxHeight: '400px'
                }">
                    <p v-for="item in downloadingList">{{ item }}</p>
                </div>

                <template #footer>
                    <n-button :loading="downloading">完成</n-button>
                </template>
            </n-card>
        </n-modal>
        <n-modal v-model:show="peding" :mask-closable="false" title="登录中" size="huge"
            :style="{ width: '400px', maxHeight: '600px' }">
            <n-spin size="large">
                <template #description>
                    {{ loading_text }}
                </template>
            </n-spin>
        </n-modal>
        <n-modal v-model:show="selectWikiPageDialogOpen" title="选择下载" size="huge"
            :style="{ width: '400px', maxHeight: '600px', minHeight: '300px' }">
            <n-card :style="{
                overflow: 'auto'
            }">
                <template #header>选择下载指定知识空间页面</template>
                <n-list bordered>
                    <n-list-item>
                        <n-thing :title="'全部页面'"></n-thing>
                        <template #suffix>
                            <n-button @click="downloadWikiSpace">下载</n-button>
                        </template>
                    </n-list-item>
                    <n-list-item v-for="item in currentWikiSpaceFirstLevelPages" :key="item.node_token">
                        <n-thing :title="item.title"></n-thing>
                        <template #suffix>
                            <n-button @click="downloadOneWikiPage(item)">下载</n-button>
                        </template>
                    </n-list-item>
                </n-list>
            </n-card>
        </n-modal>
    </n-card>
</template>

<script lang="ts" setup>
import { NButton, NSpace, NList, NListItem, NThing, NModal, NCard, NCascader, useMessage, useDialog, NCheckbox, NCheckboxGroup, NSpin } from 'naive-ui'
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { FeishuService, WikiRecord, NodeRecord } from './api';
import { saveAs } from 'file-saver'
import { useLocalStorage } from './hooks';
import { MyTreeSelectOption } from './interface'
import { getCurrentTimestamp } from './utils';

const error_message = "下载错误，请检查权限申请情况！"
let router = useRoute()
const message = useMessage()
const dialog = useDialog()

let { app_id, app_secret, export_type } = router.query
let code = router.query.code as string

const feishu = new FeishuService((fname: string) => {
    downloadingList.value.push(fname)
})
feishu.dialog = dialog
if (code && window.localStorage.getItem("code") == code) {
    feishu.user_access_token = window.localStorage.getItem("user_access_token") as string
    feishu.refresh_token = window.localStorage.getItem("refresh_token") as string
    feishu.app_id = app_id as string
    feishu.app_secret = app_secret as string
}
const downloadingList = ref<string[]>([])

const convert_md = useLocalStorage('convert_md', true)
const downloading = ref(false)

const page = ref<string>(export_type as string)
const doc_options = ref<MyTreeSelectOption[]>()
const doc_options_value = ref<any>(null)
const peding = ref(false)
const loading_text = ref("登陆中")

onMounted(async () => {
    console.log('Export onMounted')
    await login();
    if (export_type === 'wiki') {
        await fetchWikiList()
    } else if (export_type === 'docs') {
        await fetchDocsList()
    }
    page.value = export_type as string;
})

const login = async () => {
    if (code && window.localStorage.getItem("code") != code) {
        console.log("login start...");
        peding.value = true
        app_id = app_id as string
        app_secret = app_secret as string
        try {
            const token = await feishu.app_login(app_id, app_secret)
            await feishu.user_login(code, token)
            window.localStorage.setItem("code", code)
            peding.value = false
            console.log("login success...");
        } catch (error) {
            console.log("login error...", error);
            peding.value = false
            if (error instanceof Error) {
                loading_text.value = error.message
                message.error(error.message)
            } else {
                loading_text.value = "未知错误，您可以联系三此君反馈问题"
            }

        }

    }
}

const save = async() => {
    if(export_type === 'wiki'){
        saveWikis();
    }else{
        saveDocs();
    }
}

const saveDocs = async () => {
    if (!doc_options_value.value || doc_options_value.value.includes("全部导出")) {
        saveAllDocs();
    } else {
        saveSelectedDocs();
    }
}

const saveWikis = async() => {
    if(!wikis.value){
        downloadAllWikis();
    }else{
        downloadSelectedWikis();
    }
}

const fetchDocsList = async () => {
    console.log("fetch docs list")
    // openDownloadModel()
    try {
        doc_options.value = await feishu.get_all_docs_list()
        doc_options.value.unshift({
            label: "全部导出",
            value: "全部导出",
            isLeaf: true,
            depth: 1
        })
    } catch (error) {
        console.error(error)
        message.error(error_message)
    }

    // closeDownloadModel()
}

const saveSelectedDocs = async () => {
    if (!doc_options_value.value) return
    openDownloadModel()
    let docs: string[] = doc_options_value.value
    const f = await feishu.get_some_docs(docs, true)
    saveAs(f, `feishu-export-${getCurrentTimestamp()}.zip`)
    closeDownloadModel()
}

const saveAllDocs = () => {
    dialog.warning({
        title: '警告',
        content: '下载所有文件可能耗时较长，推荐仅选择所需文件下载。是否继续下载全部文件？',
        positiveText: '确定',
        negativeText: '不确定',
        onPositiveClick: async () => {
            openDownloadModel()
            try {
                const f = await feishu.get_all_docs(convert_md.value.value)
                saveAs(f, `feishu-export-${getCurrentTimestamp()}.zip`)
            } catch (error) {
                console.error(error)
                message.error(error_message)
            }

            closeDownloadModel()
        },
        onNegativeClick: () => {

        }
    })

}

const wiki_spaces = ref<WikiRecord[]>([])
const fetchWikiList = async () => {
    try {
        console.log("fetch wiki list")
        const wikis = await feishu.get_wiki_list()
        wiki_spaces.value = wikis
    } catch (error) {
        console.error(error)
        message.error(error_message)
    }
}

const selectWikiPageDialogOpen = ref(false)
const currentWiki = reactive({
    space_id: "", space_name: ""
})
const currentWikiSpaceFirstLevelPages = ref<NodeRecord[]>([])
const openSelectWiki = async (space_id: string, space_name: string) => {
    try {
        selectWikiPageDialogOpen.value = true
        currentWiki.space_id = space_id
        currentWiki.space_name = space_name
        currentWikiSpaceFirstLevelPages.value = []
        let roots = await feishu.get_wiki_nodes_root(space_id)
        currentWikiSpaceFirstLevelPages.value = roots
    } catch (error) {
        console.error(error)
        message.error(error_message)
    }

}
const downloadOneWikiPage = async (node: NodeRecord) => {
    openDownloadModel()
    try {
        const f = await feishu.get_one_wiki_in_sapce(currentWiki.space_id, true, node)
        saveAs(f, currentWiki.space_name + "_" + node.title + '_export.zip')
    } catch (error) {
        console.error(error)
        message.error(error_message)
    }
    closeDownloadModel()
}
const downloadWikiSpace = async () => {
    openDownloadModel()
    try {
        const f = await feishu.get_all_wiki_in_space(currentWiki.space_id, true)
        saveAs(f, currentWiki.space_name + '_export.zip')
    } catch (error) {
        console.error(error)
        message.error(error_message)
    }
    closeDownloadModel()
}

const openDownloadModel = () => {
    downloadingList.value = []
    downloading.value = true
}
const closeDownloadModel = () => {
    downloading.value = false
}


const handleLoadDocFolder = async (option: any) => {
    try {
        const re = await feishu.get_all_docs_under_folder(option.value, option.depth)
        option.children = re
    } catch (error) {
        console.error(error)
        message.error(error_message)
    }

}

const wikis = ref<null | any[]>(null)

const downloadSelectedWikis = async () => {
    openDownloadModel()

    if (wikis.value != null) {
        for (let i = 0; i < wikis.value.length; i++) {
            const e = wikis.value[i];
            const info: { space: string, name: string } = JSON.parse(e)
            try {
                const f = await feishu.get_all_wiki_in_space(info.space, true)
                saveAs(f, info.name + '_export.zip')
            } catch (error) {
                console.error(error)
                message.error(error_message)
            }
        }
    }
    closeDownloadModel()
}

const downloadAllWikis = async () => {
    openDownloadModel()
    if (wikis.value != null) {
        for (let i = 0; i < wiki_spaces.value.length; i++) {
            const e = wiki_spaces.value[i];
            try {
                const f = await feishu.get_all_wiki_in_space(e.space_id, true)
                saveAs(f, e.name + '_export.zip')
            } catch (error) {
                console.error(error)
                message.error(error_message)
            }
        }
    }
    closeDownloadModel()
}
</script>

<style></style>