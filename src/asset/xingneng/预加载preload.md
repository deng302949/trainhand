#### 预加载（preload）

优点： 
 
  1. 将加载和执行分离开， 可不阻塞渲染和document的onload事件。
  2. 提前加载指定资源，不再出现依赖的font字体隔了一段时间才刷出。

```html
//使用link标签创建
<link rel="preload" href="/path/to/style.css" as="style"/>
```
```js
<script>
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = '/path/to/style.css';
  document.head.appendChild(link);
</script>  
```
使用HTTP响应头link字段创建
Link: <https://example.com/other/style.css>; rel=preload; as=style

```js
//依赖某些字体
<link rel="preload" as="font"   href="https://at.alicdn.com/t/font_zck90zmlh7hf47vi.woff">
<link rel="preload" as="script" href="https://a.xxx.com/xxx/PcCommon.js">
<link rel="preload" as="script" href="https://a.xxx.com/xxx/TabsPc.js">
```

##### 区分 `preload` 和 `prefetch`

    preload 告诉浏览器必定需要的资源， 浏览器不一定会加载这些资源

    prefetch告诉浏览器页面可能需要的资源， 浏览器不一定会加载这些资源

- 在使用preload前， 在遇到资源依赖是进行加载： 

  使用preload后，不管资源是否使用都将提前加载；
- 移动端使用preload 必须慎用，不然可能会浪费用户的带宽。

避免混用preload和prefetch

混用并不会复用资源，而是会重复加载。

```js
//加载跨域资源 需要加上  crossorigin  属性   这样请求头会带上origin
<link rel="preload" as="font" crossorigin href="https://at.alicdn.com/t/font_zck90zmlh7hf47vi.woff">
```
总结：

  preload能告诉浏览器提前加载当前页面必须的资源， 将加载与解析执行分离开，做的好可以对首次渲染带来不小的提升， 但是需要避免滥用，区分其与prefetch的关系，知道preload不同资源时的网络优先级差异。