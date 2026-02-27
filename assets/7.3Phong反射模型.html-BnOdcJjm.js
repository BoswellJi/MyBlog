import{_ as n,c as e,b as a,o as i}from"./app-DUVHEK3E.js";const l={};function c(d,s){return i(),e("div",null,[...s[0]||(s[0]=[a(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>局部的光照模型；也叫ADS光照模型；</li><li>真实世界对象的颜色是由 <code>离开这个对象表面的光的颜色</code> 决定的；</li></ul><h2 id="顶点或片段的最终颜色-由三个不同的反射分量组成" tabindex="-1"><a class="header-anchor" href="#顶点或片段的最终颜色-由三个不同的反射分量组成"><span>顶点或片段的最终颜色，由三个不同的反射分量组成：</span></a></h2><ul><li>环境光</li><li>漫射光</li><li>镜面光</li><li>总反射 = 环境反射 + 漫反射 + 镜面反射</li></ul><h2 id="环境反射" tabindex="-1"><a class="header-anchor" href="#环境反射"><span>环境反射</span></a></h2><ul><li>环境光 <code>A</code> （包含一个rgb）, 材质环境属性为 <code>K</code> （对应于红光，绿光，蓝光分别有相应的材质属性）, 则从该材质表面反射的环境反射 <code>I</code> 是由下面方程决定： <ul><li><code>I = A * K</code></li><li>跟光的方向无关；</li></ul></li></ul><h2 id="漫反射" tabindex="-1"><a class="header-anchor" href="#漫反射"><span>漫反射</span></a></h2><ul><li>方程式： <ul><li><code>I = A * K * max(cos(0),O)</code></li><li>0: 定义表面法线 <code>n</code> , 于入射光线方向 <code>l</code> 的最小夹角 <ul><li><code>&gt;0 时</code> ，说明光是从表面背面发射过来的，这些光线不会照射表面，因此cos0不考虑非负值情形；</li><li><code>=0 时</code> ，说明光最强，垂直照射下来；</li><li><code>=90 时</code> ，说明光从侧面发射过来，只接触到表面；</li></ul></li></ul></li></ul><h2 id="镜面反射" tabindex="-1"><a class="header-anchor" href="#镜面反射"><span>镜面反射</span></a></h2><ul><li>一个表面光滑的对象；</li><li>大部分光，按照特定的方向反射，因此视线非常重要；</li><li><code>I</code> 表示光线的矢量， <code>n</code> 表示表面的法线，对于光滑的对象，所有的光线都沿着 <code>r</code> 方向反射， <code>v</code> 表示观察者方向， <code>r,v</code> 之间的夹角为0时，绝大部分光都被朝向观察者反射；</li><li>方程式： <ul><li><code>I = K * I * max(cos0,0)</code> <code>cos0 = r * v</code> <code>r = 2 * (l * n) * n - l</code></li><li>计算反射矢量 <code>reflect()</code></li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  const vertex = \`</span>
<span class="line">    顶点位置</span>
<span class="line">    attribute vec3 aVertexPosition;</span>
<span class="line">    </span>
<span class="line">    顶点法线</span>
<span class="line">    attribute vec3 aVertexNormal;</span>
<span class="line"></span>
<span class="line">    纹理坐标</span>
<span class="line">    attribute vec2 aTextureCoordinates;</span>
<span class="line"></span>
<span class="line">    模型视图矩阵</span>
<span class="line">    uniform mat4 uMVMatrix;</span>
<span class="line">  </span>
<span class="line">    矩阵</span>
<span class="line">    uniform mat4 uPMatrix;</span>
<span class="line">  </span>
<span class="line">    逆转置矩阵，</span>
<span class="line">    uniform mat4 uNMatrix;</span>
<span class="line"></span>
<span class="line">    光位置</span>
<span class="line">    uniform mat4 uLightPosition;</span>
<span class="line"></span>
<span class="line">    环境光颜色</span>
<span class="line">    uniform mat4 uAmbientLightColor;</span>
<span class="line"></span>
<span class="line">    漫射光颜色</span>
<span class="line">    uniform mat4 uDiffuseLightColor;</span>
<span class="line"></span>
<span class="line">    镜面光颜色</span>
<span class="line">    uniform mat4 uSpecularLightColor;</span>
<span class="line"></span>
<span class="line">    片元着色器的片元颜色</span>
<span class="line">    varying vec3 vLightWeighting;</span>
<span class="line">    varying vec2 vTextureCoordinates;</span>
<span class="line"></span>
<span class="line">    光泽度</span>
<span class="line">    const float shininess = 32.0;</span>
<span class="line"></span>
<span class="line">    void main(){</span>
<span class="line">      顶点位置转换到眼睛坐标系位置</span>
<span class="line">      vec4 vertexPositionEye4 = uMVMatrix * vec4(aVertexPosition,1.0);</span>
<span class="line">      vec3 vertexPositionEye3 = vertexPositionEye4.xyz / vertexPositionEye4.w;</span>
<span class="line"></span>
<span class="line">      到光源向量</span>
<span class="line">      vec3 vectorToLightSource = normalize(uLightPosition - vertexPositionEye3); </span>
<span class="line"></span>
<span class="line">      法线转换到眼睛坐标系</span>
<span class="line">      vec3 normalEye = normalize(uNMatrix * aVertexNormal);</span>
<span class="line"></span>
<span class="line">      漫反射的点积</span>
<span class="line">      float diffuseLightWeightning = max(dot(normalEye,vectorToLightSource),0.0);</span>
<span class="line"></span>
<span class="line">      镜面反射的反射光矢量</span>
<span class="line">      vec3 reflectionVector = normalize(reflect(-vectorToLightSource,normalEye));</span>
<span class="line"></span>
<span class="line">      在眼睛坐标系里的相机被放在原点并且指向z轴的负轴</span>
<span class="line">      vec3 viewVectorEye = -normalize(vertexPositionEye3);</span>
<span class="line"></span>
<span class="line">      float rdotv = max(dot(reflectionVector,viewVectorEye),0.0);</span>
<span class="line"></span>
<span class="line">      float specularLightWeightning = pow(rdotv,shininess);</span>
<span class="line"></span>
<span class="line">      三个反射组件，发送到片元着色器</span>
<span class="line">      vLightWeighting = uAmbientLightColor + uDiffuseLightColor * diffuseLightWeightning + uSpecularLightColor * specularLightWeightning;</span>
<span class="line"></span>
<span class="line">      最终的转换位置</span>
<span class="line">      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition,1.0);</span>
<span class="line"></span>
<span class="line">      vTextureCoordinates = aTextureCoordinates;</span>
<span class="line">    }</span>
<span class="line">  \`;</span>
<span class="line"></span>
<span class="line">  const fragment = \`</span>
<span class="line">    precision mediump float;</span>
<span class="line">    varying vec3 vLightWeighting;</span>
<span class="line"></span>
<span class="line">    uniform sampler2D uSampler;</span>
<span class="line"></span>
<span class="line">    void main(){</span>
<span class="line">      vec4 texelColor = texture2D(uSampler,vTextureCoordinates);</span>
<span class="line">      gl_FragColor = vec4(vLightWeighting.rgb * texelColor.rgb + v,texelColor.a);</span>
<span class="line">    }</span>
<span class="line">  \`;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>把顶点和法线变换到视坐标系中（眼睛坐标系） <ul><li><p>顶点的变换：</p><ul><li>乘模型视图矩阵；</li></ul></li><li><p>法线的变换：</p><ul><li>需要用：逆转置矩阵 * 表面的法线；</li></ul></li></ul></li></ul><h2 id="光照效果和纹理相结合" tabindex="-1"><a class="header-anchor" href="#光照效果和纹理相结合"><span>光照效果和纹理相结合</span></a></h2><ul><li>采样到的纹素颜色与光照计算得到的颜色结合在一起；</li><li>这种分量逐个相乘的模式有时称为调制模式；</li><li><code>gl_FragColor = vec4(vLightWighting.rgb * texelColor.rgb, texelColor.a )</code></li></ul>`,14)])])}const r=n(l,[["render",c]]),o=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/7%E5%85%89%E7%85%A7/7.3Phong%E5%8F%8D%E5%B0%84%E6%A8%A1%E5%9E%8B.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1764567601000,"contributors":[{"name":"j哥哥","username":"","email":"aiyoudqrjmz@163.com","commits":1},{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":15,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"","email":"mingzhuang.ji@ly.com","commits":3}],"changelog":[{"hash":"43c85e394c6fea4870c2315f0164492a987455dc","time":1764567601000,"email":"mingzhuang.ji@ly.com","author":"mingzhuang.ji","message":"chore: 调整架构"},{"hash":"dbc456edbfbe7a16e99ef11ad04098fbad26fdc4","time":1735558340000,"email":"mingzhuang.ji@ly.com","author":"mingzhuang.ji","message":"chore: 调整结构"},{"hash":"6cd6513af962d39a4becb6d4423104c209684122","time":1702001688000,"email":"mingzhuang.ji@ly.com","author":"mingzhuang.ji","message":"feat: monorepo"},{"hash":"f2337734b6270ac051b908354dd6dccce75439f6","time":1660138466000,"email":"aiyoudqrjmz@163.com","author":"Boswell","message":"chore: 梳理"},{"hash":"40490e61600ecc7dded37e1f242086aa74489f64","time":1653880183000,"email":"aiyoudqrjmz@163.com","author":"Boswell","message":"feat: lerna"},{"hash":"a91ae3f357e5517c1fe59bdcaee35dcb7f620199","time":1627635031000,"email":"mingzhuang.ji@ly.com","author":"Boswell","message":"feat: books目录"},{"hash":"1dde0babb74363f0c17a499d62b693c8b4123c68","time":1617954954000,"email":"mingzhuang.ji@ly.com","author":"Boswell","message":"博客：整理博客"},{"hash":"cf48db9cca43f70ff1fe8b559344e85cc1ac9f9c","time":1604129744000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"项目结构：调整目录结构"},{"hash":"d50f479780aaaab8ba65a89c9940f78b4170b0ba","time":1604129744000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"项目结构：调整目录结构"},{"hash":"de8583e6b7db7e1974e3b2eaaad8e8d34cadc536","time":1599614899000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"webgl:"},{"hash":"61b2bb735d369e9817950524f184d47d78c5bf9c","time":1599475546000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"webgl："},{"hash":"2588ecbf370e3d7565203fdf3c6bc1dd9b7b343f","time":1598440472000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"算法+英语："},{"hash":"f84f48ca2b46b48d67e6442134732dd42c11a116","time":1597766382000,"email":"aiyoudqrjmz@163.com","author":"jmz","message":"jacascript"},{"hash":"b5bfb66219bb9504b28f6e7874430cdf50311d19","time":1597590917000,"email":"aiyoudqrjmz@163.com","author":"jmz","message":"javascript"},{"hash":"19e9eb18c66100cfc59e853a51f91f7efd0f5f12","time":1596989722000,"email":"aiyoudqrjmz@163.com","author":"jmz","message":"javascript"},{"hash":"c01bd2bcc502766f19653692fb01cfeb1eb4d946","time":1596113157000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"js: book"},{"hash":"42dc7bd3dee2b0ced6653d10971cfab481330b49","time":1596027142000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"js:动态特性"},{"hash":"397136bf7682bc990d13273134fa706dd7c2d2ff","time":1591408571000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"ts:类型系统"},{"hash":"9c87d62d0af195897480580611f95fbb1b05e3af","time":1585723377000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"typescript: 类型定义文件"},{"hash":"895f964871573170c5c68f5733de3787918b5e3d","time":1585571351000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"数据结构: 整理"},{"hash":"db8044554b16a1745884bfd9998fadb86199b704","time":1585556794000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"数据结构: 梳理"},{"hash":"e48f20c1429de7795e4958c1130fecadc186f2de","time":1579244858000,"email":"mingzhuang.ji@ly.com","author":"jmz","message":"graphql apollo ecma，html5新特性测试"},{"hash":"dfa57429b7a71d6c4affa40c44f971dba7ea6a64","time":1566402573000,"email":"aiyoudqrjmz@163.com","author":"j哥哥","message":"添加 weex项目"}]},"filePathRelative":"books/图形学/webgl/webgl高级编程/7光照/7.3Phong反射模型.md"}');export{r as comp,o as data};
