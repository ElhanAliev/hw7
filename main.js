// // OOP --- OBJECT ORIENTED PROGRAMING 
// // ООП --- ОБЪЕКТ ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ 
 
// // У НЕГО 4 ПРИНЦИПА 
// const Person = function (firstName, birthYear) { 
//     this.firstName = firstName 
//     this.birthYear = birthYear 
// } 
// const alex = new Person('Alex', 1990) 
// const nisa = new Person('Nisa', 2007) 
// const anna = new Person('Anna', 2013) 
 
// // console.log(alex); 
// // console.log(nisa); 
// // console.log(anna instanceof Person); // true 
// // instanceof - это проверяет 
 
// Person.hello = function(){ 
//     console.log('Hello'); 
// } 
// Person.hello() // Hello 
 
// // Person.prototype.calcAge = function (){ 
// //     console.log(2023 - this.birthYear); 
// // } 
// // prototype -  это цепочка связанная друг с другам. Т.е свойства этого объекта друг от друга  
// // alex.calcAge() 
// // anna.calcAge() 
// // nisa.calcAge() 
 
// // console.log(alex.__proto__ === Person.prototype); // true 
 
// // console.log(Person.prototype.isPrototypeOf(alex));  // true  // is - вопрос  
 
// Person.prototype.species = 'Hello world' 
// console.log(alex.species);  
// // проверка 
// console.log(alex.hasOwnProperty('firstName')); // true 
// console.log(alex.hasOwnProperty('age')); // false 
// console.log(nisa.hasOwnProperty('firstName')); // true 
// console.log(anna.hasOwnProperty('age')); // false 
 
// const Car = function (make, speed){ 
//     this.make = make 
//     this.speed = speed 
// } 
 
// Car.prototype.output = function(){ 
//     console.log(`Name: ${this.make} speed: ${this.speed}`); 
// } 
// Car.prototype.speedI = function(){ 
//     this.speed -= 100 
//     console.log(` ${this.make} is going at ${this.speed} km/h`); 
     
// } 
// const mers = new Car('Mers', 140) 
// const bmw = new Car('BMW', 150) 
// const honda = new Car ('honda fit ', 123) 
 
// mers.output() 
// bmw.output() 
// honda.output() 
// mers.speedI() 
// bmw.speedI() 
// honda.speedI() 
 
// SETTERS AND GETTERS 
// const person = { 
//     firstName: "Kairylnisa", 
//     lastName: "Pamiry", 
//     get fullName(){ 
//       return this.firstName + ' ' + this.lastName 
//     } 
// } 
//  console.log(person.fullName); 
 
 
// const account = { 
//     owner: "KAIRYLNISA", 
//     herMoney: [200, 300, 500], 
//     get latest(){ 
//         return this.herMoney.slice(-1).pop() 
//     }, 
//     set latest(money){ 
//         this.herMoney.push(money) // push назад 
//     } 
// } 
 
// console.log(account.latest); // последный 500 
// account.latest = 600 
// console.log(account.herMoney); // 200, 300, 500, 600 
 
 
// class  
 
// class Person { 
//     constructor(fullName, birthYear){ 
//     this.fullName = fullName; 
//     this.birthYear = birthYear; 
// } 
// greet(){ 
//     console.log(`Hello i am ${this.fullName}. I love my best frends`); 
// } 
// calcAge(){ 
//     console.log(2023 - this.birthYear); 
// } 
// } 
// const almaz = new Person('Almazbek', 2017) 
 
// console.log(almaz); 
// almaz.greet() 
// almaz.calcAge() 
 
// // ПРИНЦИПЫ  4 
// // 1.Полиморфизм   2.Абстаркция  3.Наследование 4.Инкапсуляся 
// class Animal{ 
//     speak(){ 
//         console.log('Animal makes a sound'); 
//     } 
// } 
// class Dog extends Animal{ 
//     speak(){ 
//         console.log('gaf gaf '); //extends - наследуется от animal 
//     } 
// } 
// class Cat extends Animal{ 
//     speak(){ 
//         console.log('myay myay'); 
//     } 
// } 
///////////////////////////////////////////////////// ДОП ДЗ 
// class Telephone{ 
//     name(){ 
//         console.log("it is your phone"); 
//     } 
// } 
// class Nokia extends Telephone{ 
//     name(){ 
//         console.log("nokia"); 
//     } 
// }  
 
// class Iphone extends Telephone{ 
//     name(){ 
//         console.log("Iphone"); 
//     } 
// } 
 
// class Redme extends Telephone{ 
//     name(){ 
//         console.log("redme"); 
//     } 
// } 
//////////////////////////////////////////////////// 
// Абстаркция 
class Transport{ 
    constructor(make, model, year){ 
        this.make = make 
        this.model = model
    }
}