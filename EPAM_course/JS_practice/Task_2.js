// Practical task 2
// Create a car object, add a color property to it with the value equals 'black'
const car = {
  color: "black",
};
console.log(`Your car color is ${car.color}`);

// Change the color property of the car object to 'green'
car.color = "green";
console.log(`Now your car color is changed to ${car.color}`);

// Add the power property to the car object, which is a function and displays the engine power to the console
// powerProp = (hp) => {return `Your car has ${(car.power = hp)} horsepower`;}
// console.log(powerProp(333));
car.power = (hp) => {return `Your car has ${(hp)} horsepower`;}
console.log(car.power(333));

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function addingFruits(pears, apples) {
  let x = pears + apples;
  return `Today we recieved ${x} fruits`;
}
console.log(addingFruits(523, 209));

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
defineName = (name) => name === "Ilya" ? `Hello ${name}!` : "There is no such name";
console.log(defineName("Ilya"));

// Write a function for calculating the type of argument and type output to the console
function argTypeDeterm(arg) {
  return console.log(`Type of the argument you have entered is a ${typeof arg}`);
}
argTypeDeterm("Chandler");
argTypeDeterm(185);
argTypeDeterm(true);

// Write a function that determines whether a number is prime or not
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${false} - the number you have entered is not a prime number`;
    }
  }
  return `${num > 1} - the number you have entered is a prime number`;
}
console.log(isPrime(227));
console.log(isPrime(228));
