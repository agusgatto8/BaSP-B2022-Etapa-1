window.onload = function() {

    var emailEnter = document.getElementById('emailEnter');
    emailEnter.onblur = function(){
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var validateEmail = expReg.test(emailEnter.value);
        if (validateEmail == true){
            console.log(emailEnter.value);
        } else{
            emailEnter.classList.add("red-border");
        };

    };
        emailEnter.onfocus = function(){
            emailEnter.classList.remove("red-border");
    };
    var passwordEnter = document.getElementById('passwordEnter');
    passwordEnter.onblur = function(){
        expRegPassword = /^["a-zA-Z"0-9]{8,20}$/;
        var validatePassword = expRegPassword.test(passwordEnter.value);
        if (validatePassword == true){
            console.log("password correct");
        } else{
            passwordEnter.classList.add("red-border")
        };
    };
    passwordEnter.onfocus = function(){
        passwordEnter.classList.remove("red-border");
}; 
    

    var buttonForm = document.getElementById('button-form');
    buttonForm.click = function(a){
        a.preventDefault();
        console.log(emailEnter.value);
        } 
    }



















