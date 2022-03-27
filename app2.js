var valueA = prompt("Please enter a number:");
var num1 = Number(valueA);
console.log(num1);

var valueB = prompt("Enter another number:");
var num2 = Number(valueB);
console.log(num2);

let powerOf = Math.pow(parseInt(num1), parseInt(num2));
alert(powerOf);
console.warn(powerOf);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }
// inclusive at min and exclusive at max


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//  }
// inclusive at both min and max

function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (3 - 1 + 1) + 1); //The maximum is inclusive and the minimum is inclusive
}
console.log(getRandomIntInclusive());

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(alphabet);
alphabet.pop(); 
console.log('This is .pop, removes from end of arr: ' + alphabet);
alphabet.push('g');
console.log('This is .push, adds to the end of arr: ' + alphabet);
const firstElement = alphabet.shift();
console.log('This is .shift, removes from beginning of arr: ' + alphabet);
console.log('This is removed portion of .shift: ' + firstElement);
alphabet.unshift('1');
console.log('This is .unshift, adds to the beginning of arry: ' + alphabet);

console.log('This is the resulting array: ' +  "\n" + alphabet);

console.log(alphabet);