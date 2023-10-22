文档导出助手
============

本站用于下载备份飞书云文档，你只需要按照本站指引完成设置，即可导出选中（所有）的飞书云文档，导出的文档将转换成 Markdown，图片和附件按照你的设置上传到指定位置。

如果你已经完成设置，可以直接点击右下角 导出云文档 按钮，选择你要导出的文档（看清楚哦，右下键的按钮，后面要导出什么文档直接进来点击导出按钮即可）。使用过程中有任何问题您可以通过以下方式联系 三此君。

![联系三此君](https://img2022.cnblogs.com/blog/2740513/202207/2740513-20220706204136402-778725152.webp)

## 一、创建应用

在 [飞书开放平台-创建企业自建应用](https://open.feishu.cn/app/)。

![image.png](https://raw.githubusercontent.com/sancijun/images/master/pics/20231017125911280.png)

在 应用后台-权限管理（点击上面的创建好的应用即可进入对应的应用管理后台） 中找到 云文档 相关的权限，全部勾选，点击批量开通。然后点击版本管理与发布，创建一个版本。

![image.png](https://raw.githubusercontent.com/sancijun/images/master/pics/20231017130018657.png)

在 [飞书管理后台-应用审核](https://feishu.cn/admin/appCenter/audit) 中进行审批，点击通过即可。

![image.png](https://raw.githubusercontent.com/sancijun/images/master/pics/20231017130110515.png)

## 二、应用设置

在 应用后台-凭证与基础信息 中找到 App ID 和 App Secret 。

![image.png](https://raw.githubusercontent.com/sancijun/images/master/pics/20231017130203186.png)

填写 App ID 和 App Secret（这些信息只会保存在你的浏览器中，不会泄漏）。

在应用后台-安全设置中添加 重定向 URL: https://github.com/sancijun/doc-export-helper

![image.png](https://raw.githubusercontent.com/sancijun/images/master/pics/20231017130242264.png)

## 三、图床设置

请选择图片及附件上传方式，目前支持 Github、Gitee、腾讯云 COS、本地保存。如果你选择并设置了图床，图片及附件将按照你的设置上传到指定位置。同时，以下信息只会存储在你的浏览器本地，不会泄漏。

## 四、导出文件

设置完以上参数后，根据你的需要点击 导出云文档 和 导出知识库 按钮（下面是两个可以点击的按钮哦）：

- 导出云文档：点击导出云文档按钮，会跳转到授权页面，授权通过后，选择你需要导出的文件，再点击下载选中文件即可。当然，你也可以下载所有文件，这会遍历整个云空间，下载所有飞书云文档。

- 导出知识库：点击导出知识库按钮，会跳转到授权页面，授权通过后，选择需要导出的知识库，当前仅支持下载整个知识库中的所有文档。

## 五、常见问题

**为什么只能下载一部分云文档？**

目前只支持 doc 和 docx 文件的下载，表格、多维表格可以考虑手动导出（如有需要可以点击右下角 功能建议 按钮给三此君提需求）。云文档下载后将会被转换成 Markdown，图片及附件将被上传到你指定的位置。

**为什么有些内容没有导出？**

飞书提供的 API 不支持导出 Diagram 等 Block，所以文档导出助手也无法导出这部分内容，还有部分是三此君还没有实现的，如有需要可以点击右下角 功能建议 按钮给三此君提需求。

## 更多内容

**来都来了，总得带点好东西走呀~**

[全网唯一支持导出图文的微信读书插件，还可以同步 Notion，惊艳](https://www.bilibili.com/video/BV1sM4y1Y74k "微信读书工具箱")

[我开发了一款 Obsidian 图床插件，全都进来薅羊毛！](https://www.bilibili.com/video/BV15P411a7C6)

[一张图进阶 RocketMQ 系列，妥妥的收藏级宝藏系列！](https://www.bilibili.com/video/BV1534y157RF)

## 致谢

本项目导出飞书文档参考了 [dicarne/feishu-backup](https://github.com/dicarne/feishu-backup)，特此感谢。
