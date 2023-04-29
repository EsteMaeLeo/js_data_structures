class NodeOriginal {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    //Validation first check is node or null value
    if (node instanceof NodeOriginal || node === null) {
      this.next = node;
    } else {
      throw new Error("Is not node or null value");
    }
  }
  getNextNode() {
    return this.next;
  }
}

const firstNode = new NodeOriginal("Instance of the node");
console.log(firstNode.data);
console.log(firstNode.next);

const secondNode = new NodeOriginal("Second node");
firstNode.setNextNode(secondNode);
console.log(firstNode);

console.log(firstNode.getNextNode());

const strawberryNode = new NodeOriginal("Berry Tasty");
const vanillaNode = new NodeOriginal("Vanilla");
const coconutNode = new NodeOriginal("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while (currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}
module.exports = NodeOriginal;
