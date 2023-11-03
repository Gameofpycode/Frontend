//a constructore based design

// node class constructore consists of two properties
//1> element = > which store the node data
//2> next = > which store's a link to next node in the linked list



function Node(element){
    this.element = element;
    this.next = null;
}

//the head node starts with its next property set to null


function SinglyLinkedList(){

    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display =display;
    this.findPrevious  = this.findPrevious;
     
}


function find(item){
    let currNode = this.head;
    while(currNode.element !== item ){
        currNode = currNode.Next;

    }
    return currNode;

}

//insert new nodes

function insert(newEle,item){
    let newNode = new Node(newEle);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

//disply the elements of the linked list

function display(){
    let currNode = this.head;
    while(!(currNode.next === null)){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
    return currNode;

}

function findPrevious(item){
    let preNode = this.findPrevious(item);
    if(!(preNode.next === next) && (currNode.next.element !== item)){
        currNode = currNOde.next;
    }
    return currNode;


}