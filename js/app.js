'use strict';

const userName = prompt('Please enter your Name');
alert (`Welcome to my Website ${userName}`);
let coffeeDrink = prompt ('Do you think i like coffee?').toLowerCase();
if (coffeeDrink === 'yes' || coffeeDrink === 'y') {
  // console.log('you are not correct');
  alert('you are not correct');
}
else if (coffeeDrink === 'no' || coffeeDrink === 'n') {
//   console.log('you are correct');
  alert('you are correct');
}
else {
  alert('please choose between yes/y and no/n');
}
let driveCar  = prompt ('Do you think i like driving a car?').toLowerCase();
if (driveCar === 'yes' || driveCar === 'y') {
  // console.log('you are not correct');
  alert('you are not correct');
}
else if (driveCar === 'no' || driveCar === 'n') {
  //   console.log('you are correct');
  alert('you are correct');
}
else {
  alert('please choose between yes/y and no/n');
}
let internetUsage = prompt ('Do you think i spend a lot of time on the internet?').toLowerCase();
if (internetUsage === 'yes' || internetUsage === 'y') {
  // console.log('you are correct');
  alert('you are correct');
}
else if (internetUsage === 'no' || internetUsage === 'n') {
  //   console.log('you not are correct');
  alert('you are not correct');
}
else {
  alert('please choose between yes/y and no/n');
}
let introvert = prompt ('Do you think i\'m an introvert?').toLowerCase();
if (introvert === 'yes' || introvert === 'y') {
  // console.log('you are correct');
  alert('you are correct');
}
else if (introvert === 'no' || introvert === 'n') {
  //   console.log('you are not correct');
  alert('you are not correct');
}
else {
  alert('please choose between yes/y and no/n');
}
let stuffedAnimal = prompt('Do you think i have stuffed animal called bakreek').toLowerCase();
if (stuffedAnimal === 'yes' || stuffedAnimal === 'y') {
  // console.log('you are correct');
  alert('you are correct');
}
else if (stuffedAnimal === 'no' || stuffedAnimal === 'n') {
  //   console.log('you are not correct');
  alert('you are not correct');
}
else {
  alert('please choose between yes/y and no/n');
}

alert(`Thank you ${userName} for playing with me`);
