//array.some() -> function will take a bolean stae of function return true if atleast one of the elemts of an array 


function isOdd(num){
    return num % 2 !==0;

}

let n1 = [2,4,8,6,8,2,6];

let res = n1.some(isOdd);

    if(res){
        console.log('some number are odds');
    }else{
        console.log('no number is odd');
    }