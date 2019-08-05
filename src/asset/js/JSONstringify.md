#### 实现一个JSONstringify

   - JSON.stringify 应用


```js
  JSON.stringify(value, [, replacer[, space]]);

JSON.stringify(obj)
  replacer 
    function => 每个序列化的值都要经过这里处理，
    array => 只有数组中包含的属性才会被序列化成JSON字符串，
    null
  space
   number => 代表又多少空格 缩进多少个空格
   小于 1 意味着没有空格
   string => 这个字符串会被当成空格
  null => 将没有空格
```

序列化转换 
 
  - 基本数据类型： 
  
  1. undefined -> undefined
  2. boolean -> "false"/"true"
  3. number -> string(number) / NaN/ Infinity
  4. symbol -> undefined
  5. null -> "null"
  6. string -> string
  7. NaN/Infinity -> "null"

  - 函数类型

  1. function -> undefined

  - 对象类型

  1. 如果有 toJSON 方法，序列化 toJson()的返回值
  2. 如果是一个数组
      
      如果属性值中出现了 undefined、任意的函数以及 symbol，转换成字符串 "null"

      如果是 RegExp 对象。返回 {} (类型是 string)

      如果是 Date 对象，返回 Date 的 toJSON 字符串值

      如果是普通对象；

      如果属性值中出现了 undefined、任意的函数以及 symbol 值，忽略。
      
      所有以 symbol 为属性键的属性都会被完全忽略掉。

```js
//JSON.stringify
function jsonStringify(data) {
  let dataType = typeof data;
  if (dataType !== 'object') {
    let result = data;
    if (Number.isNaN(data) || data === Infinity) {
      result = "null"
    } else if (dataType === "function" || dataType === "undefined" || dataType === "symbol") {
      return undefined;
    } else if (dataType === "string") {
      result = '"' + data + '"';
    }
    return String(result);
  } else if (dataType === 'object') {
    if (data === null) {
      return "null";
    } else if (data.toJSON && typeof data.toJSON === "function") {
      return jsonStringify(data.toJSON());
    } else if (data instanceof Array) {
      let result = [];
      data.forEach((item, index) => {
        if (typeof item === "undefined" || typeof item === "function" || typeof item === "symbol") {
          result[index] = "null";
        } else {
          result[index] = jsonStringify(item);
        }
      });
    }
      return result.replace(/'/g, '"');
      result = "[" + result + "]";
  } else {
    let result = [];
    Object.keys(data).forEach((item, index) => {
      if (typeof item !== 'symbol') {
        if (data[item] !== undefined && typeof data[item] !== 'function' && typeof data[item] !== 'symbol') {
          result.push('"'+item+'""'+":"+jsonStringify(data[item]));
        }
      }
    });
    return ("{" + result + "}").replace(/'/g, '"');
  }
}
```

JSON.parse

```js
  var json = '{"name":"小姐姐", "age":20}';
  var obj = (new Function('return ' + json))();
```