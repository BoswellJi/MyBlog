import{_ as n,c as a,b as e,o as l}from"./app-BfoDZ5rG.js";const i={};function r(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>三角形绘制案例；</li></ul><div class="language-绘制3d图形 line-numbers-mode" data-highlighter="prismjs" data-ext="绘制3d图形"><pre><code class="language-绘制3d图形"><span class="line"></span>
<span class="line">const canvas = document.querySelector(&#39;#glcanvas&#39;);</span>
<span class="line">const gl = canvas.getContext(&#39;webgl&#39;);</span>
<span class="line">const vsSource = \`</span>
<span class="line">  attribute vec4 a_Position;</span>
<span class="line">  attribute float a_PointSize;</span>
<span class="line">  attribute vec4 a_Color;</span>
<span class="line"></span>
<span class="line">  varying vec4 v_Color;</span>
<span class="line"></span>
<span class="line">  void main(){</span>
<span class="line">    gl_Position = a_Position;</span>
<span class="line">    gl_PointSize = a_PointSize;</span>
<span class="line">    v_Color = a_Color;</span>
<span class="line">  }</span>
<span class="line">\`;</span>
<span class="line">const fsSource = \`</span>
<span class="line">  precision mediump float;</span>
<span class="line"></span>
<span class="line">  varying vec4 v_Color;</span>
<span class="line"></span>
<span class="line">  void main(){</span>
<span class="line">    gl_FragColor = v_Color;</span>
<span class="line">  }</span>
<span class="line">\`;</span>
<span class="line">// 着色器程序对象</span>
<span class="line">const shaderProgram = initShaderProgram(gl, vsSource, fsSource);</span>
<span class="line"></span>
<span class="line">// 获取着色器程序中的属性变量</span>
<span class="line">const vertexPosition = gl.getAttribLocation(shaderProgram, &#39;a_Position&#39;);</span>
<span class="line">const vertexSize = gl.getAttribLocation(shaderProgram, &#39;a_PointSize&#39;);</span>
<span class="line">const vertexColor = gl.getAttribLocation(shaderProgram, &#39;a_Color&#39;);</span>
<span class="line"></span>
<span class="line">// 单个顶点赋值</span>
<span class="line">// gl.vertexAttrib4fv(vertexPosition, [0.5, -0.5, 0, 1]); </span>
<span class="line">gl.vertexAttrib1fv(vertexSize, [5]);</span>
<span class="line"></span>
<span class="line">const positionBuffer = gl.createBuffer();</span>
<span class="line">const size = positionBuffer.BYTES_PER_ELEMENT;</span>
<span class="line">gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);</span>
<span class="line">const vertices = [</span>
<span class="line">  0, 1, 0, 0, 0, 1,</span>
<span class="line">  -1, -1, 0, 0, 1, 0,</span>
<span class="line">  1, -1, 0, 0, 0, 0</span>
<span class="line">];</span>
<span class="line">gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);</span>
<span class="line"></span>
<span class="line">// 给变量指定缓冲中的数据以及获取方式</span>
<span class="line">gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 6 * size, 0);</span>
<span class="line">// 开启缓冲区与着色器变量</span>
<span class="line">gl.enableVertexAttribArray(vertexPosition);</span>
<span class="line"></span>
<span class="line">// 给变量指定缓冲中的数据以及获取方式</span>
<span class="line">gl.vertexAttribPointer(vertexColor, 3, gl.FLOAT, false, 6 * size, 3 * size);</span>
<span class="line">// 开启缓冲区与着色器变量</span>
<span class="line">gl.enableVertexAttribArray(vertexColor);</span>
<span class="line"></span>
<span class="line">// 绘制图形</span>
<span class="line">gl.clearColor(0, 0, 0, 1);</span>
<span class="line">gl.clear(gl.COLOR_BUFFER_BIT);</span>
<span class="line">// 绘制图元</span>
<span class="line">gl.drawArrays(gl.TRIANGLES, 0, 3);</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-创建着色器程序对象 line-numbers-mode" data-highlighter="prismjs" data-ext="创建着色器程序对象"><pre><code class="language-创建着色器程序对象"><span class="line">  /**</span>
<span class="line">   * 初始化一个着色器程序</span>
<span class="line">   * @param {*} gl webgl上下文对象</span>
<span class="line">   * @param {*} vsSource 顶点着色器程序</span>
<span class="line">   * @param {*} fsSource 片元着色器程序</span>
<span class="line">   */</span>
<span class="line">  function initShaderProgram(gl, vsSource, fsSource) {</span>
<span class="line">    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);</span>
<span class="line">    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);</span>
<span class="line"></span>
<span class="line">    const shaderProgram = gl.createProgram();</span>
<span class="line">    gl.attachShader(shaderProgram, vertexShader);</span>
<span class="line">    gl.attachShader(shaderProgram, fragmentShader);</span>
<span class="line"></span>
<span class="line">    gl.linkProgram(shaderProgram);</span>
<span class="line"></span>
<span class="line">    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {</span>
<span class="line">      console.log(&#39;Unable to initialize the shader program: &#39; + gl.getProgramInfoLog(shaderProgram));</span>
<span class="line">      return null;</span>
<span class="line">    }</span>
<span class="line">    // 可以用这个程序对象绘制图形</span>
<span class="line">    gl.useProgram(shaderProgram);</span>
<span class="line"></span>
<span class="line">    return shaderProgram;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /**</span>
<span class="line">   * 加载着色器程序</span>
<span class="line">   * @param {*} gl webgl上下文对象</span>
<span class="line">   * @param {*} type 着色器类型</span>
<span class="line">   * @param {*} source 着色器源码</span>
<span class="line">   */</span>
<span class="line">  function loadShader(gl, type, source) {</span>
<span class="line">    const shader = gl.createShader(type);</span>
<span class="line"></span>
<span class="line">    gl.shaderSource(shader, source);</span>
<span class="line">    gl.compileShader(shader);</span>
<span class="line"></span>
<span class="line">    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {</span>
<span class="line">      console.log(&#39;An error occurred compiling the shaders: &#39; + gl.getShaderInfoLog(shader));</span>
<span class="line">      gl.deleteShader(shader);</span>
<span class="line">      return null;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return shader;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const v=n(i,[["render",r]]),p=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/2%E5%88%9B%E5%BB%BA%E5%9F%BA%E6%9C%AC%E7%9A%84WebGL%E7%A4%BA%E4%BE%8B/2.1%E7%BB%98%E5%88%B6%E4%B8%89%E8%A7%92%E5%BD%A2.html","title":"","lang":"en-US","frontmatter":{},"git":{},"filePathRelative":"books/图形学/webgl/webgl高级编程/2创建基本的WebGL示例/2.1绘制三角形.md"}');export{v as comp,p as data};
