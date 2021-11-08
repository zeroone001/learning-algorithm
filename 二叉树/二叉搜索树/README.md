## BST 二叉搜索树


### BST 特性

* 左子树上的所有的节点都小于等于它的根节点的值
* 右子树上的所有的节点都大于等于它的根节点的值
* 左右子树也分别是二叉排序树

### BST 优势

* 查找，二分查找的思想，查找所需要的最大的次数等于树的高度
* 插入节点，同样的思想，一层一层比较大小，插入合适的位置
* 

### BST缺陷

* 多次插入比根节点小的值，很容易形成线性的结构，容易导致不平衡

```js
/*
    先序遍历
    中序遍历
    后序遍历
*/

function generatorBST() {
    this.root = null;
    function Node(key) {
        this.left = null;
        this.right = null;
        this.key = key;
    }
    generatorBST.prototype.insert = function (key) {
        let newNode = new Node(key);
        // 假如没有节点
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertInner(this.root, newNode);
        }
    };
    generatorBST.prototype.insertInner = function (node, newNode) {
        if (node.key > newNode.key) {
            // 新的节点插到左侧
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertInner(node.left, newNode);
            }
        } else {
            // 新的节点插到右侧
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertInner(node.right, newNode);
            }
        }
    };
    // 先序遍历， 递归
    generatorBST.prototype.preOrderTraversel = function (handle) {
        this.preOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.preOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            handle(node.key);
            this.preOrderTraverselNode(node.left, handle);
            this.preOrderTraverselNode(node.right, handle);
        }
    };

    // 中序遍历
    generatorBST.prototype.midOrderTraversel = function (handle) {
        this.midOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.midOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            this.preOrderTraverselNode(node.left, handle);

            handle(node.key); // 关键

            this.preOrderTraverselNode(node.right, handle);
        }
    };

    // 后序遍历 递归
    generatorBST.prototype.lastOrderTraversel = function (handle) {
        this.lastOrderTraverselNode(this.root, handle);
    };  
    generatorBST.prototype.lastOrderTraverselNode = function (node, handle) {
        if (node !== null) {
            this.lastOrderTraverselNode(node.left, handle);

            this.lastOrderTraverselNode(node.right, handle);

            handle(node.key); // 关键
        }
    };
    // 搜索节点

     
    // 删除节点
    generatorBST.prototype.remove = function (key) {
        let current = this.root;
        let parent = null;
        let isleftChild = true;
        // 寻找节点
        while (current.key !== key) {
            parent = current;

            if (key < current.key) {
                current = current.left;
                isleftChild = true;
            } else if (key > current.key) {
                current = current.right;
                isleftChild = false;
            }
            // 找到最后的节点都没有找到
            if (current === null) {
                return false;
            }
        }

        // 删除的节点是叶子节点
        if (current.left === null && current.right === null) {
            // 这就是一个叶子节点
            if (current === this.root) {
                this.root = null;
            } else if (isleftChild){
                parent.left = null;
            } else if (!isleftChild) {
                parent.right = null;
            }
        }

        // 有一个子节点
        else if (current.right === null) {
            if (current === this.root) {
                this.root = current.left;
            }
            if (isleftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right;
            }
            if (isleftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        }
        // 
    };
}
```


```js
// 实现了查找操作
public class BinarySearchTree {
  private Node tree;

  public Node find(int data) {
    Node p = tree;
    while (p != null) {
      if (data < p.data) p = p.left;
      else if (data > p.data) p = p.right;
      else return p;
    }
    return null;
  }

  public static class Node {
    private int data;
    private Node left;
    private Node right;

    public Node(int data) {
      this.data = data;
    }
  }
}

// 插入操作

public void insert(int data) {
  if (tree == null) {
    tree = new Node(data);
    return;
  }

  Node p = tree;
  while (p != null) {
    if (data > p.data) {
      if (p.right == null) {
        p.right = new Node(data);
        return;
      }
      p = p.right;
    } else { // data < p.data
      if (p.left == null) {
        p.left = new Node(data);
        return;
      }
      p = p.left;
    }
  }
}

// 删除


public void delete(int data) {
  Node p = tree; // p指向要删除的节点，初始化指向根节点
  Node pp = null; // pp记录的是p的父节点
  while (p != null && p.data != data) {
    pp = p;
    if (data > p.data) p = p.right;
    else p = p.left;
  }
  if (p == null) return; // 没有找到

  // 要删除的节点有两个子节点
  if (p.left != null && p.right != null) { // 查找右子树中最小节点
    Node minP = p.right;
    Node minPP = p; // minPP表示minP的父节点
    while (minP.left != null) {
      minPP = minP;
      minP = minP.left;
    }
    p.data = minP.data; // 将minP的数据替换到p中
    p = minP; // 下面就变成了删除minP了
    pp = minPP;
  }

  // 删除节点是叶子节点或者仅有一个子节点
  Node child; // p的子节点
  if (p.left != null) child = p.left;
  else if (p.right != null) child = p.right;
  else child = null;

  if (pp == null) tree = child; // 删除的是根节点
  else if (pp.left == p) pp.left = child;
  else pp.right = child;
}
```