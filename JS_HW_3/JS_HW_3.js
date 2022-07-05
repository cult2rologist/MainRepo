// 1. Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021.
/*const users = [
  {
    firstName: "John",
    lastName: "Caper",
    phone: "7436676737634",
    registrationDate: "12.10.2021",
  },
  {
    firstName: "Clark",
    lastName: "Kent",
    phone: "4346676737634",
    registrationDate: "16.09.2021",
  },
  {
    firstName: "Tony",
    lastName: "Stark",
    phone: "7436698337634",
    registrationDate: "11.10.2021",
  },
  {
    firstName: "Bruce",
    lastName: "Wayne",
    phone: "1111176737634",
    registrationDate: "09.10.2021",
  },
  {
    firstName: "Star",
    lastName: "Lord",
    phone: "7439374737634",
    registrationDate: "10.10.2021",
  },
  {
    firstName: "Kate",
    lastName: "Bishop",
    phone: "7436693647634",
    registrationDate: "11.10.2021",
  },
  {
    firstName: "Jerry",
    lastName: "James",
    phone: "7409048737634",
    registrationDate: "10.10.2021",
  },
  {
    firstName: "Jeremy",
    lastName: "Clarkson",
    phone: "743667600289334",
    registrationDate: "16.10.2020",
  },
  {
    firstName: "Robert",
    lastName: "Patrik",
    phone: "7436676730093",
    registrationDate: "10.10.2020",
  },
  {
    firstName: "Jonny",
    lastName: "Sins",
    phone: "74923982737634",
    registrationDate: "01.01.2021",
  },
  {
    firstName: "Andrew",
    lastName: "Garfield",
    phone: "743667988344",
    registrationDate: "09.10.2019",
  },
  {
    firstName: "Jane",
    lastName: "Foster",
    phone: "74368783427634",
    registrationDate: "09.10.2019",
  },
  {
    firstName: "Rick",
    lastName: "Smith",
    phone: "700000037634",
    registrationDate: "12.10.2021",
  },
];

function findCards(dates) {
  return users.filter((user) => dates.includes(user.registrationDate));
}
console.log(findCards(["10.10.2021", "09.10.2021"]));
*/

// 2* Дан массив объектов. Каждый объект является идентификационной карточкой человека.
// Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
const fs = require("fs");
let users = JSON.parse(fs.readFileSync("task2.json"));
//console.log(users);

// function uniqueFunc1() {
//   let unique1 = [];
//   users.forEach(el => {
//     if (!unique1.includes(JSON.stringify(el))) unique1.push(JSON.stringify(el));
//   })
//   return unique1.map(el => JSON.parse(el));
// }
// console.log(uniqueFunc1());
let unique = Array.from(new Set(users.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));
console.log(unique);




// 3** В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)

// 4****
// В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено.
// Задание: написать функцию:
// Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
// ключевые слова: forEach, map, filter, find, indexOf, objects, arrays, findIndex, includes, for..of, for..in
