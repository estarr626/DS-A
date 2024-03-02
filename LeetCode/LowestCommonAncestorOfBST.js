/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

*/


let breadthFirstSearch = function (root, target){
    let q = [];


    q.push([root])

    while(q.length){


        let nextPath  = q.shift()
        let curr = nextPath[nextPath.length - 1];

        if(curr === target) return nextPath;

        if(curr.left){
            q.push([...nextPath, curr.left]);;
        }
        if(curr.right){
            q.push([...nextPath, curr.right]);
        }
    }
    return false;
}
var lowestCommonAncestor = function(root, p, q) {
    let pPath = breadthFirstSearch(root, p);
    let qPath = breadthFirstSearch(root, q);

    for(let i = 0; i < pPath.length; i++){
        if(pPath[i + 1] !== qPath[i + 1]){
            return pPath[i]
        }
    }
};
