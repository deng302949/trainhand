#### webpack-Loader 

  - 什么是loader? (webpack万物皆模块)
  1. loader其实就是一个node 模块
  2. loader -> 导出一个函数， loader 会在转换源模块（resource）的时候调用该函数。 传入this 上下文给LoaderApi
  3. 左边源模块 -》 loader  -》 右边的通用文件
  
  - 写loader
  ```js
    const Loader = (source) => { 
      this.callback(err, values...)
    }
    //source ：源文件内容的字符串
    // this.callback()： 返回多个值， 第一个参数是转化后的source 第二个参数是sourceMao 可选的返回值
    //也可以就return source
  ```
  loader的执行顺序是从下向上的
  
  ```js
    {
      test: /\.js/,
      use: [
          'bar-loader',
          'mid-loader',
          'foo-loader'
      ]
    }

    1. loader 的调用顺序是 foo-loader -> mid-loader -> bar-loader。
    2. foo-loader 拿到 source，处理后把 JS 代码传递给 mid，mid 拿到 foo 处理过的 “source” ，再处理之后给 bar，bar 处理完后再交给  webpack。
    3. bar-loader 最终把返回值和 source map 传给 webpack。
  ```

  - 1. 一个loader 尽量只做一件事(单一职责)
  - 2. 链式组合
    
    🔺只要串联组合中的loader并不一定要返回JS代码， 只要下游的loader 能有效的处理上游的loader的输出， 那么上游的模块可以返回任何类型的模块。
  - 3. 模块化
  - 4. 无状态
  - 5. 使用loader 的实用工具（loader-utils） 获取传入的loader options (schema-utils) 校验loader options
  - 6. 代码公用
  - 8. 绝对路径 loader-utils -》 stringifyRequest 可以把绝对路径变成相对路径 -(可以了解一下源码)
  - 9. 同伴依赖


  ```js
  //a easy loader
  import { getOptions } from 'loader-utils';  //这个其实就是拿到配置项
  import { validateOptions } from 'schema-utils';
  const schema = {
    type: object,
    properties: {
      test: {
        type: string
      }
    }
  }
  export default function(source) {
    const options = getOptions(this);
    validateOptions(schema, options, 'egloader');
    return `export default ${JSON.stringify(source)}`;
  }
  ```

  ```js
  //loader中如何引用依赖
  import path from 'path';
  export default function(source) {
    var callback = this.async();
    var headerPath = path.resolve('header.js');

    //利用这个方法引用外部依赖
    this.addDependency(headerPath);

    fs.readFile(headerPath, 'utf-8', function(err, header){
      if(err) return callback(err);
      callback(null, header + "\n" + source);
    });

  };
  ```

  - 写一半的问题
    1. css-loader 如何把@import 转为 require
    2. less-loader 如何把@import 转为require