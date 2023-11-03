let num = [];

let i=1;

while(i<=100){
    num[i] = i;
    i++
}
console.log("num=",num);

function even(val){
    return val % 2 === 0;
}

let evenArr = num.filter(even)

console.log('evenarray=',evenArr);

function prime(val){
//    if(val<1){
//         return "not a prime"
//     }
    for (let i = 2;i<val;i++){
        if(val%i==0){
            //    return flase      
        }else{
            return i
        }
       
       
    }

 }
 let primeNum = num.filter(prime)

console.log('prime=',primeNum);


