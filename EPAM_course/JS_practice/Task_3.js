// Practical task 3
const movies = [
  "The Battleship Potemkin",
  "Man with a Movie Camera",
  "The Cranes Are Flying",
  "Solaris",
  "The Mirror",
];
const carMake = [
  "Porsche",
  "Tesla",
  "Kia",
  "Peugeot",
  "Honda",
  "Jaguar",
  "Mazda",
  "Volvo",
];
const friends = [
  "Aliaksandr",
  "Dzmitry",
  "Siarhei",
  "Viachaslau",
  "Vitali",
  "Yauhen",
];

// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
for (let key in movies) {
  console.log(movies[key]);
}

// Given an array of car manufacturers, convert the array to a string and back to an array
const newCarMake = carMake.toString().split(",");
console.log(newCarMake);

// Given an array of the names of your friends, add the words hello to each element of the array
friends.forEach(function (item) {
  console.log(`Hello ${item}!`);
});

// Convert numeric array to Boolean
const mainArr = [1, 6, 7, 8, 3, 4, 5, 6];
console.log(!!mainArr);

// Sort the array [1,6,7,8,3,4,5,6] in descending order
mainArr.sort((a, b) => {
  return b - a;
});
console.log(mainArr);

// Filter array [1,6,7,8,3,4,5,6] by value> 3
findNums = (value) => {
  return value > 3;
};
console.log(mainArr.filter(findNums));

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
findIndex = (arr, num) => {
  return arr.indexOf(num);
};
console.log(findIndex(mainArr, 8));

// Implement a loop that will print the number 'a' until it is less than 10
let a = 0;
while (a < 10) {
  console.log(a++);
}

// Implement a loop that prints prime numbers to the console
let x = 0;
for (let i = 0; i < 10; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0) {
      x++;
    }
  }
  if (x === 1) {
    console.log(`${i} is Prime`);
  }
  x = 0;
}

// Implement a loop that prints odd numbers to the console
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(`${i} is odd`);
  }
}
