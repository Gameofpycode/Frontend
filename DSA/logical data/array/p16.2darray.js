Array.matrix = function (row,col,init){
    let arr = [];
    for(let i = 0; i< row ;i++){
        let colms=[];
        for(let j = 0;j< col; j++){
            colms[j] = init * j;

        }
        arr[i] = colms;
    }
    return arr;


};

let res = Array.matrix(3,4,6);

console.log('res1 = ',res1);