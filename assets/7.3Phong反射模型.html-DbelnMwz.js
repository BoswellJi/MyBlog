import{_ as s,c as i,b as l,o as e}from"./app-BfoDZ5rG.js";const a={};function c(d,n){return e(),i("div",null,n[0]||(n[0]=[l(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>局部的光照模型；也叫ADS光照模型；</li><li>真实世界对象的颜色是由 <code>离开这个对象表面的光的颜色</code> 决定的；</li></ul><h2 id="顶点或片段的最终颜色-由三个不同的反射分量组成" tabindex="-1"><a class="header-anchor" href="#顶点或片段的最终颜色-由三个不同的反射分量组成"><span>顶点或片段的最终颜色，由三个不同的反射分量组成：</span></a></h2><ul><li>环境光</li><li>漫射光</li><li>镜面光</li><li>总反射 = 环境反射 + 漫反射 + 镜面反射</li></ul><h2 id="环境反射" tabindex="-1"><a class="header-anchor" href="#环境反射"><span>环境反射</span></a></h2><ul><li>环境光 <code>A</code> （包含一个rgb）, 材质环境属性为 <code>K</code> （对应于红光，绿光，蓝光分别有相应的材质属性）, 则从该材质表面反射的环境反射 <code>I</code> 是由下面方程决定： <ul><li><code>I = A * K</code></li><li>跟光的方向无关；</li></ul></li></ul><h2 id="漫反射" tabindex="-1"><a class="header-anchor" href="#漫反射"><span>漫反射</span></a></h2><ul><li>方程式： <ul><li><code>I = A * K * max(cos(0),O)</code></li><li>0: 定义表面法线 <code>n</code> , 于入射光线方向 <code>l</code> 的最小夹角 <ul><li><code>&gt;0 时</code> ，说明光是从表面背面发射过来的，这些光线不会照射表面，因此cos0不考虑非负值情形；</li><li><code>=0 时</code> ，说明光最强，垂直照射下来；</li><li><code>=90 时</code> ，说明光从侧面发射过来，只接触到表面；</li></ul></li></ul></li></ul><h2 id="镜面反射" tabindex="-1"><a class="header-anchor" href="#镜面反射"><span>镜面反射</span></a></h2><ul><li>一个表面光滑的对象；</li><li>大部分光，按照特定的方向反射，因此视线非常重要；</li><li><code>I</code> 表示光线的矢量， <code>n</code> 表示表面的法线，对于光滑的对象，所有的光线都沿着 <code>r</code> 方向反射， <code>v</code> 表示观察者方向， <code>r,v</code> 之间的夹角为0时，绝大部分光都被朝向观察者反射；</li><li>方程式： <ul><li><code>I = K * I * max(cos0,0)</code> <code>cos0 = r * v</code> <code>r = 2 * (l * n) * n - l</code></li><li>计算反射矢量 <code>reflect()</code></li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">  const vertex = \`</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>把顶点和法线变换到视坐标系中（眼睛坐标系） <ul><li><p>顶点的变换：</p><ul><li>乘模型视图矩阵；</li></ul></li><li><p>法线的变换：</p><ul><li>需要用：逆转置矩阵 * 表面的法线；</li></ul></li></ul></li></ul><h2 id="光照效果和纹理相结合" tabindex="-1"><a class="header-anchor" href="#光照效果和纹理相结合"><span>光照效果和纹理相结合</span></a></h2><ul><li>采样到的纹素颜色与光照计算得到的颜色结合在一起；</li><li>这种分量逐个相乘的模式有时称为调制模式；</li><li><code>gl_FragColor = vec4(vLightWighting.rgb * texelColor.rgb, texelColor.a )</code></li></ul>`,14)]))}const v=s(a,[["render",c]]),p=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/7%E5%85%89%E7%85%A7/7.3Phong%E5%8F%8D%E5%B0%84%E6%A8%A1%E5%9E%8B.html","title":"","lang":"en-US","frontmatter":{},"git":{},"filePathRelative":"books/图形学/webgl/webgl高级编程/7光照/7.3Phong反射模型.md"}');export{v as comp,p as data};
