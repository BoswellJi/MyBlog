import{_ as e,c as l,o as i,d as a}from"./app-B8oYO7Rg.js";const n={},t=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。</p><h2 id="涉及到的技术" tabindex="-1"><a class="header-anchor" href="#涉及到的技术"><span>涉及到的技术</span></a></h2><ul><li>single-spa</li><li>sandbox</li><li>import-html-entry</li></ul><h2 id="样式隔离的实现" tabindex="-1"><a class="header-anchor" href="#样式隔离的实现"><span>样式隔离的实现</span></a></h2><ul><li>沙箱的<code>scoped css</code>功能；</li><li><code>Web Component</code> 的 <code>Shadow DOM</code> 隔离；</li></ul><h2 id="脚本隔离的实现" tabindex="-1"><a class="header-anchor" href="#脚本隔离的实现"><span>脚本隔离的实现</span></a></h2><ul><li>沙盒</li></ul><h2 id="运行机制" tabindex="-1"><a class="header-anchor" href="#运行机制"><span>运行机制</span></a></h2><ul><li><p>registerMicroApps():</p><ul><li>registerApplication()：遍历配置的微应用，调用<code>Single-spa</code>的注册</li><li>loader(): 微应用安装完成之前的加载处理</li><li>loadApp()：加载微应用 <ul><li>genAppInstanceIdByName()：根据子应用名称，生成一个应用实例 id</li><li>configuration：获取对于框架的全局配置</li><li>importEntry(): 从应用入口导入 html 和脚本</li><li>getDefaultTplWrapper(): 获取子应用的入口 html 片段</li><li>createSandboxContainer(): 创建沙盒</li><li>parcelConfigGetter(): 子应用启动，安装，卸载生命周期</li></ul></li></ul></li><li><p>start():</p><ul><li>doPrefetchStrategy(): 默认预加载微应用</li><li>startSingleSpa(): 调用<code>Single-spa</code>的<code>start()</code></li></ul></li></ul>',10),r=[t];function o(s,c){return i(),l("div",null,r)}const h=e(n,[["render",o],["__file","qiankun.html.vue"]]),p=JSON.parse('{"path":"/microfrontend/qiankun.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"涉及到的技术","slug":"涉及到的技术","link":"#涉及到的技术","children":[]},{"level":2,"title":"样式隔离的实现","slug":"样式隔离的实现","link":"#样式隔离的实现","children":[]},{"level":2,"title":"脚本隔离的实现","slug":"脚本隔离的实现","link":"#脚本隔离的实现","children":[]},{"level":2,"title":"运行机制","slug":"运行机制","link":"#运行机制","children":[]}],"git":{"updatedTime":1718759308000,"contributors":[{"name":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":1}]},"filePathRelative":"microfrontend/qiankun.md"}');export{h as comp,p as data};