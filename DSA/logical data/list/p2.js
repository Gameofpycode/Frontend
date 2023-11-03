let myfile = document.getElementById("myfile")
let result = null;

myfile.addEventListener("change",function(e){
    e.preventDefault();


    let fr = new FileReader();//file reader instance
    fr.readAsText(this.files[0])

    fr.onload = function(){
        result = fr.result;
        console.log(`output = `,result);//file content in string formate
        let final = textTOArr(result);
        console.log('text to array = ', final);

    }

    console.log("file data=",this.files)
});

// function
