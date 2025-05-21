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
/*****
// If/Else practice
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
****/
/*
//Boolean logic
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if(age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30)
  console.log(firstName + ' is a young man.');
else {
  console.log(firstName + ' is a man.');
}
*/
/*
//Ternary Operator
var firstName = "Andrew";
var age = 21;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

//Switch statement
var job = "designer";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches children how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an Uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs beautuful websites.");
    break;
  default:
    console.log(firstName + " does something else.");
}
var firstName = "Dozzy";
var age = 22;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age <= 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
    break;
}
*/
//Truthy and Falsy values amd equality operators
//falsy values are null, undefined, 0 and NaN
//Truthy values are those that are not falsy.
//example.
/*
var height = 23;
if (height || height === 0) {
  console.log('Variable is defined.');
} else {
  console.log('variable is NOT defined.');
}

if (height === '23') {
  console.log('The == operator supports type coercion.');
} else {
  console.log('The === does NOT support type coercion.');
}
*/
/*
//Coding challange 2
var teamJohn = 89 + 120 + 124;
var teamMike = 116 + 94 + 123;
var teamMary = 97 + 134 + 105;

var averageJohn = teamJohn / 3;
console.log("The Average score for John's team is " + averageJohn);
var averageMike = teamMike / 3;
console.log("The Average score for Mike's team is " + averageMike);
var averageMary = teamMary / 3;
console.log("The Average score for Mary's team is " + averageMary);

if (averageJohn > averageMike && averageJohn > averageMary) {
  console.log(
    "Team John wins with the average score of " + averageJohn + " points"
  );
} else if (averageMary > averageJohn && averageMary > averageMike) {
  console.log(
    "Team Mary wins with the average score of " + averageMary + " points"
  );
} else if (averageMike > averageJohn && averageMike > averageMary) {
  console.log(
    "Team Mike wins with the average score of " + averageMike + " points"
  );
} else {
  console.log("There is a draw.");
}
*/

//functions
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1991);
var ageMike = calculateAge(1934);
var agePhil = calculateAge(1977);
console.log(ageJohn, ageMike, agePhil);

function yearUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearUntilRetirement(1991, "John");
yearUntilRetirement(1934, "Mike");
yearUntilRetirement(1977, "Phil");

/*****Function statements and expressions */
//Function declaration
/*function whatDoYouDo(job, firstNanme) {} ;*/
//Function Statement
/*
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "Teacher":
      return firstName + " teaches kids how to code.";

    case "Driver":
      return firstName + " drives an Uber in Lisbon.";

    case "Designer":
      return firstName + " designs beautiful websites.";

    default:
      return firstName + " does nothing currently.";
  }
};


console.log(whatDoYouDo('Teacher', 'John'));
console.log(whatDoYouDo("Driver", "Mike"));
console.log(whatDoYouDo("Designer", "Phil"));
*/
//Array
//Initialize new array
/*
var names = ["John", "Mike", "Jane"];
var year = new Array(1990, 1943, 1986);

console.log(names[0]);
console.log(names.length);

//Mutate array
names[1] = "Dozzy";
console.log(names);

//Different data types
var Chiedozie = ["Chiedozie", "Chukwuma", 1991, "Frontend developer", false];
console.log(Chiedozie);
//Applying Methods
Chiedozie.push("Blue");
Chiedozie.unshift("Mr.");
Chiedozie.pop();
console.log(Chiedozie);
*/
//Challenge 3
/*
function tipCalulate(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}
var bill = [124, 48, 268];
var tip = [tipCalulate(bill[0]),
            tipCalulate(bill[1]),
          tipCalulate(bill[2])];
var finalValues = [bill[0] + tip[0],
                  bill[1] + tip[1],
                  bill[2] + tip[2]];


console.log(tip, finalValues);
*/
//Objects and properties
//object literal
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family:['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'Teacher',
  isMarried: false
};

//new object syntax
console.log(john.firstName);
console.log(john['lastName']);
var q = 'birthYear';
console.log(john[q]);

john.job = 'Designer';
john['isMarried'] = true;

console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['birthYear'] = 1969;

console.log(jane);