let game = {win: 0, loss: 0};
let choices = ["ROCK", "PAPER", "SCISSORS"];

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(2);
//     return Math.floor(Math.random() * (2 - 0 + 0) + 1); //The maximum is inclusive and the minimum is inclusive
// }
// var random1 = getRandomIntInclusive(); 

function getRandomInt(max) {
    return Math.floor(Math.random() * choices.length);
}
var random1 = getRandomInt(); 
console.log(random1);

var random2 = getRandomInt();
console.log(random2);

var bot1 = choices[random1]; //assign values of random1 into an array that overlaps the "choices variable" such that its value is set to var bot1.
var bot2 = choices[random2]; //assign values of random2 into an array that overlaps the "choices variable" such that its value is set to var bot2.

console.log(bot1);
console.log(bot2);


if (bot1 === "ROCK" && bot2 === "SCISSORS" || bot1 === "PAPER" && bot2 === "ROCK" || bot1 === "SCISSORS" && bot2 === "PAPER") {
    console.log("Bot1 Wins");
    game.win = 1;
    console.log(game)
} 
else if (bot1 === "ROCK" && bot2 === "PAPER" || bot1 === "PAPER" && bot2 === "SCISSORS" || bot1 === "SCISSORS" && bot2 === "ROCK"){
    console.log("Bot1 Loses");
    game.loss = 1; 
    console.log(game);
    }
else if (random1 === random2){
    console.log("Draw");
    console.log(game);
}

var results = "";
if (game.win > 0) {
    results += bot1;
    results += " beats "; 
    results += bot2;
}else if 
    (game.loss > 0){
        results += bot2; 
        results += " beats ";
        results += bot1; 
    }else {
        results += " Tie Game ";
    }
console.log(results); 