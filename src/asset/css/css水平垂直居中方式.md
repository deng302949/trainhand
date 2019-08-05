#### 使用css让一个元素水平垂直居中

- 1. 利用flex布局

```js
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

```js
//子元素是单行文本
.box {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
```

```js
//利用position+transform
.parent {
  position: relative;
}
.children {
position: absolute;
left:50%;
top:50%;
transform:translate(-50%, -50%);
}
```
```js
//grid布局
.parent{
  display: grid;
}
.children {
  justify-self: center;
  align-self: center;
}
```

```js
//绝对定位和margin: auto
.parent {
  position: relative;
 }
.children {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```