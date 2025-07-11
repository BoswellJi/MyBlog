import{_ as n,c as s,e as l,o as i}from"./app-CyJ7wwPI.js";const a={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[l(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>预处理指令 <ul><li>用来在真正编译之前对代码进行预处理；</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#ifdef GL_ES </span>
<span class="line">precision mediump float; </span>
<span class="line">#endif</span>
<span class="line"></span>
<span class="line">glsl es中用到的三种预处理指令：</span>
<span class="line"></span>
<span class="line">#ifdef GL_ES  #endif  是否定义了GL_ES宏</span>
<span class="line">#if           #endif  if语句</span>
<span class="line">#ifndef GL_ES #endif  是否没有定义GL_ES宏</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>内置宏</li></ul><ul><li>GL_ES ；</li><li>GL_FRAGMENT_PRECISION_HIGH；</li></ul><ul><li>宏定义 <ul><li>使用#define指令；</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">#define NUM 100  定义 NUM 为宏</span>
<span class="line">#if NUM == 100</span>
<span class="line">如果宏NUM为100执行这里的代码</span>
<span class="line">#else</span>
<span class="line">否则，执行这里</span>
<span class="line">#endif</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=n(a,[["render",t],["__file","预处理指令.html.vue"]]),r=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/6glsles%E7%9D%80%E8%89%B2%E5%99%A8%E8%AF%AD%E8%A8%80/%E9%A2%84%E5%A4%84%E7%90%86%E6%8C%87%E4%BB%A4.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/6glsles着色器语言/预处理指令.md"}');export{c as comp,r as data};
