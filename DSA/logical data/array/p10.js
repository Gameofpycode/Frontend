var n1 = ["raju","ali","david","mike","arony"];

n1.forEach((item)=>{
    console.log('items=',item);
});

const res = n1.map((item)=>{
    return `<li>hi,${item} welcome to dsa concepts <br><br>`
});


console.log('res=', res);

let emps = document.getElementById("emp");

emps.innerHTML += res;