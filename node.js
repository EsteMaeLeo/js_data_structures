class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const firstNode = new Node("Instance of the node");
console.log(firstNode.data);
console.log(firstNode.next);
module.exports = Node;