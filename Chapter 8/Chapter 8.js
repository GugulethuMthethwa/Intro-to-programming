/*let ourFirstFunction = function () {
    console.log("Hello world!");
   }
   //Calling a Function
   ourFirstFunction();

   //Passing Arguments into Functions

let sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
   }
   sayHelloTo("Gugulethu");*/

//Printing Cat Faces
/*let drawCats = function (howManyTimes) {
   for (var i = 0; i < howManyTimes; i++) {
   console.log(i + " =^.^=");
   }
  }
  drawCats(100);*/

// console.log (5 + Math.floor(1.2345));

// Calling a function called Double

/*let double = function (number) {
    return number * 2;
};
console.log(double(3));*/

//A Function to Pick a Random Word

/*let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}
let randomWords = ["Planet", "Worm", "Flower", "Computer"];
console.log (pickRandomWord(randomWords));
console.log (pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));*/

//A Random Insult Generator

/*let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Pick a random body part from the randomBodyParts array:
let randomBodyPart = pickRandomWord(randomBodyParts)
// Pick a random adjective from the randomAdjectives array:
let randomAdjective = pickRandomWord(randomAdjectives)
// Pick a random word from the randomWords array:
let randomWord = pickRandomWord(randomWords)
// Join all the random strings into a sentence:
let randomString = "Your " + randomBodyPart + " is like a " +
    randomAdjective + " " + randomWord + "!!!";
console.log(randomString);

function pickRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}*/

//Leaving a Function Early with return

/*let fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
}
console.log(fifthLetter("Gugulethu"));*/

//Using return Multiple Times Instead of if...else Statements

let medalForScore = function (score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold";
}
let yourScore = prompt("What is your score?");
alert("You get " + medalForScore(yourScore) + ".");