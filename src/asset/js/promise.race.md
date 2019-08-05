#### promise.race 

- promise.race 的功能和特点， 
 
 1. 功能 

  promise.race(iterable) 返回一个promise, 一旦iterale 中的一个promise 状态是fulfilled/rejected，那么返回的promise状态就是 fulfilled/rejected

  ```js
  let p = promise.race([p1, p2, p3]);
  ```
  
  只要P1 P2 P3 有一个率先改变状态 promise的实例返回值就会传递给P的回调函数。

  如果传入参数为空的可迭代对象， race状态永远是pending
  如果传入参数不包含任何promise 返回处理中的pending的promise
  如果是一个iterable 的promise数组 返回第一个处理完的值

  ```js
  Promise.race = function(promises) {
    promises = Array.from(promises);
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {

      } else {
        for (let i = 0; i < promises.length; i++) {
          Promise.resolve(promises[i]).then((data) => {
            resolve(data);
          }).catch((reason) => {
            reject(reason);
          })
        }
      }
    })
  }
  ```