window.onload = function(){

//Validate NAME

var firsName = document.getElementById("first-name");
firsName.onblur = function(){
    var expVal = (/^[a-zA-Z]{3,20}$/);
    var nameValidate = expVal.test(firsName.value);
    if (nameValidate == true){
        console.log("nombre correcto");
        firsName.classList.add("border-color");
    } else{
        console.log("Nombre incorrecto");
        firsName.classList.add("border-red");
    }
};
firsName.onfocus = function(){
    firsName.classList.remove("red-border");
};

//Validate LASTNAME

var lastName = document.getElementById("last-name");
lastName.onblur = function(){
    var expValTwo = (/^[a-zA-Z]{3,20}$/);
    var lastNameValidate = expValTwo.test(lastName.value);
    if (lastNameValidate == true){
        console.log("Apellido correcto");
        lastName.classList.add("border-color");
    } else{
        console.log("Apellido incorrecto");
        lastName.classList.add("border-red");
    }
};
lastName.onfocus = function(){
    lastName.classList.remove("red-border");
};
};