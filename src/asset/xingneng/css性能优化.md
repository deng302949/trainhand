#### css 性能优化

- 一、内联首屏关键CSS（github critical css）

- 二、异步加载css
  
  1. 使用javascript动态创建样式link元素，并插入到DOM中

  ```js
    const myCSS = document.createElement( "link" );
    myCSS.rel = "stylesheet";
    myCSS.href = "mystyles.css";
    // 插入到header的最后位置
    document.head.insertBefore( myCSS,          document.head.childNodes[   document.head.childNodes.length - 1 ].nextSibling );
  ``` 
  2. 将link元素的media 属性设置为用户浏览器不匹配的媒体类型，eg:
    media="printf", media="noexist"
  样式不适用当前的媒体类型， 其优先级会被放低，会在不阻塞页面渲染的情况下再进行下载

  当文件加载完成需要将media的值改回 让浏览器能够解析解析css
  ```js
  <link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'">

  <link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">

  <link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">
  ```
  
  3. 文件压缩
  
      文件压缩再性能优化方面效果显著。文件的大小会直接影响浏览器的加载速度。 网络差的时候较为明显，webpack， gulp/grunt,rollup等都支持css压缩功能。压缩后可以大大降低浏览器的加载时间。
  
  4. 去除无用的css

    不同元素或者其他情况下的重复代码，