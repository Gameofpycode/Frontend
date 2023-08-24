function validate(e){
    e.preventDefault();
              //formname.fieldname.value

    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;
    var lang = []
    var checkOpt = document.getElementsByName("lang[]");
    for (var i=0; i<checkOpt.length;i++){
        if(checkOpt[i].checked){
            lang.push(checkOpt[i].value);
        }
    }

    //console.log('lang=',lang)
    var nameErr = emailErr = monileErr = GenderErr = lang =true;

    //name validation
    if(name === ""){
        printError("nameErr","name field can't be empty");
    }else{
        let regex = /^ [a-zA-Z]$/;
        if(regex.test(name)===false){
            printError("nameErr","please enter a valid nime");
        }else{
        printError("nameErr","");
        nameErr = false;
        }
    }

    //email validation
    if(email===""){
        printError("emailErr","email field can't be empty");
    }else{
        let regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","invalid email id");
        }else{
            printError("emailErr","")
            emailErr = false;
        }

    }
    //mobile validation
    if(mobile===""){
        printError("mobileErr","mobile field can't be empty");
    }else{
        let regex=/^[6-9\d{9}]$/;
        if(regex.test(mobile)===false){
            printError("mobileErr","invalid mobile number");
        }else{
            printError("mobileErr","")
            mobileErr = false;
        }

    }
    //city validation
    if(city === "null"){
        printError("cityErr","plaese select city name");
    }else{
        printError("cityErr","");
        cityErr= false;
    }

    //gender validation
    if(gender === "null"){
        printError("genderErr","plaese select city gender");
    }else{
        printError("genderErr","");
        genderErr= false;
    }
    //lang validation
    if(lang.lenght === 0){
        printError("langErr","plaese select languages");
    }else{
        printError("langErr","");
        langErr= false;
    }

    // if((nameErr && emailErr && mobileErr && genderErr && cityErr && langErr)===false){
    //     let data = {
    //         name:name,
    //         email:email,
    //         mobile:mobile,
    //         gender:gender,
    //         city:city,
    //         language:language
    //     };
    // }


}

function printError(eleId,msg){
    document.getElementById(eleId).innerText=msg;
}