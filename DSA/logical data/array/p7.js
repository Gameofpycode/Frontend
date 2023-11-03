var names = ["sachin","kumar","ram","kumar","mohan","raju","ram","manju"]

var key = "ram";

var fpos = names.indexOf(key);
var lpos = names.lastIndexOf(key);

console.log(`first found`,key,"at position",fpos);
console.log(`last found`,key,"at position",lpos);

let res1 = names.join();

console.log('all value = ',res1);
console.log('string formate = ',res1.toString());
