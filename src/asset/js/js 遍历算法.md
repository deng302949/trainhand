#### js 遍历算法： 广度遍历 | 深度遍历

- 广度优先遍历。 先遍历所有的邻接点，再往下遍历， 按照dom 树转为二叉树有序遍历：
  
  ```js
  //递归广度优先遍历
    function BFS (node, isChild) {
      var firstChild = isChild ? node.firstElementChild : node.nextElementSibling;

      if (firstChild) {
        console.log(firstChild);
        if (firstChild.nextElementSibling) {
          BFS(firstChild, 0)
        } else {
          BFS(firstChild.parentNode.firstElementChild, 1)
        }
      } else {
        if (node.parentNode.nextElementSibling) {
          BFS(node.parentNode.nextElementSibling, 1)
        } else {
          console.log('遍历借宿')
        }
      }
    }

    BFS(document.getElementById('root'), 1);
  ```

  ```js
  //非递归广度优先遍历
  function BFS(node) {
    let nodes = [];
    let stack = [];
    if(node) {
      stack.push(node)
      while (stack.lenth) {
        let item = stack.shift();
        let children = item.children
        nodes.push(item)
        for (let i = 0; i < children.length; i++) {
          stack.push(children[i])
        }
      }
    }
    return nodes
  }
  let nodes = BFS(document.getElementById('root').firstElmentChild)
  console.log(nodes);
  ```
- 深度优先遍历：

  深度优先遍历分为三种: 先序（根-左-右） 中序（左-根-右） 后序（左-右-根）
  
  ```js
  //深度有序优先遍历： 先序
  function LEFTDFS(node, isChild) {
    var firstChild = isChild ? node.firstElementChild : node.nextElementSibling;
    if(firstChild) {
      console.log(firstChild)
      if(firstChild.firstElementChild) { //先判断子节点
        LEFTDFS(firstChild, 1)
      } else if (firstChild.nextElementSibling) { //在判断子节点的邻节点
        LEFTDFS(firstChild, 0)
      } else {
        LEFTDFS(firstChild.parentNode, 0)
      }
    } else {
      console.log('遍历结束');
    }
  }
  LEFTDFS(document.getElementById('root'), 1)
  ```

  ```js
  //深度遍历 非递归遍历， 按照栈
  let LEFTDFS = (node) => {
    let stack = [];
    let nodes = [];
    if (node) {
      //推入当前处理的node
      stack.push(node)
      while(stack.length) {
        let item = stack.pop() //出栈
        let children = item.children
        nodes.push(item)
        for (let i = children.length - 1; i >= 0; i --) {
          stack.push(children[i])
        }
      }
    }
    return nodes;
  }

  //深度优先遍历：递归遍历
  function LeftDfs(node, nodeTree){
    if(node !== null) {
      nodeTree.push(node)
      for(let i =0; i<node.children.length;i++) {
        LeftDfs(node.children[i],nodeTree)
      }
    }
    return nodeTree
  }
  let node = LeftDfs(document.getElementById('root').firstElementChild, [])
  console.log(node)
  ```