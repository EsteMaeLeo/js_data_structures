class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    //Validation first check is node or null value
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Is not node or null value");
    }
  }
  getNextNode(){
    return this.next;
  }
}

const firstNode = new Node("Instance of the node");
console.log(firstNode.data);
console.log(firstNode.next);

const secondNode = new Node("Second node");
firstNode.setNextNode(secondNode);
console.log(firstNode);

console.log(firstNode.getNextNode());

const strawberryNode = new Node("Berry Tasty");
const vanillaNode = new Node("Vanilla");
const coconutNode = new Node("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while (currentNode) {
  console.log(currentNode.data);
  currentNode= currentNode.getNextNode();
}
module.exports = Node;
