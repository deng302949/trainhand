#### @babel(通天塔)
  典故： Babel Tower 是全人类联手建造的一个建筑， 人们决心合力修建一座通天高塔。因为人们心里少了对上帝的敬畏， 为了为自己歌功颂德的功利。 上帝不希望这个奇观建成， 于是让人们分化成不同的语言， 令其不能交流。 因为沟通不畅， 工程被迫放弃。 人类从此不再团结。 分化成了多个不同的部落， 由于沟通问题，经常发生战乱， 因此再也无力撼动上帝的权威。 （《旧约圣经》）

##### 什么是Babel 
  我们知道各个浏览器对于javaScript的版本支持各不相同， 有很多优秀的新语法不能在浏览器中运行，为了解决这个“沟通不畅”的问题， 就有了Bable。有了babel 我们就可以毫无顾忌的去使用javaScript 新语法。

- Babel 编译  
  ```js
    a => a * 3
      | （转化）
      V
    (function (a) {
      return a * 3;
    });
  ```

- Babel 编译的阶段
  
  Babel 总共分为三个阶段： 解析 转换 生成

  （Babel 本身不具备任何转换功能， 提供这些转换功能的是一个个plugin 所以我们没有配置任何Plugins 的时候， 经过babel的输出的代码时没有改变的。）

  <!-- ![alttext](./abc.jpg) -->

```js
  code ->  +parse+ ->|ast TREE -> +transform+ ->| ast TREE -> +generate+ -> code 
```

plugins  - transform的载体
  自从Babel6.0起， 就不对代码进行转换， babel 6.x- 7.x 只负责 parse 和 generate 
  transform 过程全交给插件去做（plugins）。

preset(即一组预先设定的插件(集合))

  - babel配置的优先级
    + 1 先执行plugins 的配置项， 在执行Preset的配置项
    + 2 plugins 配置项， 按照声明顺序执行
    + 3 preset 配置项， 按照声明逆序执行

  （关于preset env ）
    
    ```js
    ["env", {
      "useBuiltIns": "usage"
    }]
    ```
    设置 "useBuiltIns": "usage" 能够把 babel-polyfill 中你需要用到的部分提取出来，不需要的去除

useBuiltIns 参数说明：
-

+ 1 false: 不对 polyfills 做任何操作
+ 2 entry: 根据 target 中浏览器版本的支持，将 polyfills 拆分引入，仅引入有浏览器不支持的 polyfill
+ 3 usage(新)：检测代码中 ES6/7/8 等的使用情况，仅仅加载代码中用到的 polyfills

#### Babel 模块说明
  - babel-core （核心）
    + babel 的核心模块， babel 的核心api都在这个模块中， 也就是这个模块会把我们写的js代码抽象成AST树； 然后将plugins转译好的内容解析成js 代码
  
  - babel-cli
    
    + babel-cli通过命令对js文件进行转换的工具， 基本都继承到webpack\rollup 等
  
  - babel-node
    
    + 安装babel-cli 他就有， 他让es6能直接运行在node 环境中

  - babel-polyfill 

    + babel-polyfill 主要有两个缺点：

      1 使用 babel-polyfill 会导致打出来的包非常大，很多其实没有用到，对资源来说是一种浪费。
      2 babel-polyfill 可能会污染全局变量，给很多类的原型链上都作了修改，这就有不可控的因素存在。

Babel7 中增加了 babel-preset-env

@babel/runtime & @babel/plugin-transform-runtime
按需引入, 打包体积小
不能兼容实例方法


@babel/polyfill
完整模拟 ES2015+ 环境
打包体积过大, 污染全局对象和内置的对象原型


@babel/preset-env
按需引入, 可配置性高
小生不知 -_-
