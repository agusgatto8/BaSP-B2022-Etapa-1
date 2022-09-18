
    //SECTION A//
/*var myArrayFor = ["enero", "febrero", "marzo", "abril", "mayo"];
/*for (var i = 0; i < 5; i++){
    //alert(myArrayFor[i]);
}*/


// SECTION B//


// SECTION C//
/*var sentence = "";
for (var r = 0; r < 5; r++){
    sentence = sentence + myArrayFor[r] + " ";
}
alert(sentence);*/

//d. Crear una array vacío y con un bucle for de 10 repeticiones.
//Llenar el array con el número de la repetición, es decir que al final de la ejecución
//del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
//Mostrar por la consola del navegador el array final (utilizar console.log).
console.log("Exercise 5.d: ")
var myArrayEmpty = [];
    for (var e = 0; e < 10; e++){
    var myNewArray = myArrayEmpty.push([e]);
    console.log(myNewArray);
    };

