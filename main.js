let fname = prompt("Enter your name please.");
export let gender = () => {prompt("Enter your gender: Male / Female").toLowerCase()};
let array = [];
    array.push(fname);

function genderFun(theName){
    if (gender() == "male") {
        console.log(`welcome Mr ${theName}`);
        array.push(gender());
    }else if (gender() == "female"){
        console.log(`welcome Ms ${theName}`);
        array.push(gender());
    }else{
        console.log(`welcome ${theName}`);
    }
}

genderFun(fname)

let order = confirm("Do you want to order a shawarma, zinger or burger.")
if (order === true){
    let yourOrder = prompt("Enter your order");
    console.log(`your order is ${yourOrder}`)
    array.push(yourOrder);
    alert("order is being prepared")
}
let number = 5;
let numName = ""; 
switch(number){
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
console.log(numName)
console.log(array);

for (let i = 0; i < array.length ; i++) {
    console.log(array[i]);
}