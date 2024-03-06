// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world'
console.log(hello.length);
let lorem = 'lorem ipsum'
console.log(lorem.length);
let js = 'javascript is cool'
console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let helloUpper = hello.toUpperCase()
console.log(helloUpper);
let loremUpper = lorem.toUpperCase()
console.log(loremUpper);
let jsUpper = js.toUpperCase()
console.log(jsUpper);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(helloUpper.toLowerCase());
console.log(loremUpper.toLowerCase());
console.log(jsUpper.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// newStr = str.replaceAll(' ', '')
// console.log(newStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let stringToArray = (arr) => {
    return arr.split(' ')
}
console.log(stringToArray(str));
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let map = nums.map(num => num.toString());
console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let numbs = [11, 21, 3];
const sortNums = (direction, nums) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a)
    } else (console.log('Для зростання цифр "ascending". Для спадання "descending"'))
};
console.log(sortNums('ascending', numbs));
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let copyOfCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => ({
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration
}))
console.log(copyOfCoursesAndDurationArray);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'red'}
]
const cardNames = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king'];
let allCards = [];

for (const card of cards) {
    for (const cardName of cardNames) {
        const allCard = {
            cardSuit: card.cardSuit,
            value: cardName,
            color: card.color
        }
        allCards.push(allCard)
    }
}
console.log(allCards)

// - знайти піковий туз
const ace = allCards.filter(value => value.cardSuit === 'spade' && value.value === 'ace')
console.log(ace);
// - всі шістки
const allSixes = allCards.filter(value => value.value === 6)
console.log(allSixes);
// - всі червоні карти
const allRedCards = allCards.filter(value => value.color === 'red')
console.log(allRedCards);
// - всі буби
const allDiamonds = allCards.filter(value => value.cardSuit === 'diamond')
console.log(allDiamonds);
// - всі трефи від 9 та більше
const allSpadesFromNine = allCards.filter(value => value.cardSuit === 'spade' && value.value >= '9')
console.log(allSpadesFromNine);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єктconst
    cardsBySuit = allCards.reduce((acumulator, value) => {
    if (value.cardSuit === 'spade') {
        acumulator.spades.push(value)
    } else if (value.cardSuit === 'diamond') {
        acumulator.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        acumulator.hearts.push(value)
    } else if (value.cardSuit === 'clubs') {
        acumulator.clubs.push(value)
    } else {
        console.log('Error')
    } return acumulator

}, {spades:[],diamonds:[],hearts:[], clubs:[]})

console.log(cardsBySuit);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker