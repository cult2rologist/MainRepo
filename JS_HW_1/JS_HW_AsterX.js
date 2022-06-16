// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function (age1, age2, age3) {
//     if (age1 < age2) {
//         return ("You don't have access cause your age is " + age1 + " It's less then " + age2);
//     } else if (age1 >= age2, age1 < age3) {
//         return ("Welcome !");
//     } else if (age1 > age3) {
//         return ("Keep calm and look Culture channel");
//     } else {
//         return ("Technical work");
//     }
// }
// console.log(checkAge(17,18,61));

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка

const checkAge = function (age1, age2, age3) {
    if (age1 < age2) {
        return ("You don't have access cause your age is " + age1 + " It's less then " + age2);
    } else if (age1 >= age2, age1 < age3) {
        return ("Welcome !");
    } else if (age1 > age3) {
        return ("Keep calm and look Culture channel");
    } else {
        return ("Technical work");
    }
}
console.log(checkAge(17,'pony','61'));
console.log(typeof checkAge.arguments);