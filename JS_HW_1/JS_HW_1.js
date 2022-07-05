// 1. Create a var “item_1”
// 2. Assign the var item_1 a number value 5
// 3. Output to the console item_1
let item_1 = 5;
console.log(item_1);

// 4. Create a var “item_2”
// 5. Assign the var item_2 a number value 3
// 6. Output to the console item_2
let item_2 = 3;
console.log(item_2);

// 7. Create a var “item_3”
// 8. Assign the var item_3 the sum of item_1 and item_2
// 9. Output to the console item_3
let item_3 = item_1 + item_2;
console.log(item_3);

// 10. Create a var “item_4”
// 11. Assign the var item_4 a string value “Yolochka”
// 12. Output to the console item_4
let item_4 = "Yolochka";
console.log(item_4);

// 13. Output to the console the sum of item_3 and item_4
console.log(item_3 + item_4);

// 14. Output to the console the product of item_3 and item_4
console.log(item_3 * item_4);

// 15. Create a var “item_5”
// 16. Assign the var item_5 the var item_3
let item_5 = item_3;

// 17. Create a var item_6
// 18. Create a var item_6_type
// 19. Assign the var item_6 a value 15
// 20. Assign the var item_6_type data type of the var item_6
// 21. Output to the console the data type of the var item_6 as ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——
let item_6 = 15;
let item_6_type = typeof item_6;
console.log("item_6 == " + item_6, "item_6_type == " + item_6_type);

// 22. Create a var item_7 and transform the var item_6 into String in it
// 23. Create a var item_7_type
// 24. Assighn the var item_7_type data type of the var item_7
// 25. Output to the console the data type of the var item_7 as ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——
let item_7 = String(item_6);
let item_7_type = typeof item_7;
console.log("item_7 == " + item_7, "item_7_type == " + item_7_type);

// 26. Create a var “age_1” and assign value 10 to it
// 27. Create a var “age_2” and assign value 18 to it
// 28. Create a var “age_3” and assign value 60 to it
// 29. Create an operator if in which you will check the value of the var age_1
// 30. If age_1 < age_2, output to the console “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. If age_1 >=  age_2 и age_1 <  age_3, output to the console “Welcome  !”
// 32. If age_1  > age_3, output to the console “Keep calm and watch the Culture channel”
// 33. Otherwise output to the console “Technical work”

let age_1 = 10; // change value of this field to 19 and 119 for test
let age_2 = 18;
let age_3 = 60;
if (age_1 < age_2) {
  console.log(
    "You don't have access cause your age is " +
      age_1 +
      " It's less then " +
      age_2
  );
} else if ((age_1 >= age_2, age_1 < age_3)) {
  console.log("Welcome !");
} else if (age_1 > age_3) {
  console.log("Keep calm and watch the Culture channel");
} else {
  console.log("Technical work"); // the output works with the changed value of age_1 and muted "else if" operator
}