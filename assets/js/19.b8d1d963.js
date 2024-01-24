(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{386:function(t,s,a){t.exports=a.p+"assets/img/26.f560fe33.png"},387:function(t,s,a){t.exports=a.p+"assets/img/27.8f656b67.png"},388:function(t,s,a){t.exports=a.p+"assets/img/28.0c497183.png"},389:function(t,s,a){t.exports=a.p+"assets/img/29.b4cef9f3.png"},390:function(t,s,a){t.exports=a.p+"assets/img/30.153fc0ae.png"},391:function(t,s,a){t.exports=a.p+"assets/img/31.65b40851.png"},615:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实际上线的流程说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际上线的流程说明"}},[t._v("#")]),t._v(" 实际上线的流程说明")]),t._v(" "),s("p",[s("img",{attrs:{src:a(386),alt:"image.png"}})]),t._v(" "),s("p",[t._v("说明：前端需要做的事情就是配合发布")]),t._v(" "),s("ol",[s("li",[t._v("确保提交的分支正确，分支代码里没有非常明显的错误，如代码冲突")]),t._v(" "),s("li",[t._v("因为部署平台要执行打包命令，这个打包命令是前端提供的，这里要对接好，并且打包时的优化要前端自己做")])]),t._v(" "),s("h1",{attrs:{id:"配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[t._v("#")]),t._v(" 配置环境变量")]),t._v(" "),s("h2",{attrs:{id:"认识环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识环境变量"}},[t._v("#")]),t._v(" 认识环境变量")]),t._v(" "),s("p",[s("strong",[t._v("概念：同一个")]),s("code",[t._v("**'变量'**")]),s("strong",[t._v("的值可以根据不同的环境自动切换与环境相对应的值，这样的变量就称之为环境变量")]),t._v(" "),s("img",{attrs:{src:a(387),alt:"image.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("场景：项目上线时，我们的接口基地址发生了变化\n由 '"),s("a",{attrs:{href:"https://api-hmzs.itheima.net/v1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api-hmzs.itheima.net/v1"),s("OutboundLink")],1),t._v("' 变成了 "),s("code",[t._v("[https://api-hmzs.itheima.net/api](https://api-hmzs.itheima.net/api)")]),s("br"),t._v("\n如果适配开发阶段和上线之后的不同的接口基地址呢？答案就是使用环境变量，它可以做到在开发环境时接口走接口A，在上线之后走接口B")])]),t._v(" "),s("h2",{attrs:{id:"环境变量的定义和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量的定义和使用"}},[t._v("#")]),t._v(" 环境变量的定义和使用")]),t._v(" "),s("h3",{attrs:{id:"定义位置和运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义位置和运行机制"}},[t._v("#")]),t._v(" 定义位置和运行机制")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("对应环境")])]),t._v(" "),s("th",[s("strong",[t._v("文件")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("开发环境")]),t._v(" "),s("td",[t._v(".env.development")]),t._v(" "),s("td",[t._v("当运行"),s("code",[t._v("vue-cli-service serve")])])]),t._v(" "),s("tr",[s("td",[t._v("的时候会以此文件为配置文件，这个文件中可以定义针对开发环境的环境变量")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("生产环境")]),t._v(" "),s("td",[t._v(".env.production")]),t._v(" "),s("td",[t._v("当运行"),s("code",[t._v("vue-cli-service build")])])]),t._v(" "),s("tr",[s("td",[t._v("的时候会以此文件为配置文件，这个文件中可以定义针对生产环境的环境变量")]),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"定义环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义环境变量"}},[t._v("#")]),t._v(" 定义环境变量")]),t._v(" "),s("p",[t._v("定义环境变量采用 "),s("code",[t._v("key = value")]),t._v("  的语法进行定义，其中key表示环境变量名称   value表示环境变量值")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("# just a flag\nENV = 'development'\n# base api\nVUE_APP_BASE_API = 'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//api-hmzs.itheima.net/v1'")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用环境变量"}},[t._v("#")]),t._v(" 使用环境变量")]),t._v(" "),s("p",[t._v("使用环境变量采用固定的前缀 "),s("code",[t._v("process.env.环境变量名")]),t._v("，环境变量名要与定义时的保持一致")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),t._v("\n")])])]),s("h3",{attrs:{id:"配置开发和生产环境下的baseurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置开发和生产环境下的baseurl"}},[t._v("#")]),t._v(" 配置开发和生产环境下的baseURL")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("# just a flag\nENV = 'development'\n\nVUE_APP_BASE_URL = 'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//api-hmzs.itheima.net/v1'")]),t._v("\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("# just a flag\nENV = 'production'\n\n# base api\nVUE_APP_BASE_URL= 'https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//api-hmzs.itheima.net/api'")]),t._v("\n")])])]),s("h2",{attrs:{id:"客户端环境变量的注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端环境变量的注意事项"}},[t._v("#")]),t._v(" 客户端环境变量的注意事项")]),t._v(" "),s("ol",[s("li",[t._v("客户端代码其实就是我们的"),s("code",[t._v("src目录")]),t._v("，如果在这个目录下使用环境变量，只能识别 "),s("code",[t._v("NODE_ENV")]),t._v(" "),s("code",[t._v("BASE_URL")]),t._v(" 和以 "),s("code",[t._v("VUE_APP_")]),t._v("  打头的环境变量，其它变量不可识别，非客户端代码没有此要求。其中"),s("code",[t._v("NODE_ENV")]),t._v("  可以自定义覆盖， BASE_URL 覆盖不了")]),t._v(" "),s("li",[t._v("为避免记忆负担，在业务中自定义环境变量的时候，推荐采用严格的 "),s("code",[t._v("VUE_APP")]),t._v("变量前缀打头")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(388),alt:"image.png"}})]),t._v(" "),s("h1",{attrs:{id:"微前端项目部署-了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微前端项目部署-了解"}},[t._v("#")]),t._v(" 微前端项目部署（了解）")]),t._v(" "),s("h2",{attrs:{id:"服务器环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境准备"}},[t._v("#")]),t._v(" 服务器环境准备")]),t._v(" "),s("p",[t._v("我们在本地使用Node准备好了两台服务器，如下图所示：\n"),s("img",{attrs:{src:a(389),alt:"image.png"}})]),t._v(" "),s("ol",[s("li",[t._v("serverforadmin为服务器A，是后台管理项目部署的位置，服务地址为 "),s("code",[t._v("http://localhost:8086")])]),t._v(" "),s("li",[t._v("serverforbigscreen为服务B，是前台可视化项目部署位置, 服务地址为"),s("code",[t._v("http://localhost:8089")])]),t._v(" "),s("li",[t._v("每一个服务中都有一个"),s("code",[t._v("public文件夹")]),t._v("，它是静态服务文件夹，是放置我们打包之后的代码的")]),t._v(" "),s("li",[t._v("对俩个项目分别进行打包，然后把生成的dist目录下的文件放到对应的服务器的public文件夹中")])]),t._v(" "),s("h2",{attrs:{id:"根据环境切换加载子应用的地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据环境切换加载子应用的地址"}},[t._v("#")]),t._v(" 根据环境切换加载子应用的地址")]),t._v(" "),s("blockquote",[s("p",[t._v("子应用大屏项目在开发时的服务地址为 "),s("code",[t._v("http://localhost:5173/big-screen")]),t._v("，在上线之后变成了"),s("code",[t._v("http://localhost:5173/big-screen")]),t._v("，为了适配上线之后的解析路径，我们根据当年所处的环境适配一下加载子应用的地址\nprocess.env.NODE_ENV  可以拿到当前运行的环境，是生产还是开发  development为开发环境")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("import { registerMicroApps, start } from 'qiankun'\n\nconst isDev = process.env.NODE_ENV === 'development'\n\nregisterMicroApps([\n  {\n    name: 'hmzs-big-screen',\n    entry: `${isDev ? '//localhost:5173' : '//localhost:8089'}`,\n    container: '#container',\n    activeRule: '/big-screen'\n  }\n])\n\nstart()\n\n")])])]),s("h2",{attrs:{id:"更改子应用的base配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改子应用的base配置"}},[t._v("#")]),t._v(" 更改子应用的base配置")]),t._v(" "),s("blockquote",[s("p",[t._v("vite.config.js中的配置项里有一个base配置，它决定了项目启动时的静态资源，比如js，css从哪个服务器下去获取，因为上线之后，子应用大屏项目的服务器地址变成了 "),s("code",[t._v("http://localhost:8089")]),t._v(" ，所以把base配置为 "),s("code",[t._v("http://localhost:8089")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fileURLToPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node:url'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vite'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vitejs/plugin-vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" qiankun "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vite-plugin-qiankun'")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("base")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8089/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("qiankun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hmzs-big-screen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("useDevMode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解决开发环境下的静态资源访问问题")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("origin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//127.0.0.1:5173'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("alias")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fileURLToPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"更改子应用的路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改子应用的路由"}},[t._v("#")]),t._v(" 更改子应用的路由")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createWebHistory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HomeView "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../views/HomeView.vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("history")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWebHistory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" router\n")])])]),s("h2",{attrs:{id:"打包独立部署到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包独立部署到服务器"}},[t._v("#")]),t._v(" 打包独立部署到服务器")]),t._v(" "),s("blockquote",[s("p",[t._v("在俩个项目中分别执行打包命令，生成打包文件之后，把打包文件手动拷贝到对应的服务器的public文件夹里\n执行 "),s("code",[t._v("node app.js")]),t._v(" 启动对应的服务器")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(390),alt:"image.png"}})]),t._v(" "),s("h3",{attrs:{id:"ngnix配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngnix配置"}},[t._v("#")]),t._v(" Ngnix配置")]),t._v(" "),s("p",[s("img",{attrs:{src:a(391),alt:"image.png"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/274425/1686317235753-30da0ada-381c-4dce-bed7-1616fec7e9ee.png#averageHue=%23080503&clientId=uaf1ea3f2-521b-4&from=paste&height=697&id=ue7151c46&originHeight=1394&originWidth=1554&originalType=binary&ratio=2&rotation=0&showTitle=false&size=659710&status=done&style=none&taskId=u3d12d140-fdd6-4d55-b18a-6f9216c2d6f&title=&width=777",alt:"image.png"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);