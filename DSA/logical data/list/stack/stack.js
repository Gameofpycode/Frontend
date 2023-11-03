function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = this.length;
    this.clear = clear;

}

//push the new value into the stack
function push(val){
    this.dataStore.push(val);

}

//pop value from the stack
function pop(){
    return this.dataStore.pop();
}

function peek(){
    this.dataStore[this.length() - 1];
}

function length(){
    return this.dataStore.length( );

}

function clear(){
    // return this.dataStore=[]
    return  this.top = 0;

}