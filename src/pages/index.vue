<template>
    <div :style="{ margin: '0 auto', maxWidth: '70%', backgroundColor: '#fff' }">
        <div ref="containerRef" :style="{ padding: '40px' }" font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
            <n-h1>文档导出助手</n-h1>
            <n-p>本站用于下载备份飞书云文档，你只需要按照本站指引完成设置，即可导出选中（所有）的飞书云文档，导出的文档将转换成 Markdown，图片和附件按照你的设置上传到指定位置。</n-p>
            <n-p>如果你已经完成设置，可以直接点击右下角 <n-text type="info">导出云文档</n-text>
                按钮，选择你要导出的文档（看清楚哦，右下键的按钮，后面要导出什么文档直接进来点击导出按钮即可）。使用过程中有任何问题您可以通过以下方式联系 三此君。</n-p>
            <n-space :style="{ marginBottom: '20px' }">
                <n-popover placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-button secondary round tag="a" href="https://space.bilibili.com/96271327/">
                            <n-icon>
                                <svg t="1697723572130" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5987" width="200" height="200">
                                    <path
                                        d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z"
                                        p-id="5988"></path>
                                </svg>
                            </n-icon>
                            &nbsp;B 站
                        </n-button>
                    </template>
                    <n-space vertical>
                        <span>B 站, 有点精彩~</span>
                        <n-image width="150" src="/10.jpeg" />
                    </n-space>
                </n-popover>
                <n-popover placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-button secondary round tag="a" href="https://v.douyin.com/UuXokgA/">
                            <n-icon>
                                <svg t="1697760686229" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5001" width="200" height="200">
                                    <path
                                        d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1"
                                        p-id="5002"></path>
                                </svg>
                            </n-icon>
                            &nbsp;抖音
                        </n-button>
                    </template>
                    <n-space vertical>
                        <span>抖音，看我看我~</span>
                        <n-image width="150" src="/11.jpeg" />
                    </n-space>
                </n-popover>

                <n-popover placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-button secondary round>
                            <template #icon>
                                <n-icon>
                                    <svg t="1697776973251" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4157" width="200" height="200">
                                        <path
                                            d="M769.365333 277.162667c-40.96-83.968-144.042667-155.648-260.778666-155.648-61.44 0-154.965333 21.162667-224.938667 105.813333-46.762667 56.661333-62.464 122.538667-52.565333 188.757333 6.826667 45.397333 32.085333 105.130667 68.266666 143.018667 13.653333-95.914667 64.170667-171.349333 130.389334-226.645333 119.125333-91.818667 246.784-86.698667 339.626666-55.296z"
                                            fill="#2c2c2c" opacity=".7" p-id="4158"></path>
                                        <path
                                            d="M862.549333 420.864c-73.045333-94.890667-199.68-121.514667-313.685333-79.189333 3.754667 1.024 7.509333 2.048 10.922667 3.413333 168.96 57.685333 260.437333 240.981333 204.117333 409.258667-15.018667 44.714667-38.912 83.968-69.290667 116.394666 36.522667-10.24 73.728-24.576 105.472-49.152 129.024-98.645333 154.282667-281.6 62.464-400.725333z"
                                            fill="#2c2c2c" opacity=".7" p-id="4159"></path>
                                        <path
                                            d="M508.245333 724.309333c-25.6 0-50.517333-3.072-74.410666-8.192-3.072-0.682667-5.802667-1.024-9.216-0.682666-7.168 0.341333-13.312 2.730667-19.456 6.485333l-78.848 50.517333c-2.048 1.365333-4.437333 2.389333-7.168 2.730667-6.826667 0.341333-12.629333-5.12-12.970667-11.946667 0-3.072 1.024-6.144 1.706667-9.216 0.341333-1.706667 8.874667-39.594667 13.994666-63.488 0.682667-2.730667 1.024-5.12 1.024-7.850666-0.341333-8.192-4.778667-15.36-10.922666-19.456-83.285333-56.661333-140.288-145.749333-152.576-237.568-20.821333 32.768-32.085333 59.050667-43.008 96.938666-40.618667 141.994667 48.469333 312.32 193.536 360.106667 166.912 54.954667 326.314667-6.826667 381.269333-148.821333 6.826667-17.408 13.994667-46.421333 15.36-70.997334-58.368 43.008-120.149333 61.44-198.314667 61.44z"
                                            fill="#2c2c2c" opacity=".7" p-id="4160"></path>
                                        <path
                                            d="M508.245333 724.309333c-25.6 0-50.517333-3.072-74.410666-8.192-3.072-0.682667-5.802667-1.024-9.216-0.682666-7.168 0.341333-13.312 2.730667-19.456 6.485333l-78.848 50.517333c-2.048 1.365333-4.437333 2.389333-7.168 2.730667-6.826667 0.341333-12.629333-5.12-12.970667-11.946667 0-3.072 1.024-6.144 1.706667-9.216 0.341333-1.706667 8.874667-39.594667 13.994666-63.488 0.682667-2.730667 1.024-5.12 1.024-7.850666-0.341333-8.192-4.778667-15.36-10.922666-19.456-83.285333-56.661333-140.288-145.749333-152.576-237.568-20.821333 32.768-32.085333 59.050667-43.008 96.938666-40.618667 141.994667 48.469333 312.32 193.536 360.106667 166.912 54.954667 326.314667-6.826667 381.269333-148.821333 6.826667-17.408 13.994667-46.421333 15.36-70.997334-58.368 43.008-120.149333 61.44-198.314667 61.44z"
                                            fill="#2c2c2c" opacity=".7" p-id="4161"></path>
                                    </svg>
                                </n-icon>
                            </template>
                            公众号
                        </n-button>
                    </template>
                    <n-space vertical>
                        <span>微信公众号，关注走起~</span>
                        <n-image width="150" src="/12.jpg" />
                    </n-space>
                </n-popover>

                <n-popover placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-button secondary round>
                            <template #icon>
                                <n-icon>
                                    <svg t="1697723340679" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4019"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                                        <path
                                            d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                                            fill="#5D5D5D" p-id="4020"></path>
                                    </svg>
                                </n-icon>
                            </template>
                            微信号
                        </n-button>
                    </template>
                    <n-space vertical>
                        <span>微信号，交个朋友~</span>
                        <n-image width="150" src="/13.jpg" />
                    </n-space>
                </n-popover>

                <n-popover placement="bottom" trigger="hover">
                    <template #trigger>
                        <n-button secondary round tag="a" href="https://github.com/sancijun">
                            <n-icon>
                                <svg t="1697723484740" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4989" width="200" height="200">
                                    <path
                                        d="M511.542857 14.057143C228.914286 13.942857 0 242.742857 0 525.142857 0 748.457143 143.2 938.285714 342.628571 1008c26.857143 6.742857 22.742857-12.342857 22.742858-25.371429v-88.571428c-155.085714 18.171429-161.371429-84.457143-171.771429-101.6C172.571429 756.571429 122.857143 747.428571 137.714286 730.285714c35.314286-18.171429 71.314286 4.571429 113.028571 66.171429 30.171429 44.685714 89.028571 37.142857 118.857143 29.714286 6.514286-26.857143 20.457143-50.857143 39.657143-69.485715-160.685714-28.8-227.657143-126.857143-227.657143-243.428571 0-56.571429 18.628571-108.571429 55.2-150.514286-23.314286-69.142857 2.171429-128.342857 5.6-137.142857 66.4-5.942857 135.428571 47.542857 140.8 51.771429 37.714286-10.171429 80.8-15.542857 129.028571-15.542858 48.457143 0 91.657143 5.6 129.714286 15.885715 12.914286-9.828571 76.914286-55.771429 138.628572-50.171429 3.314286 8.8 28.228571 66.628571 6.285714 134.857143 37.028571 42.057143 55.885714 94.514286 55.885714 151.2 0 116.8-67.428571 214.971429-228.571428 243.314286a145.714286 145.714286 0 0 1 43.542857 104v128.571428c0.914286 10.285714 0 20.457143 17.142857 20.457143 202.4-68.228571 348.114286-259.428571 348.114286-484.685714 0-282.514286-229.028571-511.2-511.428572-511.2z"
                                        p-id="4990"></path>
                                </svg>
                            </n-icon>
                            &nbsp;GitHub
                        </n-button>
                    </template>
                    <span>GitHub, 有你想要的~</span>
                </n-popover>

            </n-space>
            <!--  -->
            <n-collapse>
                <n-collapse-item title="一、创建应用" name="1">
                    <n-p>在 <n-a href="https://open.feishu.cn/app/">飞书开放平台-创建企业自建应用</n-a>。
                        <n-image src="/1.png" alt="飞书开放平台-创建企业自建应用" />
                    </n-p>
                    <n-p>在 应用后台-权限管理（点击上面的创建好的应用即可进入对应的应用管理后台） 中找到 <n-text type="info">云文档</n-text>
                        相关的权限，全部勾选，点击批量开通。然后点击版本管理与发布，创建一个版本。
                        <n-image src="/2.png" alt="应用后台-添加云文档权限" />
                    </n-p>
                    <n-p>在 <n-a href="https://feishu.cn/admin/appCenter/audit">飞书管理后台-应用审核</n-a> 中进行审批，点击通过即可。
                        <n-image src="/3.png" alt="应用审核" />
                    </n-p>
                </n-collapse-item>
                <n-collapse-item title="二、应用设置" name="2">
                    <n-p>在 应用后台-凭证与基础信息 中找到 <n-text type="info">App ID</n-text> 和 <n-text type="info">App Secret</n-text> 。
                        <n-image src="/4.png" alt="appid&secret" />
                    </n-p>
                    <n-p>填写 App ID 和 App Secret（这些信息只会保存在你的浏览器中，不会泄漏）。</n-p>
                    <n-input v-model:value="appid" type="text" placeholder="请输入 App ID" @change="saveConfigurations"
                        @keydown.enter="saveConfigurations" />
                    <n-input v-model:value="appsecret" type="text" placeholder="请输入 App Secret" status="success"
                        :style="{ marginTop: '15px' }" @change="saveConfigurations" @keydown.enter="saveConfigurations" />
                    <n-p>在应用后台-安全设置中添加重定向 URL: <n-text type="info">https://sancijun.github.io/doc-export-helper</n-text> 或 <n-text type="info">https://sancijun.gitee.io/doc-export-helper</n-text>
                        <n-image src="/5.png" alt="image.png" />
                    </n-p>
                </n-collapse-item>
                <n-collapse-item title="三、图床设置" name="3">
                    <n-p>请选择图片及附件上传方式，目前支持 Github、Gitee、腾讯云
                        COS、本地保存。如果你选择并设置了图床，图片及附件将按照你的设置上传到指定位置。同时，以下信息只会存储在你的浏览器本地，不会泄漏。</n-p>
                    <n-select v-model:value="selectedUploadMethod" :options="uploadMethods"
                        :style="{ marginTop: '15px' }" @update:value="onUploadMethodUpdate" />
                    <div v-if="selectedUploadMethod">
                        <template v-if="selectedUploadMethod === 'Github'">
                            <n-input v-model:value="configurations.Github.repo" type="text"
                                placeholder="仓库名，例如：sancijun/weread-toolbox" :style="{ marginTop: '15px' }"
                                @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Github.branch" type="text" placeholder="分支，例如 master"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Github.token" type="text" placeholder="GitHub 个人访问令牌"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Github.path" type="text" placeholder="文件存放路径，例如：/images"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Github.customUrl" type="text"
                                placeholder="自定义域名：https://cdn.jsdelivr.net/gh/sancijun/images"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                        </template>
                        <template v-else-if="selectedUploadMethod === 'Gitee'">
                            <n-input v-model:value="configurations.Gitee.repo" type="text"
                                placeholder="仓库名，例如：sancijun/weread-toolbox" :style="{ marginTop: '15px' }"
                                @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Gitee.branch" type="text" placeholder="分支，例如 master"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Gitee.token" type="text" placeholder="Gitee 个人访问令牌"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Gitee.path" type="text" placeholder="文件存放路径，例如：/images"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                        </template>
                        <template v-else-if="selectedUploadMethod === 'Tencent'">
                            <n-input v-model:value="configurations.Tencent.secretId" type="text"
                                placeholder="请输入腾讯云 Secret ID" :style="{ marginTop: '15px' }"
                                @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Tencent.secretKey" type="text"
                                placeholder="请输入腾讯云 Secret Key" :style="{ marginTop: '15px' }"
                                @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Tencent.region" type="text" placeholder="请输入腾讯云 Region"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Tencent.bucketName" type="text"
                                placeholder="请输入腾讯云 Bucket" :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                            <n-input v-model:value="configurations.Tencent.path" type="text" placeholder="请输入腾讯云 Path"
                                :style="{ marginTop: '15px' }" @change="saveConfigurations" />
                        </template>
                    </div>

                </n-collapse-item>
                <n-collapse-item title="四、导出文件" name="4">
                    <n-p>设置完以上参数后，根据你的需要点击 导出云文档 和 导出知识库 按钮（下面是两个可以点击的按钮哦）：</n-p>

                    <n-p><n-button strong secondary round type="primary" @click="onClickExport('docs')">导出云文档</n-button>
                        点击导出云文档按钮，会跳转到授权页面，授权通过后，选择你需要导出的文件，再点击 <n-text type="success">导出</n-text> 按钮即可。如果没有选择任何文件，则默认导出所有文件，这会遍历整个云空间，导出所有飞书云文档。</n-p>
                    <n-p><n-button strong secondary round type="primary" @click="onClickExport('wiki')">导出知识库</n-button>
                        点击导出知识库按钮，会跳转到授权页面，授权通过后，选择需要导出的知识库（如果没有选择，默认导出所有知识库），当前仅支持下载整个知识库中的所有文档。</n-p>

                </n-collapse-item>
                <n-collapse-item title="五、常见问题" name="5">
                    <n-text strong>为什么只能下载一部分云文档？</n-text>
                    <n-p>目前只支持 doc 和 docx 文件的下载，表格、多维表格可以考虑手动导出（如有需要可以点击右下角 <n-text type="info">功能建议</n-text>
                        按钮给三此君提需求）。云文档下载后将会被转换成 Markdown，图片及附件将被上传到你指定的位置。</n-p>
                    <n-text strong>为什么有些内容没有导出？</n-text>
                    <n-p>飞书提供的 API 不支持导出 Diagram 等 Block，所以文档导出助手也无法导出这部分内容，还有部分是三此君还没有实现的，如有需要可以点击右下角 <n-text
                            type="info">功能建议</n-text> 按钮给三此君提需求。</n-p>

                </n-collapse-item>
            </n-collapse>
        </div>
    </div>
    <!-- 更多内容 -->
    <div :style="{ margin: '0 auto', marginTop: '20px', maxWidth: '70%', backgroundColor: '#fff' }">
        <div :style="{ padding: '20px', paddingLeft: '40px' }" font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
            <n-h3 prefix="bar" type="success" align-text>
                来都来了，总得带点好东西走呀~
            </n-h3>
            <n-grid x-gap="12" :cols="4">
                <n-gi>
                    <n-card tag="a" href="https://www.bilibili.com/video/BV1sM4y1Y74k">
                        <n-image preview-disabled src="/6.jpg" />
                        <n-text>全网唯一支持导出图文的微信读书插件，还可以同步 Notion，惊艳！</n-text>
                    </n-card>
                </n-gi>
                <n-gi>
                    <n-card tag="a" href="https://www.bilibili.com/video/BV15P411a7C6">
                        <n-image preview-disabled src="/7.png" />
                        <n-text>我开发了一款 Obsidian 图床插件，全都进来薅羊毛！</n-text>
                    </n-card>
                </n-gi>
                <n-gi>
                    <n-card tag="a" href="https://www.bilibili.com/video/BV1534y157RF">
                        <n-image preview-disabled src="/8.jpg" />
                        <n-text>一张图进阶 RocketMQ 系列，妥妥的收藏级宝藏系列！</n-text>
                    </n-card>
                </n-gi>
                <n-gi>
                    <n-card tag="a" href="https://www.bilibili.com/video/BV1F24y147Hn">
                        <n-image preview-disabled src="/9.jpg" />
                        <n-text>7 万字性能调优笔记，拿走拿走别客气！</n-text>
                    </n-card>
                </n-gi>
            </n-grid>
        </div>
    </div>
    <!-- 导出 -->
    <n-modal v-model:show="showExport" transform-origin="center">
        <Export />
    </n-modal>
    <!-- 悬浮按钮 -->
    <n-affix :bottom="80" :right="45" :listen-to="() => containerRef">
        <n-space vertical>

            <n-popover placement="right" trigger="hover">
                <template #trigger>
                    <n-button circle size="large" @click="onClickExport('docs')">
                        <template #icon>
                            <n-icon>
                                <svg t="1697778370428" class="icon" viewBox="0 0 1290 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="10814" width="200" height="200">
                                    <path
                                        d="M950.817505 373.485177A352.749911 352.749911 0 0 1 719.03459 705.932934V414.089483h84.592305l-169.184609-169.18461-169.18461 169.18461h84.592305v311.299681a355.28768 355.28768 0 0 1-310.453759-345.982526v-5.921461a356.133603 356.133603 0 1 1 711.421283 0z"
                                        p-id="10815" fill="#515151"></path>
                                    <path
                                        d="M1268.884571 673.787858v49.90946a301.148605 301.148605 0 0 1-300.302682 300.302682h-668.279207A301.148605 301.148605 0 0 1 0 723.697318v-49.90946a301.994528 301.994528 0 0 1 239.396222-294.38122 353.595834 353.595834 0 0 1 60.90646-5.921461H507.553828l-40.604306 40.604306h84.592305v338.369219h169.184609v-338.369219h84.592305L761.330743 373.485177h205.5593A301.148605 301.148605 0 0 1 1268.884571 673.787858z"
                                        p-id="10816" fill="#515151"></path>
                                </svg>
                            </n-icon>
                        </template>
                    </n-button>
                </template>
                <span>导出云文档</span>
            </n-popover>

            <n-popover placement="right" trigger="hover">
                <template #trigger>
                    <n-button circle size="large" @click="onClickExport('wiki')">
                        <template #icon>
                            <n-icon>
                                <svg t="1697814728888" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="8525" width="200" height="200">
                                    <path
                                        d="M117.66113281 774.88964844v87.59179687h175.17480469v-87.59179687H117.66113281z m175.17480469-525.53320313v-87.59179687H117.66113281v87.59179687h175.17480469zM117.66113281 293.15234375h175.17480469v437.95019531H117.66113281V293.15234375z"
                                        p-id="8526"></path>
                                    <path
                                        d="M736.859375 873.21289063l-22.66699219-84.60351563 169.20703125-45.34277344 22.66699219 84.60351563-169.20703125 45.34277343z m-147.34863281-549.93164063L758.70898438 277.94726562 872.06152344 700.96484375l-169.20703125 45.34277344-113.34375-423.02636719z m-34.02246094-126.90527344l169.22460938-45.34277343 22.66699218 84.60351562-169.20703125 45.34277344-22.68457031-84.60351563zM380.41894531 774.88964844h175.18359375v87.59179687H380.41894531v-87.59179687z m0-481.73730469h175.18359375v437.95019531H380.41894531V293.15234375z m0-131.38769531h175.18359375v87.59179687H380.41894531v-87.59179687z"
                                        p-id="8527"></path>
                                </svg>
                            </n-icon>
                        </template>
                    </n-button>
                </template>
                <span>导出知识库</span>
            </n-popover>

            <n-popover placement="right" trigger="hover">
                <template #trigger>
                    <n-button circle size="large" tag="a"
                        href="https://github.com/sancijun/doc-export-helper/issues/new?assignees=&labels=enhancement&projects=&template=---feature.md&title=%5BFeature%5D+">
                        <template #icon>
                            <n-icon>
                                <svg t="1697777215547" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6329" width="200" height="200">
                                    <path
                                        d="M509.945713 338.983481c-95.924723 0-173.98252 78.033237-173.98252 173.934424 0 95.913467 78.056774 173.946704 173.98252 173.946704 27.333532 0 53.132104-6.514367 76.17082-17.796318l-0.024559-0.057305c6.245238-3.169179 10.526751-9.629311 10.526751-17.10354 0-10.598382-8.590656-19.237133-19.213597-19.237133-2.492774 0-4.866844 0.490164-7.051603 1.356904l-0.101307-0.225127c-18.196431 9.087982-38.614459 14.351869-60.306504 14.351869-74.587765 0-135.248334-60.662615-135.248334-135.238101 0-74.564229 60.660568-135.201262 135.248334-135.201262 74.588789 0 135.296429 60.637032 135.296429 135.201262 0 13.313214-2.029216 26.164916-5.616928 38.319747l0.344854 0.134053c-0.36532 1.479701-0.580215 3.019777-0.580215 4.611018 0 10.597359 8.589632 19.190061 19.212574 19.190061 7.319709 0 13.675464-4.081968 16.918321-10.090822l0.334621 0.12996c0.330528-1.049912 0.652869-2.104941 0.963954-3.163039 0.152473-0.454348 0.279363-0.919952 0.398066-1.38965 4.343935-15.180747 6.710842-31.182186 6.710842-47.740304C683.928233 417.016719 605.896018 338.983481 509.945713 338.983481zM921.639193 416.886759l-66.230424 0c-3.422959-12.533454-7.649214-25.137517-12.888542-38.309514l-3.870144-9.299807c-5.098111-11.824303-10.952446-23.461341-17.326621-34.673707l46.807049-46.806026c4.814656-4.816702 7.481392-11.212366 7.481392-18.010189 0-6.797823-2.665713-13.19451-7.481392-18.010189l-96.986915-96.964402c-9.655917-9.653871-26.437116-9.653871-36.043914 0l-46.806026 46.806026c-11.375072-6.467295-23.36822-12.438287-36.774555-18.24555l-8.685823-3.540639c-11.992125-4.721535-24.311709-8.851599-36.820604-12.298094L606.012675 101.353362c0-14.043854-11.42419-25.468045-25.492604-25.468045L443.383738 75.885318c-14.068414 0-25.491581 11.447726-25.491581 25.468045l0 66.185398c-12.510942 3.445472-24.856108 7.553023-36.775578 12.298094l-10.763135 4.460592c-11.800767 5.098111-23.462365 10.927887-34.697243 17.324574l-46.828538-46.806026c-9.630335-9.630335-26.390044-9.630335-36.042891 0l-96.964402 96.964402c-4.815679 4.792143-7.482415 11.212366-7.482415 18.010189 0 6.797823 2.6432 13.169951 7.482415 18.010189l46.806026 46.806026c-6.467295 11.376095-12.462846 23.462365-18.410302 37.199227l-3.422959 8.28571c-4.744048 11.94403-8.827039 24.263613-12.249999 36.797068l-66.23247 0c-14.043854 0-25.469068 11.44875-25.469068 25.469068l0 137.137357c0 14.020318 11.425214 25.443485 25.469068 25.443485l66.23247 0c3.446495 12.580526 7.694239 25.209148 12.958126 38.522362l3.799536 9.110495c5.146207 11.848862 10.952446 23.462365 17.325597 34.626635l-46.782489 46.817282c-9.937326 9.91379-9.937326 26.106588 0 36.020378l96.963379 96.963379c9.630335 9.582239 26.390044 9.629311 36.019355 0l46.828538-46.830585c11.234879 6.4192 22.825868 12.226462 34.55705 17.325597l7.9296 3.304256 3.0208 1.226944c11.94403 4.720511 24.26566 8.828063 36.775578 12.226462l0 66.184375c0 14.068414 11.423167 25.492604 25.491581 25.492604L580.56612 945.9289c14.07046 0 25.492604-11.472286 25.492604-25.492604l0-66.184375c12.558014-3.445472 25.137517-7.648191 38.237883-12.840446l9.347902-3.870144c11.849886-5.146207 23.463388-10.95347 34.697243-17.373693l46.830585 46.830585c9.606799 9.582239 26.387997 9.629311 36.017308 0l97.011474-96.963379c9.914814-9.91379 9.914814-26.106588 0-36.020378l-46.829562-46.817282c6.420223-11.259438 12.370749-23.202445 18.081821-36.420491l1.509377-3.588735 2.220574-5.475711c4.744048-12.013615 8.850575-24.335245 12.272511-36.775578l66.233494 0c14.043854 0 25.468045-11.400654 25.468045-25.443485L947.157379 442.355827C947.109284 428.335509 935.685094 416.886759 921.639193 416.886759zM906.604778 564.40965l-83.060741 0-4.626367 19.685341c-3.471055 14.635325-8.04728 29.05678-13.972223 43.99705l-1.415232 3.540639-2.031263 4.792143c-5.948479 13.737886-12.911054 27.096125-20.72502 39.701211l-10.619872 17.206894 58.70196 58.71424-75.698053 75.67247-58.678424-58.678424-17.231453 10.574846c-12.935614 7.977695-26.15366 14.82259-41.590234 21.574365l-7.741311 3.114944c-13.973246 5.522784-28.371164 10.055007-42.792619 13.501502l-19.663852 4.672416 0 82.895989L458.419176 905.375276l0-82.895989-19.660782-4.672416c-14.918781-3.587712-29.315676-8.167007-45.319162-14.494109l-7.129374-2.972705c-13.595646-5.901407-26.907836-12.887518-39.676651-20.723997l-17.207917-10.574846-58.678424 58.678424-75.697029-75.67247 58.678424-58.71424-10.598382-17.206894c-7.907087-12.769838-14.870686-26.223245-21.314445-41.069371l-3.351328-8.28571c-5.499248-13.878079-10.007935-28.230971-13.430894-42.723034l-4.695952-19.638269-82.966597 0L117.370663 457.390241l82.966597 0 4.695952-19.637246c3.517103-14.82259 8.167007-29.433356 14.186094-44.587498l3.233648-7.765871c5.877871-13.595646 12.841469-26.954909 20.700461-39.724747l10.620895-17.206894-58.678424-58.655911 75.697029-75.67247 58.654888 58.654888 17.231453-10.598382c12.746302-7.860015 26.15366-14.800078 40.998763-21.219277l8.451486-3.470031c13.594623-5.405103 27.945469-9.936303 42.627866-13.453407l19.684318-4.626367L458.441689 116.435872l107.066481 0 0 82.991156 19.683295 4.626367c14.730493 3.493567 28.940123 8.001231 44.612057 14.186094l7.743358 3.257184c13.760398 5.947456 27.143197 12.911054 39.747259 20.700461l17.206894 10.598382 58.654888-58.654888 75.720565 75.67247-58.678424 58.655911 10.5728 17.183358c7.883551 12.81691 14.869662 26.293853 21.363564 41.259706l3.372817 8.167007c5.477758 13.902638 10.009981 28.253484 13.455453 42.627866l4.626367 19.684318 83.013669 0L906.602731 564.40965z"
                                        fill="#515151" p-id="6330"></path>
                                </svg>
                            </n-icon>
                        </template>
                    </n-button>
                </template>
                <span>功能建议</span>
            </n-popover>

            <n-popover placement="right" trigger="hover">
                <template #trigger>
                    <n-button circle size="large" tag="a"
                        href="https://github.com/sancijun/doc-export-helper/issues/new?assignees=&labels=&projects=&template=---bug.md&title=%5BBug%5D+">
                        <template #icon>
                            <n-icon>
                                <svg t="1697777162390" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5258" width="200" height="200">
                                    <path
                                        d="M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5 0.2 13 0.7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7 6 17.2 13.6 33.6 22.7 49 24.3 41.5 59 76.2 100.5 100.5 28.9 16.9 61 28.8 95.3 34.5 4.4 0 8-3.6 8-8V484c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v464.2c0 4.4 3.6 8 8 8 34.3-5.7 66.4-17.6 95.3-34.5 41.5-24.3 76.2-59 100.5-100.5 9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7 0.4-6.4 0.7-12.8 0.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                                        p-id="5259" fill="#515151"></path>
                                    <path
                                        d="M304 280h416c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z"
                                        p-id="5260" fill="#515151"></path>
                                </svg>
                            </n-icon>
                        </template>
                    </n-button>
                </template>
                <span>缺陷反馈</span>
            </n-popover>

        </n-space>
    </n-affix>
