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

