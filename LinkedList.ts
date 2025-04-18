class NodeClass<T> {
  val: T;
  next: NodeClass<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: NodeClass<T>;
  constructor(private size: number = 0) {
    this.head;
    this.size = 0;
  }
  addNode(data: T): void {
    const newNode = new NodeClass(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size += 1;
  }
  addNodeToHead(data: T): void {
    const new_node = new NodeClass(data);
    if (!this.head) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
    this.size += 1;
  }
  addNodeAtIndex(data: T, index: number): void {
    if (index > this.size || index < 0) return;
    let dummy = new NodeClass<T>(-1 as T);
    dummy.next = this.head;
    let current = dummy;
    for (let i = 0; i < index; i++) {
      if (current.next) {
        current = current.next;
      }
    }
    const new_node = new NodeClass(data);
    new_node.next = current.next;
    current.next = new_node;
    this.size += 1;
  }
  removeNodeAtIndex(index: number): void {
    if (index > this.size || index < 0) return;

    let dummy = new NodeClass<T>(-1 as T);
    dummy.next = this.head;
    let current = dummy.next;

    let i = index - 1

    while (i > 0) {
      if (current.next) {
        current = current.next;
      }
      i -= 1
    }
    if (current.next?.next) {
      current.next = current.next.next;
    } 
  }
  printNode(): string {
    let current = this.head;
    let result = '';
    while (current?.next) {
      result += `${current.val} -> `;
      current = current.next;
    }
    result += current?.val;
    return result;
  }
}
const list = new LinkedList();
list.addNode(0);
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
// list.addNodeToHead(0);
// list.addNodeAtIndex(3, 3);
// list.removeNodeAtIndex(2);
console.log(list.printNode());
