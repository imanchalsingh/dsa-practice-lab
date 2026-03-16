class List {
    constructor(val) {
        this.head = {
            value: val,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }
    //function for to create new node
    addNode(val) {
        let newNode = {
            value: val,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }
   
}

let list = new List(20);
list.addNode(30);
list.addNode(50);
list.addNode(70);
list.addNode(10);

console.log(list);