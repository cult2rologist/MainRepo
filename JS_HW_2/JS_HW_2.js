// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for (const pow of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  console.log(Math.pow(2, pow));
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function powMe(pow) {
  console.log(Math.pow(2, pow));
}
powMe(25);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
for (let i = 1; i <= 5; i++) {
  console.log(new Array(i).fill(":)").join(""));
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
function printSmile(value, numberOfRows) {
  for (let i = 1; i <= numberOfRows; i++) {
    console.log(new Array(i).fill(value).join(""));
  }
}
printSmile("X", 7);

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// В консоли: Слово (word) состоит из (число) гласных и (число) согласных букв

function getWordStructure(word) {
  let vowCount = 0;
  let consCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let vow of word.toLowerCase()) {
    if (vowels.includes(vow)) {
      vowCount++;
    } else {
      consCount++;
    }
  }
  return `A word ${word} consist of ${vowCount} Vowel and ${consCount} Consonant letters.`;
}
console.log(getWordStructure("Bazooka"));
console.log(getWordStructure("Case"));
console.log(getWordStructure("Check-list"));

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом. Проверки: 'abba', 'Abba'
function isPalindrom(word) {
  lowerChar = word.toLowerCase();
  checkPalindrome = lowerChar.split("").reverse().join("");
  return lowerChar === checkPalindrome;
}
console.log(isPalindrom("abba"));
console.log(isPalindrom("Abba"));
