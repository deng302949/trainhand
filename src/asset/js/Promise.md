####Promise

  - 什么是Promise
    
    promise是一个异步抽象处理对象，是目前比较流行得javascript异步编程解决方案之一
  
  - 异步编程方案
    
    1. 回调函数
    2. 事件监听
    3. 发布/订阅
    4. Promise对象

    ```js
    const request = url => {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve('data')
          return 'data';
        }, 0)
      })
    }
    ```
    ```js
    //axios
    import axios from 'axios'
    axios.get(url).then(data => {
      console.log(data);
    }) 
    ```

  - Promise使用
    
    Promise是一个构造函数， new Promise 返回一个promise对象，接受一个excutor执行函数作为参数， excutor有两个函数类型形参 resolve reject 

    Promise相当于一个状态机

    promise的三种状态
    - pending 
    - fulfilled <- pending<= resolve 
    - rejected  <- pending<= rejected
    ->一旦pending的状态改变了 就不能再变了

    promise.then方法调用，每次返回一个新的promise对象，所以可以链式写法

    ++ Promise.all 接受一个Promise对象数组为参数，只有全部为resolve才会调用，通常用来处理多个并行操作

    ++ Promise.race接受一个promise对象数组为参数，只要有一个为relove 或者 rejected状态的话就会继续进行后面的处理

    ```js
      function timerPromisefy(delay) {
        return new Promise(function(resolve, reject) {
          setTimeout(function(){
            resolve('成功');
          }, 0)
        })
      }
      timerPromisefy().then(res=> console.log('-----?cheng', res))
    ```