#### es6模块和commonJs 模块有哪些差异？

- 1. CommonJs模块是运行时加载的， es6模块时编译时输出接口的。
 
  + es模块在编译的时候，就能确定模块的依赖关系，以及输入和输出的变量。es6模块不是对象。 他对外接口是一种静态定义， 在 代码静态 解析阶段就会生成。

  + commonJS 加载的是一个对象，该对象只有在脚本运行完才会生成。

- 2.CommonJS模块输出的是一个值的拷贝， es6模块输出的是值得引用。

  + `CommonJS` 输出的是一个值的拷贝(注意基本数据类型/复杂数据类型)
    
  + ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

`commonJS模块机制`： 
```JS
//commonJS
//模块输出的值是基本数据类型，模块内部的变化就影响不到这个值。
//name.js
let name = 'William';
setTimeout(() => { name = 'Yvette'; }, 300);
module.exports = name;

//index.js
const name = require('./name');
console.log(name); //William
//name.js 模块加载后，它的内部变化就影响不到 name
//name 是一个基本数据类型。将其复制出一份之后，二者之间互不影响。
setTimeout(() => console.log(name), 500); //William


// commonJS
//name.js
let name = 'William';
let hobbies = ['coding'];
setTimeout(() => { 
    name = 'Yvette';
    hobbies.push('reading');
}, 300);
module.exports = { name, hobbies };

//index.js
const { name, hobbies } = require('./name');
console.log(name); //William
console.log(hobbies); //['coding']
/*
 * name 的值没有受到影响，因为 {name: name} 属性值 name 存的是个字符串
 *     300ms后 name 变量重新赋值，但是不会影响 {name: name}
 * 
 * `hobbies 的值会被影响，因为 {hobbies: hobbies} 属性值 hobbies 中存的是
 *     数组的堆内存地址，因此当 hobbies 对象的值被改变时，存在栈内存中的地址并
       没有发生变化，因此 hoobies 对象值的改变会影响 {hobbies: hobbies}` 
 * xx = { name, hobbies } 也因此改变 (复杂数据类型，拷贝的栈内存中存的地址)  
 */
setTimeout(() => {
    console.log(name);//William
    console.log(hobbies);//----['coding', 'reading']
}, 500);
```

`es6模块机制`:

  - 说明：es6模块得运行机制是：js引擎对脚本静态分析得时候遇到 模块的加载命令 import, 就会生成一个只读引用。等脚本真正执行时，再根据这个只读引用到被加载的那个模块里面取值。

```js
//es6模块机制
//name.js
let name = 'William';
setTimeout(() => { name = 'Yvette'; hobbies.push('writing'); }, 300);
export { name };
export var hobbies = ['coding'];

//index.js
import { name, hobbies } from './name';
console.log(name, hobbies); //William ["coding"]
//name 和 hobbie 都会被模块内部的变化所影响
setTimeout(() => {
    console.log(name, hobbies); //Yvette ["coding", "writing"]
}, 500); //Yvette
```

es6模块中 `export default`

  理解: 将变量赋值给default，最后导出default

  当把值赋给了default 就和commonJS类似了
  
  ▲基本类型不会改变但是引用类型就会随着内存地址改变而改变
```js
//name.js
let name = 'William';
let hobbies = ['coding']
setTimeout(() => { name = 'Yvette'; hobbies.push('writing'); }, 300);
export default { name, hobbies };

//index.js
import info from './name';
console.log(info.name, info.hobbies); //William ["coding"]
//name 不会被模块内部的变化所影响
//hobbie 会被模块内部的变化所影响
setTimeout(() => {
    console.log(info.name, info.hobbies); //William ["coding", "writing"]
}, 500); //Yvette
```
- 3.es6模块自动采用严格模式，无论模块头部是否写了“use strict”

- 4.require可以做动态加载， import语句做不到，import语句必须位于顶层作用域中。

- 5.es6模块输入的变量是只读 的。不能对其进行重新赋值。 
```js
import name from './name';
name = 'start'; // 抛错
```
6. 当require命令加载到某个模块时，就会运行整个模块的代码。

7. 当使用require 命令加载同一模块的时候不会再执行该模， 而是取到缓存之中的值。 commonJS模块无论加载多少次，都只会再第一次加载时运行一次，以后再加载，就会返回第一次的运行结果，除非手动清除系统的缓存。