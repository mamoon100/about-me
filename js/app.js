'use strict';
// let correctAnswer = 0;
// const userName = prompt('Please enter your Name');
// alert (`Welcome to my Website ${userName}`);


// let coffeeDrink = prompt ('Do you think i like coffee?').toLowerCase();
// if (coffeeDrink === 'yes' || coffeeDrink === 'y') {
//   // console.log('you are not correct');
//   alert('you are not correct');
// }
// else if (coffeeDrink === 'no' || coffeeDrink === 'n') {
// //   console.log('you are correct');
//   alert('you are correct');
//   correctAnswer++;
// }
// else {
//   alert('please choose between yes/y and no/n');
// }
// let driveCar  = prompt ('Do you think i like driving a car?').toLowerCase();
// if (driveCar === 'yes' || driveCar === 'y') {
//   // console.log('you are not correct');
//   alert('you are not correct');
// }
// else if (driveCar === 'no' || driveCar === 'n') {
//   //   console.log('you are correct');
//   alert('you are correct');
//   correctAnswer++;
// }
// else {
//   alert('please choose between yes/y and no/n');
// }
// let internetUsage = prompt ('Do you think i spend a lot of time on the internet?').toLowerCase();
// if (internetUsage === 'yes' || internetUsage === 'y') {
//   // console.log('you are correct');
//   alert('you are correct');
//   correctAnswer++;
// }
// else if (internetUsage === 'no' || internetUsage === 'n') {
//   //   console.log('you not are correct');
//   alert('you are not correct');
// }
// else {
//   alert('please choose between yes/y and no/n');
// }
// let introvert = prompt ('Do you think i\'m an introvert?').toLowerCase();
// if (introvert === 'yes' || introvert === 'y') {
//   // console.log('you are correct');
//   alert('you are correct');
//   correctAnswer++;
// }
// else if (introvert === 'no' || introvert === 'n') {
//   //   console.log('you are not correct');
//   alert('you are not correct');
// }
// else {
//   alert('please choose between yes/y and no/n');
// }
// let stuffedAnimal = prompt('Do you think i have stuffed animal called bakreek').toLowerCase();
// if (stuffedAnimal === 'yes' || stuffedAnimal === 'y') {
//   // console.log('you are correct');
//   alert('you are correct');
//   correctAnswer++;
// }
// else if (stuffedAnimal === 'no' || stuffedAnimal === 'n') {
//   //   console.log('you are not correct');
//   alert('you are not correct');
// }
// else {
//   alert('please choose between yes/y and no/n');
// }

// alert(`Thank you ${userName} for playing with me`);

// let counter = 1;
// let theNumber = Math.floor(Math.random()*100);
// let takeGuess = prompt('Guess a number between 0 and 99');
// while (typeof(parseInt(takeGuess)) !== 'number') {
//   takeGuess = prompt('Guess a number between 0 and 99');
// }

// do {
//   if (takeGuess === theNumber) {
//     alert(`${userName} You have won ${theNumber} is the correct number \n you have ${4-counter} try left`);
//     correctAnswer++;
//     break;
//   }
//   else if (takeGuess > theNumber) {
//     takeGuess = prompt (`try something lower \n you still have ${4-counter} try left`);
//     counter++;

//   }
//   else if (takeGuess < theNumber) {
//     takeGuess = prompt (`try something higher \n you still have ${4-counter} try left `);
//     counter++;

//   }
// } while (counter < 4);

// if (counter >= 4) {
//   alert(`The correct answer is ${theNumber}`);
// }

// let periodicTable = ['h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca'];
// let periodicCounter = 1;
// let nameGuess = prompt('Guess which periodic table element im thinking of');
// let isItThere = false;

// do {
//   for (let i = 0; i<periodicTable.length; i++){
//     if (periodicTable[i] === nameGuess) {
//       isItThere = true;
//       break;
//     }
//   }
//   if (isItThere) {
//     alert(`You have Guessed it Right \n The full Answer is \n ${periodicTable} \n you still have ${6-periodicCounter} try left`);
//     correctAnswer++;
//     break;
//   }
//   else {
//     periodicCounter++;
//     nameGuess = prompt(`try again \n Hint: periodic Table 20 items \n you still have ${7-periodicCounter} Gussies left`);
//   }
// } while (periodicCounter <= 6 );

// if (periodicCounter > 6) {
//   alert(`You have lost the correct answers are \n ${periodicTable}`);
// }


// alert (`you have made it to the scores area \n you scored ${correctAnswer} out of 7`);







function fiveQuestions(question,answer,ans) {

let userAnswer ;
  do {
  userAnswer = prompt(question).toLowerCase();

} while (userAnswer !== 'yes' && userAnswer !== 'y' && userAnswer !== 'n' && userAnswer !== 'no' );
  
if (userAnswer === answer || userAnswer === ans) {
 //console.log('you are correct'); 
 alert('you are correct');
correctAnswer++;

} else {
  alert('you\'re not correct');
}

}


function numberQuestion() {
  let counter = 1;
let theNumber = Math.floor(Math.random()*100);
let takeGuess = prompt('Guess a number between 0 and 99');
while (typeof(parseInt(takeGuess)) !== 'number' ) {
  takeGuess = prompt('Guess a number between 0 and 99');
}
do {
  if (takeGuess === theNumber) {
    alert(`${userName} You have won ${theNumber} is the correct number \n you have ${4-counter} try left`);
    correctAnswer++;
    break;
  }
  else if (takeGuess > theNumber) {
    takeGuess = prompt (`try something lower \n you still have ${4-counter} try left`);
    counter++;

  }
  else if (takeGuess < theNumber) {
    takeGuess = prompt (`try something higher \n you still have ${4-counter} try left `);
    counter++;

  }
} while (counter < 4);

if (counter >= 4) {
  alert(`The correct answer is ${theNumber}`);
}
}

function arrayQuestion(theArray, question, hint) {

  let counter = 1;
let nameGuess = prompt(question);
let isItThere = false;

  do {
    for (let i = 0; i<theArray.length; i++){
      if (theArray[i] === nameGuess) {
        isItThere = true;
        break;
      }
    }
    if (isItThere) {
      alert(`You have Guessed it Right \n The full Answer is \n ${theArray} \n you still have ${6-counter} try left`);
      correctAnswer++;
      break;
    }
    else {
      counter++;
      nameGuess = prompt(`try again \n Hint: ${hint} \n you still have ${7-counter} Gussies left`);
    }
  } while (counter <= 6 );
  
  if (counter > 6) {
    alert(`You have lost the correct answers are \n ${theArray}`);
  }
  
  
}

function startGame() {
 
const userName = prompt('Please enter your Name');
alert (`Welcome to my Website ${userName}`);
fiveQuestions('Do you think i like coffee?', 'no','n');
fiveQuestions('Do you think i like driving a car?', 'no','n');
fiveQuestions('Do you think i spend a lot of time on the internet?', 'yes','y');
fiveQuestions('Do you think i\'m an introvert?', 'yes','y');
fiveQuestions('Do you think i have stuffed animal called bakreek', 'yes','y');
numberQuestion();

arrayQuestion(['h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's', 'cl', 'ar', 'k', 'ca'], 'Guess which periodic table element im thinking of', 'periodic Table 20 items');

alert (`you have made it to the scores area \n you scored ${correctAnswer} out of 7`);
}
let correctAnswer = 0;
startGame();
