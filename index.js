//First task: Identify user's name, age, and gender. 
let username = prompt('What is your name?', '');
let userAge = prompt('How old are you?', '');
let userGender = prompt('What is your gender?', '');

let userData = {
    name: username,
    age: userAge,
    gender: userGender
}

for( let key in userData){
    console.log(key + ' = ' + userData[key])
}

//Second task - Operators: Using if..else
let newNumber = prompt('Give me the number', '');
if(newNumber % 2 == 0){
    console.log(newNumber);
    alert(`${newNumber} is even number!`)
}
else{
    alert(`${newNumber} is odd number!`);
}

// Third task - Rewrite the given code using switch
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1: 
    alert(1);
    break;
  case 2: // as we cannot use || for "case" there is no need to add "break"
    alert('2,3');
  case 3:
    alert('2,3');
    break;
default:
    console.log('sorry, there is no option');
}

//Fourth task: loops
//first part: even numbers between 1-100
let evenNumber = 0;
for(i = 1; i < 101; i++){
    if (i % 2 == 0){
        evenNumber++;
    }
}
console.log(evenNumber);

//Second part:
let i = 0;
while (i < 3){
    alert( `number ${i}!` );
    i++;
  }