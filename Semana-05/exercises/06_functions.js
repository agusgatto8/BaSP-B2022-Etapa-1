console.log("EXERCISE 6: FUNCTIONS");
//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//Ejecutar la función y guardar el resultado en una variable,
//mostrando el valor de dicha variable en la consola del navegador.
console.log("Exercise 6.a: ");
function suma(param1, param2){
    return param1 + param2;
};
var sumaFunction = suma(5,6);
console.log(sumaFunction);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
//de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar
//el valor NaN como resultado.
console.log("Exercise 6.b: ");
function suma(param1, param2){
    typeof (param1);
    typeof (param2);
    if (typeof(param1) != "number"){
        alert("One of the parameters has an error");
        return "NaN";
    } else{
        return param1 + param2;
    };
};

//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva
//verdadero si es un número entero.
console.log("Exercise 6.c: ");
function validate(numer1){
    if(Number.isInteger(numer1)){
        return "true";
    } else{
        return "false";
    };
};
var myVarOneF = validate(6);
console.log(myVarOneF);