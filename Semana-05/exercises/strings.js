// SECTION A//

var myVarUp = "This is a string";
myVarUp = myVarUp.toUpperCase();
console.log("Exercise 2-A: " + myVarUp)

// SECTION B//

var randomVar = "abcdefghij";
var subRandomVar = randomVar.substring(0,5);
console.log("Excercise 2-B: " + subRandomVar);

//SECTION C//

var sectionC = "abcdefghij";
var subSectionC = sectionC.substring(7,10);
console.log("Exercise 2-C: " + subSectionC);

// SECTION D //

var sectionD = "abcdefghij";
var subSectionD = sectionD.substring(0,1).toUpperCase(0);
var subStringD = sectionD.substring(1,9).toLowerCase();
console.log("Exercise 2-D: " + subSectionD + subStringD);

// SECTION E//

var spaceFree = "abcde fghij";
var spaceFreeE = spaceFree.indexOf(" ");
console.log("Exercise 2-E: " + spaceFreeE);


// SECTION F//

var sectionF = "agustin gatto";
var subSectionF = sectionF.substring(0,1).toUpperCase(0);
var subStringF = sectionF.substring(1,8).toLowerCase();

var sectionR = sectionF.substring(8,9).toUpperCase(8);
var subStringR = sectionF.substring(9,13).toLowerCase();
var space = sectionF.indexOf(" ");
console.log("Exercise 2-F: " + subSectionF + subStringF + sectionR + subStringR + " the index of the space is: " + space);
