//1. **Masala**: Berilgan massivning har bir elementini uzunligiga qarab, teskari tartibda chiqaruvchi funksiya yozing.

// let arr = ["olma", "anor", "mandarin", "apelsin", "banan"];
// const lengthArray = function (arg) {
//   return arg.sort((a, b) => {
//     return b.length - a.length;
//   });
// };
// console.log(lengthArray(arr));

// 2. **Masala**: Massiv ichidagi barcha string elementlarning
// birinchi harfini katta harfga o'zgartiruvchi funksiya yozing.

// let str = "salom bolalar";
// const toCapitilizeElement = function (arg) {
//   let res = arg.split(" ").map((element) => {
//     return element[0].toUpperCase() + element.slice(1);
//   });
//   return res.join(" ");
// };
// console.log(toCapitilizeElement(str));

// 3. **Masala**: Berilgan stringdagi barcha raqamlarni olib tashlab,
//  qolgan qismini qaytaruvchi funksiya yozing.

// let str = "sa45lom44";
// const removeNumbers = (arg) => {
//   return arg.replace(/[0-9]/g, "");
// };
// console.log(removeNumbers(str));

//4. **Masala**: Massiv ichida faqat string turlarini saqlab,
// boshqa turlarni olib tashlaydigan funksiya yozing.

// let arr = ["salom", 55, 85, true, 2n, "xayr"];
// function keepString(arg) {
//   let res = [];
//   for (const element of arg) {
//     if (typeof element == "string") {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(keepString(arr));

//5. **Masala**: Berilgan stringdagi so'zlarning sonini aniqlovchi funksiya yozing.
// let str = "salom dunyo";
// function countString(arg) {
//   return arg.split(" ").length;
// }
// console.log(countString(str));

//6. **Masala**: Berilgan massivdagi har bir string elementni uzunligiga qarab saralash funksiyasini yozing.
// let arr = ["olma", "anor", "mandarin", "apelsin", "banan"];
// const lengthArray = function (arg) {
//   return arg.sort((a, b) => {
//     return a.length - b.length;
//   });
// };
// console.log(lengthArray(arr));

//7. **Masala**: Stringdagi barcha unli harflarni olib tashlaydigan funksiya yozing.
// let str = "hello world";
// const removeVowels = function (arg) {
//   return arg.replaceAll(/[aeuoiAEUOI]/g, "");
// };
// console.log(removeVowels(str));

//8. **Masala**: Berilgan massivdagi eng uzun stringni qaytaruvchi funksiya yozing.
// let arr = ["olma", "nok", "aplesin", "banan", "mandarin"];
// const longestStr = (arg) => {
//   let max = arg[0];
//   for (const element of arg) {
//     if (element.length > max.length) {
//       max = element;
//     }
//   }
//   return max;
// };
// console.log(longestStr(arr));

//9. **Masala**: Berilgan stringdagi barcha so'zlarni teskari tartibda chiqaruvchi funksiya yozing.
// let str = "salom dunyo";
// function reverseElements(arg) {
//   let res = arg.split(" ");
//   res = res.map((element) => {
//     return element.split("").reverse().join("");
//   });
//   return res.join(" ");
// }
// console.log(reverseElements(str));

//10. **Masala**: Massiv ichida berilgan string qanchalik ko'p borligini aniqlovchi funksiya yozing.
// let str = ["olma", "anor", "olma", "behi", "olma"];
// let text = "olma";
// function countString(arg, text) {
//   let count = 0;
//   for (const element of arg) {
//     if (element == text) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countString(str, text));

//Qo`shimcha masalalar

//1. **Berilgan sonni 3 ga ko'paytiradigan funksiya yozing.**
// function multiplyElement(num) {
//   return num * 3;
// }
// console.log(multiplyElement(4));

//2. **Berilgan sonning kvadratini hisoblaydigan funksiya yozing.**
// function squareElement(num) {
//   return num ** 2;
// }
// console.log(squareElement(6));

//3. **Massivning birinchi elementini qaytaradigan funksiya yozing.**
// let arr = [4, 2, 3, 6, 89, 6];
// function firstElement(arr) {
//   return arr[0];
// }
// console.log(firstElement(arr));

//4. **Massivning oxirgi elementini qaytaradigan funksiya yozing.**
// let arr = [6, 9, 3, 4, 8, 9, 6];
// function lastElement(arr) {
//   return arr.length - 1;
// }
// console.log(lastElement(arr));

// 5. **Massivning uzunligini qaytaradigan funksiya yozing.**
// let arr = [9, 2, 3, 4, 54, "salom", 23];
// function lengthArray(arr) {
//   return arr.length;
// }
// console.log(lengthArray(arr));

// 6. **Berilgan stringni kichik harflarga aylantiradigan funksiya yozing.**
// let str = "SALOM DUNYO";
// function toLowerCaseElement(str) {
//   return str.toLowerCase();
// }
// console.log(toLowerCaseElement(str));

// 7. **Massivning har bir elementini 2 ga ko'paytiradigan funksiya yozing.**
// let arr = [1, 3, 6, 7, 8, 6];
// function multiplyTwo(arr) {
//   let res = [];
//   for (const iterator of arr) {
//     res.push(iterator * 2);
//   }
//   return res;
// }
// console.log(multiplyTwo(arr))

// 8. **Berilgan stringning uzunligini qaytaradigan funksiya yozing.**
// let str = "salom bolalar";
// function lengthString(str) {
//   return str.length;
// }
// console.log(lengthString(str));

// 9. **Massivdagi juft sonlarni filtrlab qaytaradigan funksiya yozing.**
// let arr = [5, 9, 3, 4, 6, 7, 8];
// function evenElement(arr) {
//   let res = [];
//   for (const iterator of arr) {
//     if (iterator % 2 == 0) {
//       res.push(iterator);
//     }
//   }
//   return res;
// }
// console.log(evenElement(arr));

// 10. **Berilgan stringni teskari qaytaradigan funksiya yozing.**
// let str = "hello world";
// function reverseString(str) {
//   let res = str.split(" ").reverse();
//   return res.join(" ");
// }
// console.log(reverseString(str));
