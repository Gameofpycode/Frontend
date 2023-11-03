//list constructor

function List(){
    //properties
    this.dataStore=[]// store the list element
    this.listSize = 0;//list size(NUmber of elemts in the list)
    this.pos = 0;//current position
    this.insert = insert;//insert the data into the data store
    this.find = find;//finding the value position
    this.append = append;//append new element to the data store
    this.remove = remove;//to remove the value
    this.length = length;//length of tghe data store
    this.clear = clear;//it clear all the value
    this.contains = contains;//view the values present in the data store
    this.toString = toString;
    this.front =front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = this.getElement;
        

}

//insert an elemets into the list
function insert(element,after){
    let insertPos = this.find(after);
    if(insePos > -1){
        this.dataStore.splice(insertPos+1,0,element);
        this.listSize++;
        return true;
    }
    return false;

}

//append new element on to the list at new avilable elemnet
function append(element){
    this.dataStore[this.listSize++] = element;

}

//finding the element position and return index of it
function find(element){

    for(var i = 0; i<this.dataStore.length;i++){
        if(this.dataStore[i] === element) return i;
        return -1;
    }

}

//to remove an existing elemenet uses the position return by find()

function remove(element){
    let foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;

    }
    return false
}

//return the number of list in the function
function length(){
    return this.listSize;
}
//clear all the ements from the list
function clear(){
    delete this.dataStore;
    this.dataStore=[];
    this.listSize = this.pos = 0;
}

// contains=> determine if the value is presnet(rturns true) in the list or not(return false)
function contains(elemenet){
    for(var i = 0; i<this.dataStore.length;i++){
       if(this.dataStore[i]=== elemenet){
           return true;
       }
    }
    return false
}
//view the elment of the list
function toString(){
    return this.dataStore;
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos =  this.listSize -1;
}

function prev(){
    if(this.pos > 0){
        this.pos--;
    }
}

function next(){
    if(this.pos < this.listSize -1){
        this.pos++;
    }
}



;
