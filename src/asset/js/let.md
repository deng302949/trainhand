#### let const var 的区别？

- 首先的谈谈变量提升和 展示性死区

 1. 变量提升
    
    -  未定义，先赋值，就会导致变量提升
    ```js
      <script>
        a = 0;
        console.log(a, '-----1');
        var a;
        console.log(a, '---2');
      </script>
    ```

  2. 暂时性死区（TDZ -> temporal dead zone）

    没有赋值就直接使用就会造成暂时性死区。
  ```js
    let a = a;
    if (true) {
      // TDZ开始
      tmp = 'abc'; // ReferenceError
      console.log(tmp); // ReferenceError

      let tmp; // TDZ结束
      console.log(tmp); // undefined

      tmp = 123;
      console.log(tmp); // 123
    }
  ```
  
| 声明方式 | 变量提升   | 展示性死区 | 重复声明 | 会计作用域 | 初始值 | 重新赋值 | 
| ----- | --------- | ----------- | ------- | --------- | --------- | --------- |
| var | Y | N | Y | N | N | Y |
| let | N | Y | N | Y | N | Y |
|const| Y | Y | N | Y | Y | N |