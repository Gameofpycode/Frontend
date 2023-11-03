//array.reduce() ----> call back function applice a function to an accumulator and succesive elements of an array untill the end of the array is reached .yielding a single value

let n1 = [1,2,3,4,5,7,8,6,5];

function sum(total,val){
    console.log(`total = ${total} and value is ${val}`);
    return total+ val;

}

let res = n1.reduce(sum);
console.log('output >', res);