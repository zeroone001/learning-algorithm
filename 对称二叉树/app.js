class Solution {
    constructor () {

    }
    isSymmetric (node) {
        this.check(node.left, node.right);
    }
    check (left, right) {
        if (left === null && right === null) return true;
    }
}