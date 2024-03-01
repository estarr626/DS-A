/*
Given the root of a binary tree, invert the tree, and return its root.
*/

var invertTree = function(root) {
    if(!root){
        return root;
    }

    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left)
    invertTree(root.right)

    return root;
};
