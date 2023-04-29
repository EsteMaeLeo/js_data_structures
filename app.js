const Node = require('./node');
const List = require('./list');

//Node 
const list = new List();
list.printList()
list.addToHead(10);
console.log(list);
list.addToHead(20);
console.log(list);
list.printList()

const seasons = new LinkedList();
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.removeHead();
seasons.printList();


console.log("hello ");

