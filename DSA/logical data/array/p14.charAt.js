let colors =["red","blue","green","white","black","orange"];

function picFirst(val){
    return val.charAt(0);
}

let res1 = colors.map(picFirst);

console.log('res=',res1);

function picLast(val){
    let x = val.length
    return val.charAt(x-1)
} 
let res2 = colors.map(picLast);

console.log('res=',res2); 

function picMid(val){
    let x = val.length
    let y = Math.round(x/2)
    console.log(y)
    return val.charAt(y-1)
} 
let res3 = colors.map(picMid);

console.log('res=',res3);


