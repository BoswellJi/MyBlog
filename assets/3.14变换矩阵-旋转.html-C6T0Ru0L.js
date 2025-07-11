import{_ as n,c as l,e as i,o as a}from"./app-CyJ7wwPI.js";const e={};function c(d,s){return a(),l("div",null,s[0]||(s[0]=[i(`<p>三维模型：</p><ol><li>构成三维模型的基本单位是三角形；</li><li>不管三维模型多复杂，其基本组成部分都是三角形；</li></ol><p>变换或者仿射变换：</p><ul><li>平移</li><li>旋转: <code>旋转轴，旋转方向，旋转角度</code><ul><li>旋转方向的问题： 沿着z轴正半轴某处，视线沿着z轴负方向进行观察，看到的物体就是逆时针旋转的；（向左为逆，向右为顺</li></ul></li><li>缩放： <code>缩放因子</code></li></ul><p>需要用到数学知识，不过可以借助函数库来进行数学计算；</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">矩阵：</span>
<span class="line"></span>
<span class="line">1. 是一个矩形的二维数组</span>
<span class="line">2. 数字按照行（水平方向），列（垂直方向）排列</span>
<span class="line"></span>
<span class="line">[</span>
<span class="line">  [8, 3, 0], </span>
<span class="line">  [4, 3, 6], </span>
<span class="line">  [3, 2, 3]</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">矢量：</span>
<span class="line"></span>
<span class="line">1. 就是由多个分量组成的对象</span>
<span class="line"></span>
<span class="line">[0, 0.5, 1]</span>
<span class="line"></span>
<span class="line">矩阵 * 矢量</span>
<span class="line"></span>
<span class="line">[                [</span>
<span class="line">  [8, 3, 0],          x, </span>
<span class="line">  [4, 3, 6], *        y, </span>
<span class="line">  [3, 2, 3]           z</span>
<span class="line">]                ]</span>
<span class="line"></span>
<span class="line">x&#39; = 8*x + 3*y + 0*z; </span>
<span class="line">y&#39; = 4*x + 3*y + 6*z; </span>
<span class="line">z&#39; = 3*x + 2*y + 3*z; </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变换矩阵：在三维图形学中非常重要；</p><ol><li>旋转：这种矩阵也被称为旋转变换矩阵 ；</li><li>平移：这种矩阵也被称为平移变换矩阵 ；</li><li>缩放：这种矩阵也被称为缩放变换矩阵 ；</li></ol><ul><li>根据矩阵来计算坐标位置</li><li>优势： 不需要重新定义着色器</li><li>矩阵 * 矢量（旧坐标） = 新坐标</li></ul><div class="language-矩阵替换数学表达式 line-numbers-mode" data-highlighter="prismjs" data-ext="矩阵替换数学表达式" data-title="矩阵替换数学表达式"><pre><code><span class="line"> 旋转矩阵：</span>
<span class="line"> 数学表达式：</span>
<span class="line"> y&#39; = x * sin(b) + y * cos(a); </span>
<span class="line"> x&#39; = x * cos(a) - y * sin(b); </span>
<span class="line"> z&#39; = 1; </span>
<span class="line"></span>
<span class="line"> 矩阵表达式：</span>
<span class="line"> x&#39; = ax + by + cz; </span>
<span class="line"> y&#39; = dx + ey + fz; </span>
<span class="line"> z&#39; = gx + hy + iz</span>
<span class="line"></span>
<span class="line"> a = cos(a), b = -sin(a), c = 0</span>
<span class="line"> d = sin(a), e = cos(a), f = 0</span>
<span class="line"> g = 0, h = 0, i =1</span>
<span class="line"> </span>
<span class="line"> 平移矩阵：(因为这个等式中有t, 下一个等式中没有t, 所以需要借助4*4矩阵)</span>
<span class="line"> 数学表达式：</span>
<span class="line"> x&#39; = x + t; </span>
<span class="line"> y&#39; = y + t; </span>
<span class="line"> z&#39; = 1; </span>
<span class="line"></span>
<span class="line"> 矩阵表达式：</span>
<span class="line"> x&#39; = ax + by + cz + d; </span>
<span class="line"> y&#39; = ex + fy + gz + h; </span>
<span class="line"> z&#39; = ix + jy + kz + l; </span>
<span class="line"> 1 =  mx + ny + oz + p; </span>
<span class="line"></span>
<span class="line"> a = 1, b = 0, c = 0, d = t, </span>
<span class="line"> e = 0, f = 1, g = 0, h = t, </span>
<span class="line"> i = 0, j = 0, k = 0, l = 0, </span>
<span class="line"> m = 0, n = 0, o = 0, p = 1; </span>
<span class="line"></span>
<span class="line"> 缩放矩阵：</span>
<span class="line"> 数学表达式：</span>
<span class="line"> x&#39; = x * s; </span>
<span class="line"> y&#39; = y * s; </span>
<span class="line"> z&#39; = z * s; </span>
<span class="line"> 1 = w * 1; </span>
<span class="line"></span>
<span class="line"> 矩阵表达式：</span>
<span class="line"> x&#39; = ax + by + cz + d; </span>
<span class="line"> y&#39; = ex + fy + gz + h; </span>
<span class="line"> z&#39; = ix + jy + kz + l; </span>
<span class="line"> 1 =  mx + ny + oz + p; </span>
<span class="line"></span>
<span class="line"> a = s, b = 0, c = 0, d = 0, </span>
<span class="line"> e = 0, f = s, g = 0, h = 0, </span>
<span class="line"> i = 0, j = 0, k = s, l = 0, </span>
<span class="line"> m = 0, n = 0, o = 0, p = 1; </span>
<span class="line"></span>
<span class="line"> 将不同阶数的矩阵相乘的方法：</span>
<span class="line"> - 将阶数少的矩阵转换为阶数多个矩阵</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>着色器本身就实现了矩阵和矢量相乘的功能；</p><p>矩阵都是二维的，数组是一维的，需要： 按列主序, 按行主序 两种方式存储在数组中；</p><p>webgl中的矩阵存储在数组中的方式： 按列主序存储；</p><h2 id="webgl中涉及的矩阵" tabindex="-1"><a class="header-anchor" href="#webgl中涉及的矩阵"><span>webgl中涉及的矩阵</span></a></h2><ul><li>模型矩阵：平移，缩放，旋转矩阵等</li><li>视图矩阵：观察者状态</li><li>投影矩阵：透视模型，盒模型</li></ul>`,15)]))}const v=n(e,[["render",c],["__file","3.14变换矩阵-旋转.html.vue"]]),m=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/3%E7%BB%98%E5%88%B6%E5%92%8C%E5%8F%98%E6%8D%A2%E4%B8%89%E8%A7%92%E5%BD%A2/3.14%E5%8F%98%E6%8D%A2%E7%9F%A9%E9%98%B5-%E6%97%8B%E8%BD%AC.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"webgl中涉及的矩阵","slug":"webgl中涉及的矩阵","link":"#webgl中涉及的矩阵","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"j哥哥","username":"j哥哥","email":"aiyoudqrjmz@163.com","commits":1,"url":"https://github.com/j哥哥"},{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":12,"url":"https://github.com/jmz"},{"name":"jmz","username":"jmz","email":"aiyoudqrjmz@163.com","commits":5,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/3绘制和变换三角形/3.14变换矩阵-旋转.md"}');export{v as comp,m as data};
