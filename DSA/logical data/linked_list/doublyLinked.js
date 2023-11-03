function Node(element){
    this.element = element;
    this.next = null;
}

function DoublyLinkedList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.disply = disply;
    this.findLast=findLast;
    this.displayReverse = displayReverse;
}

function find(item){
    let currNode = this.head;
    while(currNode.element !== item){
        currNode = currNode.next;

    }
    return currNode;
}

function insert(newElement,item){
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function remove(){

}

function display(){
    let currNode = this.head;
    while(!(currNode.next === null )){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }

}

function findLast(){

}

function displayPrevious(){

}