// --створити масив з:
//     - з 5 числових значень
// let nums = [1,2,3,4,5]
// for (const num of nums) {
//     console.log(num)
// }

// - з 5 стічкових значень
// let str = ['a', 'b', 'c', 'd', 'e']
// for (const string of str) {
//     console.log(string)
// }

// // - з 5 значень стрічкового, числового та булевого типу
// let diff = [1,2, 'a', true, false]
// for (const diffElement of diff) {
//     console.log(diffElement)
// }
//  та вивести його в консоль


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr = []
// emptyArr[0] = 1
// emptyArr[1] = 'a'
// emptyArr[2] = true
// for (const emptyArrElement of emptyArr) {
//     console.log(emptyArrElement)
// }


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let nums = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
// let i = 0
// while (i < nums.length) {
//     console.log(nums[i])
//     i++
// }


//     2. перебрати його циклом for
// for (let j = 0; j < nums.length; j++) {
//     const num = nums[j];
//     console.log(num)
//
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1
// while (i < nums.length) {
//     console.log(nums[i])
//     i+=2
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 1; j < nums.length; j+=2) {
//     const num = nums[j];
//     console.log(num)
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0

// while (i < nums.length) {
//     if (i % 2 === 0) {
//         console.log(nums[i])
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 3 === 0) {
//         nums[i] ='okten'
//     }
//     console.log(nums[i])
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = nums.length - 1; i >= 0; i--) {
//     const num = nums[i];
//     console.log(num);
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] % 3 === 0) {
//         nums[i] ='okten'
//     }
//     console.log(nums[i])
// }

// for (let i = nums.length -1; i>=0; i--) {
//     const num = nums[i];
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }
// let i = nums.length - 1
//
// while (i>=0) {
//     if (i % 2 === 0) {
//         console.log(nums[i])
//     }
//     i--
// }

// let i = nums.length - 1
// while (i>=0) {
//     console.log(nums[i])
//     i--
// }


//     2. перебрати його циклом for
// for (let i = nums.length -1; i>=0; i-- {
//     const num = nums[i];
//     console.log(num)
//
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let nums = [1,2,3,4,5,6,7,8,9,10]
// for (const num of nums) {
//     console.log(num)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['q', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'a', 'f']
// for (const stringItem of strings) {
//     console.log(stringItem)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, true, 5, 'dfd', false, 1, 65, 'fd', false]
// for (const arrElement of arr) {
//     console.log(arrElement)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// for (const arrElement of arr) {
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement)
//     }
//
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (const arrElement of arr) {
//     if (typeof arrElement === "number") {
//         console.log(arrElement)
//     }
//
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (const arrElement of arr) {
//     if (typeof arrElement === "string") {
//         console.log(arrElement)
//     }
//
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = []
// arr[0] = 1
// arr[1] = true
// arr[2] = 'a'
// arr[3] = 3
// arr[4] = true
// arr[5] = 43
// arr[6] = -32
// arr[7] = 'hello'
// arr[8] = false
// arr[9] = 2

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('Крок', i)
//     document.write(`<div>Крок ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('Крок', i)
//     document.write(`<div>Крок ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log('Крок', i)
//     document.write(`<div>Крок ${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('Крок', i)
//         document.write(`<div>Крок ${i}</div>`)
//     }
//
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('Крок', i)
//         document.write(`<div>Крок ${i}</div>`)
//     }
//
// }
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: 'To Kill a Mockingbird',
        pageCount: 281,
        authors: ['Harper Lee'],
        genres: ['Classic', 'Fiction', 'Adventure']
    },
    {
        title: '1984',
        pageCount: 328,
        authors: ['George Orwell'],
        genres: ['Dystopian', 'Fiction']
    },
    {
        title: 'Pride and Prejudice',
        pageCount: 432,
        authors: ['Jane Austen', 'Jane Austen'],
        genres: ['Classic', 'Romance', 'Adventure']
    },
    {
        title: 'The Great Gatsby',
        pageCount: 180,
        authors: ['F. Scott Fitzgerald'],
        genres: ['Classic', 'Fiction', 'Adventure', 'Adventure']
    },
    {
        title: 'To the Lighthouse',
        pageCount: 209,
        authors: ['Virginia Woolf', 'Jane Austen'],
        genres: ['Modernist', 'Fiction', 'Adventure', 'Adventure']
    },
    {
        title: 'The Catcher in the Rye',
        pageCount: 224,
        authors: ['J.D. Salinger'],
        genres: ['Coming-of-age', 'Fiction']
    },
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        pageCount: 223,
        authors: ['J.K. Rowling'],
        genres: ['Fantasy', 'Young Adult']
    },
    {
        title: 'The Hobbit',
        pageCount: 310,
        authors: ['J.R.R. Tolkien'],
        genres: ['Fantasy', 'Adventure', 'Adventure', 'Adventure']
    },
    {
        title: 'The Hunger Games',
        pageCount: 374,
        authors: ['Suzanne Collins'],
        genres: ['Dystopian']
    },
    {
        title: 'The Alchemist',
        pageCount: 197,
        authors: ['Paulo Coelho', 'Virginia Woolf', 'Jane Austen'],
        genres: ['Fiction']
    }
];

// -знайти наібльшу книжку.
// let biggestBook = books[0]
// for (let i = 1; i < books.length; i++) {
//     const book = books[i];
//     if (book.pageCount > biggestBook.pageCount) {
//         biggestBook = book
//     }
// }
//
// console.log(biggestBook)



// - знайти книжку/ки з найбільшою кількістю жанрів

// let genresCounter = 0
// let maxGenresBook = []
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.genres.length > genresCounter) {
//         genresCounter = book.genres.length
//         maxGenresBook = [book]
//     } else if (book.genres.length === genresCounter) {
//         maxGenresBook.push(book)
//     }
// }
// console.log(maxGenresBook)
// - знайти книжку/ки з найдовшою назвою

// let maxTitleBook = books[0]
// for (const book of books) {
//     if (book.title.length > maxTitleBook.title.length) {
//         maxTitleBook = book
//     }
// }
//
// console.log(maxTitleBook)



// - знайти книжку/ки які писали 2 автори
// let twoAuthors = []
//
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.authors.length === 2) {
//         twoAuthors.push(book)
//     }
// }
// console.log(twoAuthors)

// - знайти книжку/ки які писав 1 автор

// let oneAuthor = []
// for (const book of books) {
//     if (book.authors.length === 1) {
//         oneAuthor.push(book)
//     }
// }
// console.log(oneAuthor)