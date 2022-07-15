//Practical task 1
//Conditional statements and Data types Practical task
const boolean = true;
const string = "99";
const number = 99;

//Perform addition of various types (string + boolean, string + number, number + boolean)
let a = string + boolean;
let b = string + number;
let c = number + boolean;
console.log(a, b, c);

//Perform multiplication of various types (string * boolean, string * number, number * boolean)
a = string * boolean;
b = string * number;
c = number * boolean;
console.log(a, b, c);

//Divide different types (string / boolean, string / number, number / Boolean)
a = string / boolean;
b = string / number;
c = number / boolean;
console.log(a, b, c);

//Perform explicit conversion (number, string, boolean)
a = Number(string);
b = String(boolean);
c = String(number);
console.log(a, b, c);
