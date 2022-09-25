window.onload = function() {

    var emailEnter = document.getElementById('emailEnter');
    emailEnter.onblur = function(){
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var validateEmail = expReg.test(emailEnter.value);
        if (validateEmail == true){
            console.log(emailEnter.value);
        } else{
            emailEnter.classList.add("green-border");
        };

        };
        emailEnter.onfocus = function(){
            emailEnter.classList.remove("green-border");
        }
    var passwordEnter = document.getElementById('passwordEnter');
    passwordEnter.onblur = function(){
        expRegPassword = /^[a-zA-Z-0-9]{8,20}$/;
        var validatePassword = expRegPassword.test(passwordEnter.value);
        if (validatePassword == true){
            console.log("password correct");
        } else{
            passwordEnter.classList.add("green-border")
        };
    };
    passwordEnter.onfocus = function(){
        passwordEnter.classList.remove("green-border");
}; 
    






    var buttonForm = document.getElementById('button-form');


};












