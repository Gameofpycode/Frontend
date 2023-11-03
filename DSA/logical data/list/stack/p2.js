function isPalindrome(){
    let s = new Stack();

    for(let i=0; i<ValidityState.length;i++){
    s,push(val[i]);
}

console.log('data = ',s)

let rword = " ";

while(s.length() >0){

    rword+=s.pop();
   

}

console.log('rword = ',rword);


 
if(val === rword){
    return true;


}else{
    return false;
}
}

function submitHandler(e){
    e.preventDefault();
    var word =  document.getElementById("input").value

    if(isPalindrome(word)){
        console.log(`${word} is palindrome`)
    }else{
        console.log(`${word} is not a palindrome`)
    }

}
