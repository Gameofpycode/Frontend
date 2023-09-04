var audio = document.getElementById("audio");
var upload = document.getElementById("btn");


upload.addEventListener("click",()=>{
    const selected_audio=audio.files[0]
    console.log(selected_audio);
});


