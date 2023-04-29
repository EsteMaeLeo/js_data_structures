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

module.exports = Node;
