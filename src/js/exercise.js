import '../css/common.css';
// =================================================================================
// //1. Используя функцию if...else,
// //напишите код, который будет спрашивать:
// //"Какое официальное название JavaScript?"
// //Если пользователь вводит "ECMAScript",
// //то показать через alert: "Верно!"
// //в противном случае отобразить:"Не знаете? ECMAScript!"

// // var-1

// const message = prompt("Какое официальное название JavaScript?");
// console.log(message);

// if (message === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!!");
// }

// // Var-2

// // message === "ECMAScript" ? alert("Верно!") : alert("Не знаете? ECMAScript!!");

// =================================================================================
//3.Напишите цикл, который выводит
//  в консоль всех четных чисел от min до max
const max = 50;
const min = 23;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// =================================================================================
// //4.При помощи цикла for прибавьте все четные числа от   min до max
// const max = 50;
// const min = 0;

// let sum = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   sum += i;
// }
// console.log(` Сумма усіх парних чисел ${sum}`);

// =================================================================================
//5.Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ" то
//то prompt запрашивает пароль и если
// пароль не ввели или нажата клавиша Esc вывести строку "Отменено"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

//Если посетитель вводит не "Админ" то вывести строку "Я вас не знаю"

// const message = prompt("Введите логин?");
// console.log(message);

// if (message === "Админ") {
//   const pass = prompt("Введите пароль");
//   if (pass) {
//     if (pass === "Я главный") {
//       alert("Здравствуйте");
//     } else {
//       alert("Неверный пароль!");
//     }
//   } else {
//     alert("Отменено");
//   }
// } else {
//   alert("Я вас не знаю");
// }

// 36=================================================================================
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const playTimes = Object.values(players)
// const totalAveragePlaytimePerGame = players.reduce((acc, value) => {
//   console.log(value.playtime);
//  return acc + value.playtime / value.gamesPlayed
// }, 0);

// 47=================================================================================
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]

// const getSortedFriends = users =>
// [...users]
// .flatMap(user => user.friends)
// .filter((friend, index, array) => array.indexOf(friend) === index)
// .sort((a, b) => a.friends.localeCompare(b.friends));

// const getTotalFriendCount = users =>
// users.reduce((total, user) => total + user.friends.length, 0);

// console.log(getTotalFriendCount(users));

// 41=================================================================================
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
//   const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
//   const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
//   const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// 45=================================================================================
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line

//   const names = books
//     .filter(book => book.rating >= MIN_BOOK_RATING)
//     .sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author))
//     .map(book => book.author)

//   console.log(names);

//=================================================================================
//Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2

// const numbers = [3, 5, 6, 34, 8, 83, 12, 34];
// function each (array, callback) {
//     // const newArray = []
//     // for (let i = 0; i < array.length; i++) {
//     //     newArray.push(callback(array[i]))
//     // }
//     // // console.log(newArray);

//     return array.map(callback)
// }

// function multiply (el) {
//  return el * 2
// }

// each (numbers, multiply)
// console.log(each (numbers, multiply));

//=================================================================================
//Напиши класс User
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер

// class User {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login
//         this.#email = email
//     }
//     get getUser() {
//         return {
//             login: this.#login,
//             email: this.#email,
//         }
//     }
//     set setlogin (newLogin) {
//         this.#login =  newLogin
//     }
//     set setEmail(newEmail) {
//         this.#email = newEmail
//     }
// }

// const client = new User("asd", "фффф")
// console.log(client);
// console.log(client.getUser.login);
// client.setlogin = `oleg`
// console.log(client);

//=================================================================================
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const categories = document.querySelectorAll(`.item`)
// console.log(`Number of categories: ${categories.length}`);

//=================================================================================
// class StringBuilder {
//     constructor (initialValue) {
//       this.value = initialValue;
//     }
//     getValue() {
//       return this.value;
//     }
//     padEnd(str) {
//       this.value.push(str)
//     }
//     padStart(str) {
//       this.value.unshift(str)
//     }
//     padBoth(str) {
//       this.value.push(str) || this.value.unshift()
//     }
//   }

//=================================================================================
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

//================================================================================
// function slugify(title) {
//   slug = title.toLowerCase().split(" ").join('-');
//   console.log(slug);
//   return slug;
// }

// slugify('How to become a JUNIOR developer for TWO WEEKS')
// console.log(slug);

//=================================================================================
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   // function getAllPropValues(propName) {
//   //   const allPropValues = [];

//   //   for (const product of products) {
//   //     if (product.hasOwnProperty(propName)) {
//   //       allPropValues.push(product[propName]);
//   //     }
//   //   }
//   //   return allPropValues;
//   // }

//   function getAllPropValues(propName) {
//     // Change code below this line
//   for (let product of products) {
//     const productProps = Object.keys(product)
//     // console.log(productProps);

//     for (const prop of productProps) {
//         console.log(prop);
//           if (prop === propName) {
//         //   return Object.values(propName)
//         }
//     }
//   }

//     // Change code above this line
//   }
//   getAllPropValues("quantity")

// =================================================================================
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//      for (const potion of this.potions) {
//        if (potion.name === newPotion.name) {
//                return `Error! Potion ${newPotion.name} is already in your inventory!`;
//        }
//      }

//    this.potions.push(newPotion);
//     },
//  removePotion(potionName) {
// for (let i = 0; i < this.potions.length; i += 1) {
//   const potion = this.potions[i];
//   if (potion.name === potionName) {
//     this.potions.splice(i, 1);
//     return;
//   }
// }

//    return `Potion ${potionName} is not in inventory!`;
//     },
//   updatePotionName(oldName, newName) {
//   for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       console.log(potion);
//       if (potion.name === oldName) {
//           potion.name = newName;
//           return;

//       }

//       }
//       return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// 13b4// =================================================================================

// const changeEven = (numbers, value) => {
//   let newArray = []
//   numbers.forEach((number)=>{if (number % 2 === 0) {
//     newArray.push(number + value)
//   } else newArray.push(number)
// })
//   return newArray
// }

// changeEven([1, 2, 3, 4, 5], 10)

// =================================================================================
// =================================================================================
//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой
//

// function letMeSeeYourName(callback) {
// prompt ('Ваше імя')

// }

// function greet(name) {
//     console.log(`Привіт, ${name}`);
//  }

// =================================================================================
// 2. Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// =================================================================================
// 3.
// const product = {
//       price: 5000,
//       showPrice() {
//         console.log(this.price);
//       },
//     };

//     function callAction(action) {
//       action();
//     }

//     callAction(product.showPrice);

//     console.log(1);
