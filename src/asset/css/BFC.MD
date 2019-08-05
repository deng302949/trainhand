#### BFC

  - 什么是BFC? 

    BFC是block Formatting Context的缩写，即格式化上下文。
  
  - BOX 
   
    box是css布局的对象和基本单位，页面由若干个box组成。 元素的类型和display属性。决定了box的类型。 不同的box会参与不同的Foramtting Context

  - Formatting Context

    Formatting Context 是页面的一块渲染区域， 并且有一套渲染规则。 决定其子元素将如何让定位，以及其他元素的关系和相互作用。

  - BFC布局规则

    BFC内，盒子依次垂直排列。
    BFC内，两个盒子的垂直距离由 margin 属性决定。属于同一个BFC的两个相邻Box的margin会发生重叠【符合合并原则的margin合并后是使用大的margin】
    BFC内，每个盒子的左外边缘接触内部盒子的左边缘（对于从右到左的格式，右边缘接触）。即使在存在浮动的情况下也是如此。除非创建新的BFC。
    BFC的区域不会与float box重叠。
    BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
    计算BFC的高度时，浮动元素也参与计算。

  - 创建BFC (下面的属性合起来用。) 

    根元素 
    float的值不为none
    overflow的值不为visible
    display的值为inline-block、table-cell、table-caption
    display：table也认为可以生成BFC，其实这里的主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC
    position的值为absolute或fixed

    根元素或包含根元素的元素
    浮动元素（元素的 float 不是 none）
    绝对定位元素（元素的 position 为 absolute 或 fixed）
    行内块元素（元素的 display 为 inline-block）
    表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
    表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
    匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
    overflow 值不为 visible 的块元素
    display 值为 flow-root 的元素
    contain 值为 layout、content或 strict 的元素
    弹性元素（display为 flex 或 inline-flex元素的直接子元素）
    网格元素（display为 grid 或 inline-grid 元素的直接子元素）
    多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
    column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

  - 如何创建BFC

    根元素
    浮动元素（float 属性不为 none）
    position 为 absolute 或 relative
    overflow 不为 visible 的块元素
    display 为 inline-block, table-cell, table-caption

 - 应用

    阻止margin重叠
    
    清除内部浮动
    
    自适应两栏布局

```js
//防止margin重合的bfc应用
<style>
    .a{
        height: 100px;
        width: 100px;
        margin: 50px;
        background: pink;
    }
    .container{
        overflow: auto; /*触发生成BFC*/
    }
</style>
<body>
    <div class="container">
        <div class="a"></div>
    </div>    
    <div class="a"></div>
</body>
```
```js
<style>
    .a{
        height: 100px;
        width: 100px;
        margin: 10px;
        background: pink;
        float: left;
    }
    .container{
        width: 120px;
        display: inline-block;/*触发生成BFC*/ //这步很关键
        border: 2px solid black; 
    }
</style>
```
```js
<style>
    body{
        width: 500px;
    }
    .a{
        height: 150px;
        width: 100px;
        background: pink;
        float: left;
    }
    .b{
        height: 200px;
        background: blue;
        overflow: hidden; /*触发生成BFC*/
    }
</style>
<body>
    <div class="a"></div>
    <div class="b"></div>
</body>   
```

总结：
  
  BFC到底是个什么鬼呢？ 通俗点来说 他就是为了解决一些变态布局的问题。 eg1.当你上下两个div 同时给margin margin会被覆盖。 这是我们可以给盒子再套个父级盒子并且给他个overflow： auto。 是不是很奇葩。 eg2.当你儿子元素又要float（浮动），又想把他爸爸撑开。 这种需求。 我就不能直接填充？ 可以但是我们要用BFC,因为操作够骚适合我们， 给父级加个display: inline-block;他就能自动触发生成bfc布局了。 eg3. 大哥和弟弟元素在一个body里。小弟想浮动， 那他就会飘到大哥身上。 大哥又不想小弟漂他身上， 好 给大哥个overflow: hidden。 来把你隐藏了 看着都烦，你个小老弟。没想到，小老弟跑前边去了。

this is crazy(骚) BFC（气）.