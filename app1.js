console.log("Hello World!")
console.warn("This is a warning!")
console.error("Error! System Critical!")

var var1 = "value";
console.log(var1);
console.log("\n");

var var2 = Number(5);
var sum = var1 + var2;
console.log(sum);//Guess result: since var1 is a string and var2 is a number then the result
//should show var1var2: 105  Yes guessed correctly!

/*Data types, objects, arrays, conditional loops*/
console.log(typeof var1);//var1 should be a string here
var var3 = "text";
console.log(var3);
var var3 = true;
console.log(var3);
var var1 = Number(5);
var var2 = "5";
var sum = parseInt(var2) + var1;
console.log(sum); //should be 10