class List {
    constructor(val) {
        this.head = {
            value: val,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    // Add node at end
    addNode(val) {
        const newNode = {
            value: val,
            next: null
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    // Traverse list
    traverse() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Insert at beginning
    insertAtStart(val) {
        const newNode = {
            value: val,
            next: this.head
        };

        this.head = newNode;
        this.size++;
    }
}

let list = new List(20);
list.addNode(30);
list.addNode(50);
list.addNode(70);
list.addNode(10);

list.insertAtStart(27);

list.traverse();