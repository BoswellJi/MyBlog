import{_ as n,c as a,b as l,o as e}from"./app-BfoDZ5rG.js";const i={};function d(c,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li><p>变换矩阵：(可以参考css中的矩阵操作，translate, scale, rotate)</p><ul><li>matrix4.setIdentity(): 初始化为单位矩阵；</li><li>matrix4.setTranslate(x,y,z): 设置matrix4矩阵为平移变换矩阵；</li><li>matrix4.translate(x,y,x): 将matrix4实例乘以一个平移变换矩阵；</li></ul></li><li><p>opengl: 提供了一系列有用的函数帮助我们创建变换矩阵；例如： glTranslate(5, 80, 40);</p></li><li><p>webgl: 没有提供，需要手动计算矩阵，所以封装了矩阵库；</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">矩阵乘法，很重要：</span>
<span class="line">[</span>
<span class="line"> a, b</span>
<span class="line"> d, e</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">*</span>
<span class="line"></span>
<span class="line">[</span>
<span class="line">  a1, b1</span>
<span class="line">  d1, e1</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">[</span>
<span class="line">  a*a1+b*d1, a*b1+b*e1</span>
<span class="line">  d*a1+e*d1, d*b1+e*e1</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模型变换/建模变换；</li><li>模型变换的矩阵称为模型矩阵；</li></ul>`,4)]))}const r=n(i,[["render",d]]),p=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/4%E9%AB%98%E7%BA%A7%E5%8F%98%E6%8D%A2%E4%B8%8E%E5%8A%A8%E7%94%BB%E5%9F%BA%E7%A1%80/4.1%E5%B9%B3%E7%A7%BB%E6%97%8B%E8%BD%AC.html","title":"","lang":"en-US","frontmatter":{},"git":{},"filePathRelative":"books/图形学/webgl/webgl编程指南/4高级变换与动画基础/4.1平移旋转.md"}');export{r as comp,p as data};
