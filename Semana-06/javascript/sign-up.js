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

//VALIDATE DNI

var inputDni = document.getElementById("input-dni");
inputDni.onblur = function(){
    var expValDni = (/^[0-9]{7,20}$/);
    var dniValidate = expValDni.test(inputDni.value);
    if (dniValidate == true){
        console.log("Dni approval");
        inputDni.classList.add("border-color");
    } else{
        console.log("Dni failed");
        inputDni.classList.add("border-red");
    }
};
inputDni.onfocus = function(){
    inputDni.classList.remove("red-border");
};

//Validate Number

var inputPhone = document.getElementById("input-phone");
inputPhone.onblur = function(){
    var expValPhone = (/^[0-9]{10,11}$/);
    var phoneValidate = expValPhone.test(inputPhone.value);
    if (phoneValidate == true){
        console.log("Phone approval");
        inputPhone.classList.add("border-color");
    } else{
        console.log("Phone failed");
        inputPhone.classList.add("border-red");
    }
};
inputPhone.onfocus = function(){
    inputPhone.classList.remove("red-border");
};

//Validate Adress

var inputAdress = document.getElementById("input-adress");
inputAdress.onblur = function(){
    var expValAdress = (/^["a-zA-Z"0-9]{5,20}$/);
    var adressValidate = expValAdress.test(inputAdress.value);
    if (adressValidate == true){
        console.log("adress approval");
        inputAdress.classList.add("border-color");
    } else{
        console.log("adress failed");
        inputAdress.classList.add("border-red");
    }
};
inputAdress.onfocus = function(){
    inputAdress.classList.remove("red-border");
};

// Validate Location

var inputLocation = document.getElementById("input-location");
inputLocation.onblur = function(){
    var expValLocation = (/^[A-Z]{3,20}$/i);
    var locationValidate = expValLocation.test(inputLocation.value);
    if (locationValidate === true){
        console.log("location approval");
        inputLocation.classList.add("border-color");
    } else{
        console.log("location failed");
        inputLocation.classList.add("border-red");
    }
};
inputLocation.onfocus = function(){
    inputLocation.classList.remove("red-border");
};

// Validate Postal Code

var inputPostal = document.getElementById("input-postal");
inputPostal.onblur = function(){
    var expValPostal = (/^[0-9]{4,5}$/);
    var postalValidate = expValPostal.test(inputPostal.value);
    if (postalValidate == true){
        console.log("Postal code approval");
        inputPostal.classList.add("border-color");
    } else{
        console.log("Postal code failed");
        inputPostal.classList.add("border-red");
    }
};
inputPostal.onfocus = function(){
    inputPostal.classList.remove("red-border");
};
















};