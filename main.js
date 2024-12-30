let fname = prompt("Enter your name please.");
let gender = prompt("Enter your gender: Male / Female").toLowerCase();
let array = [];
array.push(fname);
//  EX 3
function genderFun(theName) {
  if (gender == "male") {
    console.log(`welcome Mr ${theName}`);
    array.push(gender);
  } else if (gender == "female") {
    console.log(`welcome Ms ${theName}`);
    array.push(gender);
  } else {
    console.log(`welcome ${theName}`);
  }
}

genderFun(fname);

let order = confirm("Do you want to order a shawarma, zinger or burger.");
if (order === true) {
  let yourOrder = prompt("Enter your order");
  console.log(`your order is ${yourOrder}`);
  array.push(yourOrder);
  alert("order is being prepared");
}
let number = 5;
let numName = "";
switch (number) {
  case 1:
    numName = "One";
    break;
  case 2:
    numName = "Two";
    break;
  case 3:
    numName = "Three";
    break;
  case 4:
    numName = "Four";
    break;
  case 5:
    numName = "Five";
    break;
  case 6:
    numName = "Six";
    break;
  case 7:
    numName = "Seven";
    break;
  case 8:
    numName = "Eight";
    break;
  case 9:
    numName = "Nine";
    break;
  default:
    numName = "PLEASE TRY AGAIN";
}
console.log(numName);
console.log(array);
// EX 3
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// --Q1
// -1
let reverseArray1 = [5, 3, 2, 4, 4, 3];
let newArray1 = [];
function test() {
  for (let i = reverseArray1.length; i > 0; i--) {
    let num = reverseArray1.pop();
    newArray1.push(num);
  }
  console.log(newArray1);
}

test();

// -2

let reverseArray = [5, 3, 2, 4, 4, 3];
let newArray = [];
for (let i = reverseArray.length - 1; i >= 0; i--) {
  newArray.push(reverseArray[i]);
}
console.log(newArray);

// --Q2
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// --Q3
let fruits = "orange";
let newFruits = fruits.split("").sort().join("");
console.log(newFruits);

// --Q4
function numbersFun(numbers) {
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    if (
      i < numbers.length - 1 &&
      numbers[i] % 2 === 0 &&
      numbers[i + 1] % 2 === 0
    ) {
      result += "-";
    }
  }
  return result;
}
let output = numbersFun("025468");
console.log(output);

// --Q5
let age = 20;
let msg = age >= 18 ? "You are an adult" : "You are a minor";
console.log(msg);
