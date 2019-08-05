#### JSONP原理及简单实现

1. 浏览器同源策略，但是`<script>`标签的src属性不会被同源策略所约束，可以获取任意服务器上的脚本并执行。 JSONP通过插入script标签的方式来实现跨域，参数只能通过url传入，仅能支持get请求。

原理： 
  1. 创建callback方法
  2. 插入script标签
  3. 后台接收到请求， 解析前端传过去的callBack方法， 返回该方法的调用， 并且数据作为参数传入该方法
  4. 前端执行服务端返回的方法调用

  ```js
    function jsonp({url, params, callback}) {
      return new Promise((resolve, reject) => {
        //创建script标签
        let script = document.createElement('script');
        //将回调函数挂在window上
        window[callback] = function(data) {
          resolve(data);
          //代码执行后删除script标签
          document.body.removeChild(script);
        }

        params = { ...params, callback }
        let arrs = [];
        for (let key in params) {
          arr.push(`${key}=${params[key]}`);
        }
        script.src=`${url}?${arr.join('&')}`;
        document.body.appendChild(script);

      })
    }
  ```