//array.every()--> it is applicable for boolean function to an array and returns true if the fucntion can return true for every element in the array

function isEven(val){
    return val % 2 ===0;

}

var n1 = [12,14,56,78,96,94,82,16]

var ev = n1.every(isEven);

console.log('ev=',ev);

if(ev){
    console.log("all numbers are even")
}else{
    console.log(" not all numbers are even")
}
function isOdd(val){
    return val % 2 !=0;

}

var n2 = [13,15,57,77,97,93,83,17]

var odd = n2.every(isOdd);

console.log('odd=',odd);

if(odd){
    console.log("all numbers are odd")
}else{
    console.log(" not all numbers are odd")
}