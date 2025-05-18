/*
var firstName='Chiedozie';
console.log(firstName);

var lastName = 'Chukwuma';
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

/*Variable mutation */

/*Type coerction*/
/*
var firstName = 'John';
var age = 28;
console.log(firstName + " " + '28')

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

/*Variable Mutation*/
/*
age = 'twenty eight';
job = 'driver';
alert(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he married? " +
    isMarried
);
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/****Basic Operators */
/*
var now, yearDozie, yearDike;
now = 2025;
yearDozie = now - 34;
yearDike = now - 24;
console.log(yearDozie);
console.log(yearDike)

/****Math operators */
/*
console.log(now * 2);
console.log(now + 2);
console.log(now / 2);

/***Logical Operators */
/*
var ageDozie = 34;
var ageDike = 24;
var dikeOlder = ageDike < ageDozie;
console.log(dikeOlder);
*/
/*******Operator Precedence */
/*
var now = 2025;
var yearDozie = 1991;
var fullAge = 18;
var isFullAge = now - yearDozie >= fullAge;
console.log(isFullAge)
//Other Operators
var x = 20;
x *= 2;
console.log(x)
*/

// If/Else Statement
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon.');
}
  */
 var markWages, johnWages, markJobs, johnJobs;
 markWages = 2500;
 markJobs = 5;
 johnWages = 2300;
 johnJobs = 6;

var markWealth = markWages * markJobs;
var johnWealth = johnWages * johnJobs;

if (markWealth > johnWealth) {
  console.log('Mark worths more than John.');
} else {
  console.log('John worths more than Mark.');
}