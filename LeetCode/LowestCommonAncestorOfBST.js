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
