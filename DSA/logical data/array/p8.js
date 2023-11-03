var n1 = ["red","blue","green"];
var n2 = ["greenred","yellowblue","parrotgreen"];
var n3 = ["lightred","lifhtblue","darkgreen"];
var n4 = ["lighorange","lifhpurpul","darkblue"];

var res1 = n1.concat(n2,n3,n4);

var res2 = [...n1, ...n2, ...n3];

console.log('res1=',res1);
console.log('res2=',res2);