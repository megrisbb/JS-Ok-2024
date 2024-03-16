// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = []


let newUser = [
    new User(1, 'Bodia', 'Baryliak', 'bodia@example.com', '09432322322'),
    new User(3, 'Maria', 'Garcia', 'maria@example.com', '09432322323'),
    new User(2, 'Oleh', 'Smith', 'oleh@example.com', '09432322324'),
    new User(10, 'John', 'Doe', 'john@example.com', '09432322325'),
    new User(5, 'Jane', 'Doe', 'jane@example.com', '09432322326'),
    new User(7, 'Alice', 'Johnson', 'alice@example.com', '09432322327'),
    new User(6, 'Bob', 'Johnson', 'bob@example.com', '09432322328'),
    new User(8, 'Charlie', 'Brown', 'charlie@example.com', '09432322329'),
    new User(9, 'David', 'Davis', 'david@example.com', '09432322330'),
    new User(4, 'Eva', 'Green', 'eva@example.com', '09432322331')
];
users.push(...newUser)
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let usersFilter = users.filter((user) => user.id % 2 === 0)
console.log(usersFilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = [...users].sort((a, b) => a.id - b.id)
console.log(usersSort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let newClients = []

const clients = [
    new Client(1, "Іван", "Іванов", "ivan@example.com", "+123456789", ["Замовлення 1", "Замовлення 2"]),
    new Client(2, "Петро", "Петров", "petro@example.com", "+987654321", ["Замовлення 3"]),
    new Client(3, "Марія", "Сидорова", "maria@example.com", "+111222333", ["Замовлення 4", "Замовлення 5"]),
    new Client(4, "Олексій", "Олексієнко", "oleksiy@example.com", "+444555666", ["Замовлення 6"]),
    new Client(5, "Ольга", "Ковальчук", "olga@example.com", "+777888999", ["Замовлення 7", "Замовлення 8", 'Замовлення 24']),
    new Client(6, "Андрій", "Андрієнко", "andriy@example.com", "+666777888", ["Замовлення 9"]),
    new Client(7, "Тетяна", "Тетяненко", "tetyana@example.com", "+999000111", ["Замовлення 10"]),
    new Client(8, "Віталій", "Віталієв", "vitaliy@example.com", "+222333444", ["Замовлення 11"]),
    new Client(9, "Світлана", "Світлична", "svitlana@example.com", "+555666777", ["Замовлення 12"]),
    new Client(10, "Василь", "Васильченко", "vasyl@example.com", "+888999000", ["Замовлення 13"])
];

newClients.push(...clients)
console.log(newClients)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort = clients.sort((a, b) => a.order.length - b.order.length)
console.log(clientSort)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, manufacturer, year, maxSpeed, engine) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
// }
// const cars = [
//     new Car("Model S", "Tesla", 2022, 250, "electric"),
//     new Car("Civic", "Honda", 2023, 220, "hybrid"),
//     new Car("Mustang", "Ford", 2021, 280, "petrol"),
//     new Car("911", "Porsche", 2022, 320, "petrol"),
//     new Car("Corolla", "Toyota", 2024, 200, "hybrid")
//
// ];
// function drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
//
// cars.forEach(function (car) {
//     drive.call(car)
// })
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
// //Vers 1
// // function info() {
// //     console.log(`Модель: ${this.model}, Виробник: ${this.manufacturer}, Рік випуску: ${this.year}, Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.endine}`)
// // }
// // cars.forEach(function (car) {
// //     info.call(car)
// // })
//
// // Vers 2
//
// Car.prototype.info = function () {
//         console.log(`Модель: ${this.model}, Виробник: ${this.manufacturer}, Рік випуску: ${this.year},
//         Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engine}`)
// }
//
// cars.forEach((car => car.info()))
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function(newSpeed) {
//     return this.maxSpeed += newSpeed;
// };
//
//
// cars.forEach(car => {
//     car.increaseMaxSpeed(400);
//     console.log(car.maxSpeed);
// });
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// function changeYear(newValue) {
//     return this.year = newValue
// }
//
// const carToChange = cars[0]; //
// changeYear.call(carToChange, 1996);
//
// // Виводимо всі об'єкти масиву з оновленими даними
// console.log(cars);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function addDriver(driver) {
//     return this.driver = driver
// }
//
// let newDriver = cars[0]
// addDriver.call(newDriver, 'Max')
// console.log(cars)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
}

const cars = [
    new Car("Model S", "Tesla", 2022, 250, "electric"),
    new Car("Civic", "Honda", 2023, 220, "hybrid"),
    new Car("Mustang", "Ford", 2021, 280, "petrol"),
    new Car("911", "Porsche", 2022, 320, "petrol"),
    new Car("Corolla", "Toyota", 2024, 200, "hybrid")

];

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
function drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}

cars.forEach(function (car) {
    drive.call(car)
})

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
function info() {
    console.log(`Модель: ${this.model}, Виробник: ${this.manufacturer}, Рік випуску: ${this.year},
        Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engine}`)
}

cars.forEach((car) => info.call(car))

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
function increaseMaxSpeed(newSpeed) {
    return this.maxSpeed += newSpeed
}
cars.forEach(function (car) {
    increaseMaxSpeed.call(car, 500)
})
console.log(cars)
// -- changeYear (newValue) - змінює рік випуску на значення newValue

function changeYear(newValue) {
    return this.year = newValue
}
let secondCar = cars[1]
changeYear.call(secondCar, 2000)
console.log(cars)
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function addDriver(driver) {
    return this.driver = driver
}

let newDriver = cars[4]
addDriver.call(newDriver, 'Ihor')
console.log(cars)

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella("Cindy", 20, 7),
    new Cinderella("Ella", 18, 6.5),
    new Cinderella("Belle", 22, 8),
    new Cinderella("Aurora", 19, 7.5),
    new Cinderella("Jasmine", 21, 6),
    new Cinderella("Snow White", 23, 7),
    new Cinderella("Rapunzel", 20, 8.5),
    new Cinderella("Ariel", 18, 6),
    new Cinderella("Tiana", 24, 7.5),
    new Cinderella("Merida", 20, 8)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let princeCharles = new Prince('Charles', 32, 8);

let foundCinderellas = []

for (const cinderella of cinderellas) {
    if (cinderella.footSize === princeCharles.shoe) {
        foundCinderellas.push(cinderella)
    }
}

if (foundCinderellas) {
    console.log("Знайдена попелюшка:", foundCinderellas);
} else {
    console.log("Попелюшка не знайдена.");
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


