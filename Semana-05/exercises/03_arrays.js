console.log("EXCERCISE 3: ARRAYS");
//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
// "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
//mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log("Execise 3.a: ");
    var myArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        console.log("Exercise 3-A: " + myArray[4], myArray[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("Execise 3.b: ");
    var myArrayB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        myArrayB.sort();
        console.log(myArrayB);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).  
console.log("Exercise 3.c: ")
    var myArrayC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        myArrayC.unshift("Radium");
        myArrayC.push("Rocket");
        console.log(myArrayC);    

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("Exercise 3.d: ")
    var myArrayD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        myArrayD.shift();
        myArrayD.pop();
        console.log(myArrayD);

//e. Invertir el orden del array (utilizar reverse).
console.log("Exercise 3.e: ")
    var myArrayE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        myArrayE.reverse();
        console.log(myArrayE);

//f.Unir todos los elementos del array en un único string donde cada
//mes este separado por un guión - (utilizar join).   
console.log("Exercise 3.f: ")
    var myArrayF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var newString = myArrayF.join("-");
        console.log(newString);

//d. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log("Exercise 3.d: ")
    var myArrayR = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var myVar = myArrayR.slice([4],[11]);
        console.log(myVar);

