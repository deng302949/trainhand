#### promise 行走的状态
- 1. new promise ()

  promise 的实例话出来 直接得到一个value、（失败/成功）状态、 prototype.then、；

- 2. 当resolve 为异步函数的时候就就不会立即改变成成功状态 ，期间会是pending状态。 

- 3. then 当状态为pending态时， 就把resolve/reject的函数存到缓存的回调函数里面，否则就直接执行resolve/reject 函数（。then返回一个promise有异步操作 要等完）

- 4. 当然在then中要判断resolve过来的东西是不是（变态类型)  eg. resolve(promise/ 本身promise) , 或者即调用resolve/reject（肯定不能让这种情况发生） 
