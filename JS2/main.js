// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [1, 2, 3, false, true, 'Hello', 'me', 634, true, 'end'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const firstBook = {
    title: 'Не озирайся і мовчи',
    pageCount: 512,
    genre: 'Сучасна проза'
};
const secondBook = {
    title: 'Біллі Саммерс',
    pageCount: 608,
    genre: 'Детективи'
};
const thirdBook = {
    title: 'Убивчий холод',
    pageCount: 352,
    genre: 'Трилери'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

const fourthBook = {
    title: 'Не озирайся і мовчи',
    pageCount: 512,
    genre: 'Сучасна проза',
    authors: [
        {name: 'Макс Кідрук', age: 35}
    ]
};
const fifthBook = {
    title: 'Біллі Саммерс',
    pageCount: 608,
    genre: 'Детективи',
    authors: [
        {name: 'Стівен Кінг', age: 59}
    ]
};
const sixthBook = {
    title: 'Убивчий холод',
    pageCount: 352,
    genre: 'Трилери',
    authors: [
        {name: 'Тесс Ґеррітсен', age: 45}
    ]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Bodia', username: 'Mik23', password: 'qwert123'},
    {name: 'Oleh', username: 'Olehhh', password: '323dd@dds'},
    {name: 'Ihor', username: 'mikym', password: 'dsada232'},
    {name: 'Dima', username: 'dmytro234', password: 'dsdszxc332'},
    {name: 'Serhiy', username: 'sergo', password: 'jhjh434324'},
    {name: 'Andiy', username: 'Ander231d', password: 'Ddsfasd32213d'},
    {name: 'Kostia', username: 'Kosti', password: 'asdasd434'},
    {name: 'Inna', username: 'Innaaaa', password: 'dsadad1312'},
    {name: 'Anna', username: 'Annastas', password: 'dasdasd32'},
    {name: 'Nadia', username: 'Nidiyka', password: 'adsasdasd3211'}
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = 5
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 45;
if (time >= 0 && time <= 15) {
    console.log('Перша частина години');
} else if (time > 15 && time <= 30) {
    console.log('Друга частина години');
} else if (time > 30 && time <= 45) {
    console.log('Третя частина години');
} else if (time > 45 && time <= 59) {
    console.log('Четверта частина години');
} else {
    console.log('Error')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 5;
if (day > 0 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('Error')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+prompt("Weekday")) {
    case 1:
        console.log('Почати вчити програмування');
        break;
    case 2:
        console.log('Знайти курси');
        break;
    case 3:
        console.log('Вивчити HTMl');
        break;
    case 4:
        console.log('Вивчити CSS');
        break;
    case 5:
        console.log('Вивчити JavaScript');
        break;
    case 6:
        console.log('Вивчити React');
        break;
    case 7:
        console.log('Піти на роботу');
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let y = 5
let a = 10
if (y > a) {
    console.log(y);
} else if (y < a) {
    console.log(a);
} else if (y === a) {
    console.log('It"s the same numbers')
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xX = 0 || 'default';
console.log(xX)
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[0].title + ': Не супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[1].title + ': Не супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[2].title + ': Не супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[3].title + ': Не супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[4].title + ': Не супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ': Супер');
} else {
    console.log(coursesAndDurationArray[5].title + ': Не супер');
}

console.log(coursesAndDurationArray[0]);
console.log(coursesAndDurationArray[1]);
console.log(coursesAndDurationArray[2]);
console.log(coursesAndDurationArray[3]);
console.log(coursesAndDurationArray[4]);
console.log(coursesAndDurationArray[5]);