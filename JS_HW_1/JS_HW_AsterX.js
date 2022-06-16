// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Вывести в консоль результат работы функции с возрастами 17, 18, 61
// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка
// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке

const checkAge = function (age1, age2, age3) {
  const numberedArgs = [age1, age2, age3].map((el) => Number(el));
  const isNumbers = numberedArgs.map(
    (el) => typeof el === "number" && !isNaN(el)
  );
  if (!isNumbers.every(Boolean)) {
    return "some args not a number";
  }
  const [a1, a2, a3] = numberedArgs;
  if (a1 < a2) {
    return (
      "You don't have access cause your age is " + a1 + " It's less then " + a2
    );
  } else if ((a1 >= a2, a1 < a3)) {
    return "Welcome !";
  } else if (a1 > a3) {
    return "Keep calm and look Culture channel";
  } else {
    return "Technical work";
  }
};
const arg1 = prompt("Input first age");
const arg2 = prompt("Input second age");
const arg3 = prompt("Input third age");
console.log(checkAge(arg1, arg2, arg3));