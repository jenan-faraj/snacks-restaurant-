while(true){
    let gender = prompt("Enter your gender: Male / Female").toLowerCase();
    if(gender == "male" || gender == "female"){
        break;
    }
}


for (let i = 0; i <= 5; i++){
    alert(i)
}

while(true){
    let num = prompt("Enter a number btween 1-100");
    if(num <= 100 && num >=0){
        break;
    }
}

let num = prompt("Enter th number:");
let sum = 0;
for (let i = 0; i <= num ;i++){
    sum += i;
}
console.log(sum)