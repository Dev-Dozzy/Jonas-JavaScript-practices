// /class example
// /*
// class Account{
//   #accNumber;
//   #accName;
//   #balance;
//   constructor(accNumber, accName, balance){
//     this.#accNumber = accNumber;
//     this.#accName = accName;
//     this.#balance = 0;
//   }

//   deposit(amount){
//     if(amount > 20){
//       this.#balance +=amount;
//       console.log(`Deposited ${amount} into this account number ${this.#accNumber}`)
//       return amount;
//     } else {
//       console.log("Minimum deposit is #20");
//     }
//   }

//   withdraw(amount) {
//     if(amount > 0 && this.#balance >= amount) {
//       this.#balance -=amount;
//       return `You withdrew ${amount} from your ${this.#balance}`
//     } else{
//       return `Invalid amount or insufficient funds.`
//     }
//   }

//   getBalance(){
//     return `Your balance is #${this.#balance}. abeg hustle!`
//   }
// }

// const accBankAccount = new Account("0086712777", "Chukwuma Chiedozie");
// console.log(accBankAccount);
// console.log(accBankAccount.getBalance());
// */

// //loop practices
// // for (var i = 1; i <= 20; i+=2) {
// //   console.log(i);
// // }
// //for
// /*
// var john = ['John', 'Smith', 1967, 'designer', false, "blue"];
// for (var i = 0; i<john.length; i++) {
//   console.log(john[i]);
// }

// //while
// var i = 0;
// while(i <= 20) {
//   console.log(john[i]);
//   i++;
// }
// */
// //continue and breat statement
// /*
// var john = ["John", "Smith", 1967, "designer", false, "blue"];
// for (var i = 0i = ; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }
//   */
// //looping backwards exercise
// /*
// var john = ["John", "Smith", 1967, "designer", false, "blue"];
// for (var 5; i < john.length; i--) {
//   if (typeof john[i] !== "string");
//   console.log(john[i]);
// }
//   */
// //Coding Challenge

// // let john = {
// //   fullName: 'John Smith',
// //   bills: [124, 48, 268, 180, 42],
// //   calcTips: function () {
// //     this.tips = [];
// //     this.finalValues = [];

// //     for (let i = 0; i < this.bills.length; i++)
// //     {
// //       // Determine percentage based on tipping rules
// //       let percentage;
// //       let bill = this.bills[i];

// //       if (bill < 50) {
// //         percentage = .2;
// //       } else if(bill >= 50 && bill < 200) {
// //         percentage = .15;
// //       } else {
// //          percentage = .1;
// //       }
// //       // Add results to the corresponding arrays
// //       this.tips[i] = bill * percentage;
// //       this.finalValues[i] = bill + bill * percentage;
// //     }
// //   }
// // }
// // john.calcTips();
// // console.log(john);

// // let mark = {
// //   fullName: 'Mark Miller',
// //   bills:[77, 375, 110, 45],
// //   calcTips: function() {
// //     this.tips=[];
// //     this.finalValues=[];

// //     for (let i = 0; i < this.bills.length; i++) {

// //       let percentage;
// //       let bill = this.bills;

// //       if (bill < 100) {
// //         percentage = .2;
// //       } else if ( bill >= 100 && i <= 300) {
// //         percentage = .1;
// //       } else {
// //         percentage = .25;
// //       }
// //       this.tips[i] = bill * percentage;
// //       this.finalValues[i] = bill + bill * percentage;
// //     }
// //   }
// // }
// // mark.calcTips();
// // console.log(mark);

// class Teachable {
//   constructor(name, password, email) {

//     if(this.conductor === Teachable){
//       throw new Error('Abstract class cannot be instantiated');
      
//     }

//     this.name = name;
//     this.password = password;
//     this.email = email;
//   }

//   login() {
//     console.log(`Logging in ${this.name}`);
//   }

//   signup() {
//     console.log(`Signing in ${this.name}`);
//   }

//   logout() {
//     console.log(`Logging out ${this.name}`);
//   }

//   viewDashboard() {
//     console.log(`Viewing dashboard of ${this.name}`);
//   }

//   viewProfile() {
//     console.log(`Viewing profile of ${this.name}`);
//   }
// }

// class Admin extends Teachable {
//   constructor(name, password, email) {
//     super(name, password, email);
//   }
//   login() {
//     console.log(`Logging in ${this.name}`);
//   }

//   signup() {
//     console.log(`Signing in ${this.name}`);
//   }

//   logout() {
//     console.log(`Logging out ${this.name}`);
//   }

//   viewDashboard() {
//     console.log(`Viewing dashboard of ${this.name}`);
//   }

//   viewProfile() {
//     console.log(`Viewing profile of ${this.name}`);
//   }

//   manageUser(){
//     console.log(`Managing user ${this.name} as admin`)
//   }
// }

// class Instructor extends Teachable {
//   constructor(name, password, email) {
//     super(name, password, email);
//   }
//   login() {
//     console.log(`Logging in ${this.name}`);
//   }

//   signup() {
//     console.log(`Signing in ${this.name}`);
//   }

//   logout() {
//     console.log(`Logging out ${this.name}`);
//   }

//   viewDashboard() {
//     console.log(`Viewing dashboard of ${this.name}`);
//   }

//   manageCourses() {
//     console.log(`Managing courses of ${this.name} as instructor`);
//   }
// }
// const teacher =  new Teachable("John")
// console.log(Admin.login());
// 
//Function hoisting using Function declarations and expressions
calculateAge(1991);

function calculateAge(year) {
  console.log(2025 - year)
};

var retirement = function (year) {
  console.log(65 - (2025 - year))
};
retirement(1991);

//Hoisting in Variables
