# dashuai.life 网站源代码项目

![](https://img.shields.io/badge/Web%20Framework-Vue-brightgreen)

本项目使用Vue实现，利用deploy.sh脚本将build后的页面提交到gh-pages分支，结合GitHub提供的Pages展示功能完成网站部署，同时引入```Cloudflare```和域名[dashuai.life](https://dashuai.life)实现全球CDN分发和HTTPS访问。

## 技术架构

- 前端框架：Vue.js
- 部署工具：deploy.sh脚本
- 页面展示：GitHub Pages
- CDN服务：Cloudflare
- 域名：[dashuai.life](https://dashuai.life)

## 技术特点

- 使用Vue技术栈，具有高效、组件化、易维护等特点；
- 使用Cloudflare CDN技术，实现全球分发，并提供HTTPS访问加密；
- 基于deploy.sh自动化部署脚本，提高部署效率；
- 使用GitHub Pages提供的免费云服务，实现网站页面展示及托管。



## 使用方法

1. 克隆代码到本地：`git clone https://github.com/dashuai2ml/dashuai.github.io.git`；
2. 安装依赖：`npm install`；
3. 开发环境运行：`npm run dev`；
4. 构建项目：`npm run build`；
5. 执行deploy.sh脚本：`./deploy.sh`，将build后的页面提交到gh-pages分支，并发布到GitHub Pages上。

## 注意事项

1. 在使用deploy.sh脚本前，需要将文件中的`<USERNAME>`和`<REPO>`替换为实际的GitHub用户名和项目仓库名；
2. 长时间不更新项目，会导致Cloudflare CDN缓存过期，需要更新缓存。

## 鸣谢

在编写此项目时，我参考了以下资源：

- [Vue.js官方文档](https://cn.vuejs.org/)
- [Axios官方文档](https://github.com/axios/axios)
- [Cloudflare官方文档](https://developers.cloudflare.com/)
- [Github Pages官方文档](https://pages.github.com/)
- [highlight.js](https://github.com/highlightjs/highlight.js)：一个用于对代码进行高亮显示的JavaScript库。它支持多种语言的代码高亮，可以轻松地嵌入到网页中。
- [marked](https://github.com/markedjs/marked)：一个用于将Markdown格式的文本转换成HTML的JavaScript库。它具有很好的可扩展性和灵活性，可以方便地通过插件扩展它的功能。

以上这些资源都对本项目的开发有很大的帮助，让我能够更快更好地理解和应用相关技术和工具。感谢这些资源的创作者和维护者为开源社区做出的贡献。

## 授权协议

该项目采用[MIT授权协议](https://opensource.org/licenses/MIT)

    Copyright © 2020 dashuai

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.