#### css 会造成阻塞？ 
css 加载会阻塞DOM树的解析渲染吗？ 

也就是说，在.css还未被加载完之前， Html内容不会被解析， 出现白屏， h1不会显示。 

 - css并不会阻塞Dom树的解析
 - css会阻塞Dom树的渲染
 
优点： 这是浏览器的一种优化机制， 因为加载css的时候可能该百年dom的节点， 如果css加载不阻塞dom树的渲染， 当css加载完， dom树会重新重绘或者回流，所以就可能造成损耗。所以 当dom树解构解析完， 可以做的做完，等css加载完，根据最终的样式来渲染dom树。

- css加载会阻塞后面的js运行

结论
 - 为了减少白屏事件， 应尽可能提高css的加载速度。

  提高css 的加载速度方法

  1. 使用cdn，它会挑选一个具有缓存内容的节点为你提供资源， 因此可以减少加载时间
  2. 对css进行压缩， webpack, gulp, gzip
  3. 合理使用缓存 cache-control,expires, e-tag(缓存后文件名字后加个版本号)
  4. 减少http请求数， 将多个css文件合并。 

  浏览器渲染流程
  
  1. HTML解析文件，生成DOM Tree，解析CSS文件生成CSSOM Tree
  2. 将Dom Tree和CSSOM Tree结合，生成Render Tree(渲染树)
  3. 根据Render Tree渲染绘制，将像素渲染到屏幕上。

  DOM解析和CSS解析是两个并行的进程，所以这也解释了为什么CSS加载不会阻塞DOM的解析。
  然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。因此，CSS加载是会阻塞Dom的渲染的。
  
  由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以css会阻塞后面js的执行。


  - DOMContentLoaded
  
  1. DOMContentLoaded  
  当页面只存在css，或者js都在css前面，那么DomContentLoaded不需要等到css加载完毕。
当页面里同时存在css和js，并且js在css后面的时候，DomContentLoaded必须等到css和js都加载完毕才触发。
  2. onLoad 等待页面的所有资源都加载完成才会触发，这些资源包括css、js、图片视频等。