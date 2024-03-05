// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function AreaOfARectangle(a, b) {
    s = a * b
    return s
}

console.log(AreaOfARectangle(5, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radius(PI, r) {
    return PI * r ** 2;
}

console.log(radius(3.14, 5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(PI, r, h) {
    return 2 * PI * r * (h + r);
}

console.log(cylinder(3.14, 5, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function funcOfArr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

funcOfArr(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}

paragraph('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function funcOfList(list) {
    document.write(`<ul>
<li>${list}</li>
<li>${list}</li>
<li>${list}</li>
</ul>`)
}

funcOfList('Hello again')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим
// аргументом, який є числовим (тут використовувати цикл)

function funcOfList2(li, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}

funcOfList2('Hello', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function newArr(arrs) {
    document.write(`<ul>`)
    for (const arr of arrs) {
        document.write(`<li>${arr}</li>`)
    }
    document.write(`</ul>`)
}

arrList = [1, 2, 3, true, false, 'Hello']
newArr(arrList)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function funcOfPerson(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }
}

let person = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
]
funcOfPerson(person)

// - створити функцію яка повертає найменьше число з масиву
let nums = [1, 2, 3, 4, 5];

function smallestNumber(num) {
    let min = num[0];
    for (const item of num) {
        if (item < min) {
            min = item
        }
    }
    return min
}

const myArray = smallestNumber(nums)
console.log(myArray)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = [1,2,10]
function sumOfNumbers(arr) {
    let totalSum = 0
    for (const arrElement of arr) {
        totalSum += arrElement
    }
    return totalSum
}

console.log(sumOfNumbers(sum));


// два останні поки не зрозумів як зробити

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// let indexChange = [11,22,33,44,55]

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