</template>
  
<script lang="ts" setup>
import {
    NButton,
    NInput,
    NSelect,
    NCollapse,
    NCollapseItem,
    NP,
    NH1,
    NH3,
    NText,
    NA,
    NImage,
    NModal,
    NCard,
    NAffix,
    NSpace,
    NPopover,
    NIcon,
    NGi,
    NGrid,
SelectOption,
} from 'naive-ui';
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const appid = ref('');
const appsecret = ref('');
const showExport = ref(false)
let router = useRoute()
let { app_id, app_secret } = router.query

const uploadMethods = [
    {
        label: 'Github',
        value: 'Github',
    },
    {
        label: 'Gitee',
        value: 'Gitee',
    },
    {
        label: '腾讯云',
        value: 'Tencent',
    },
    {
        label: '本地保存',
        value: 'Local',
    },
];

const selectedUploadMethod = ref<string>('Github');

const configurations = reactive({
    Github: { repo: '', branch: 'master', token: '', path: '', customUrl: '' },
    Gitee: { repo: '', branch: 'master', token: '', path: '', customUrl: '' },
    Tencent: { secretId: '', secretKey: '', region: '', bucketName: '', path: '' },
    Local: { path: '' },
});

// 当页面刷新的时候从 localStorage 加载配置
onMounted(() => {
    console.log('Index onMounted')
    if (app_id && app_secret) {
        showExport.value = true
    }
    appid.value = localStorage.getItem('appid') || '';
    appsecret.value = localStorage.getItem('appsecret') || '';
    selectedUploadMethod.value = localStorage.getItem('currentUploader') || 'Github';
    const storedConfigurations = localStorage.getItem('configurations');
    if (storedConfigurations) {
        const parsedConfigurations = JSON.parse(storedConfigurations);
        Object.assign(configurations, parsedConfigurations);
    }
});
const saveConfigurations = () => {
    // console.log('saveConfigurations', JSON.stringify(configurations))
    localStorage.setItem('appid', appid.value);
    localStorage.setItem('appsecret', appsecret.value);
    localStorage.setItem('currentUploader', selectedUploadMethod.value || '');
    localStorage.setItem('configurations', JSON.stringify(configurations));
};

const onUploadMethodUpdate = (value: string, option: SelectOption) => {
    saveConfigurations();
}

const onClickExport = (type: string) => {
    // 点击导出按钮时执行的操作，这里跳转到 redirect_url
    let redirect_url = `https://sancijun.github.io/doc-export-helper?app_id=${appid.value}&app_secret=${appsecret.value}&export_type=${type}`;
    let export_url = `https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=${encodeURIComponent(
        redirect_url
    )}&app_id=${appid.value}`;
    console.log('onClickExport: ', export_url)
    window.open(export_url);
}

const containerRef = ref<HTMLElement | undefined>(undefined)

</script>
  
<style></style>