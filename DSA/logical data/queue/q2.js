function Patient(name,code){
    this.name = name;
    this.code = code;

}

let q =   new Queue();
let q1 = new Patient("smitha",5);
    q.endQueue(q1);

let q2 = new Patient("John",3);
    q.endQueue(q2);

let q3 = new Patient("Raju",2);
    q.endQueue(q3);

    let q4 = new Patient("Mohan",4);
    q.endQueue(q4);

    let q5 = new Patient("suma",1);
    q.endQueue(q5);

console.log("all values = ", q.toString());

var seen = q.deQueue();
console.log('oatient to be treated first = ', seen[0].name);
console.log("patients waiting to be seen:");
console.log(q.toString());

var seen = q.deQueue();
console.log('oatient to be treated first = ', seen[0].name);
console.log("patients waiting to be seen:");
console.log(q.toString());

var seen = q.deQueue();
console.log('oatient to be treated first = ', seen[0].name);
console.log("patients waiting to be seen:");
console.log(q.toString());

var seen = q.deQueue();
console.log('oatient to be treated first = ', seen[0].name);
console.log("patients waiting to be seen:");
console.log(q.toString());



