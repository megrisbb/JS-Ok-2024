// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
const text1 = 'hello'
console.log(text1);
const text2 = 'owu';
console.log(text2);
const text3 = 'com';
console.log(text3);
const text4 = 'ua';
console.log(text4);
const number1 = 1;
console.log(number1);
const number2 = 10;
console.log(number2);
const number3 = -999;
console.log(number3);
const number4 = 123;
console.log(number4);
const number5 = 3.14;
console.log(number5);
const number6 = 2.7;
console.log(number6);
const number7 = 16;
console.log(number7);
let bool = true;
console.log(bool);
let bool1 = false;
console.log(bool1);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Bohdan';
let middleName = 'Myronovich';
let lastName = 'Baryliak'
const person = `${firstName} ${middleName} ${lastName}`
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);



// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Your first name')
let midleName = prompt('Your middle name')
let birthYear = +prompt('Your year of birth')
const person2 = `${name} ${midleName} ${birthYear}`
console.log(person2);