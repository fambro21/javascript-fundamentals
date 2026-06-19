(function () {
  // Linking a JavaScript File
  let js = "amazing";
  let value1 = 40 + 8 + 23 - 10;

  // Values and Variables
  let value2 = "Jonas";
  let value3 = 23;

  let firstName = "Matilda";

  // Variable name conventions
  let jonas_matilda = "JM";
  let $function = 27;

  let person = "jonas";
  let PI = 3.1415;

  let myFirstJob = "Coder";
  let myCurrentJob = "Teacher";

  let job1 = "programmer";
  let job2 = "teacher";

  // Data Types
  let javascriptIsFun = true;
  let _typeOfBoolean = typeof true;
  let _typeOfNumber = typeof 23;
  let _typeOfString = typeof "Jonas";

  javascriptIsFun = "YES!";

  let year;
  let _typeOfUnderfind = year;

  year = 1991;

  let _typeOfNumber3 = year;
  let _typeOfNull = typeof null;

  // let, const, and var
  let age = 30;
  age = 31;

  const birthYear = 1991;

  var job3 = "programmer";
  job3 = "teacher";

  lastName = "Schmedtman";

  // Basic Operators
  // Math Operators
  const now = 2037;
  const ageJonas = now - 1991;
  const ageSarah = now - 2018;

  const power = ageJonas * 2 * (ageJonas / 10) * 2 ** 3;
  const firstName2 = "Jonas";
  const lastName2 = "Schmedtmann";
  const fullName = firstName2 + " " + lastName2;

  // Assignment operators
  let x = 10 + 5;
  x += 10;
  x *= 4;
  x++;
  x--;

  // Comparison operators
  let comparison1 = ageJonas > ageSarah;
  let comparison2 = ageSarah >= 18;

  const isFullAge = ageSarah >= 18;
  let comparison3 = now - 1991 > now - 2018;

  // Operator Precedence
  const now2 = 2037;
  const ageJonas2 = now2 - 1991;
  const ageSarah2 = now2 - 2018;

  let comparison4 = now2 - 1991 > now2 - 2018;

  let x2, y2;
  x2 = y2 = 25 - 10 - 5;

  const averageAge = (ageJonas2 + ageSarah2) / 2;

  // Strings and Template Literals
  const firstName4 = "Jonas";
  const job4 = "teacher";
  const birthYear4 = "1991";
  const year4 = 2037;

  const jonas =
    "I'm " +
    firstName4 +
    ", a " +
    (year4 - birthYear4) +
    " year old " +
    " job4 " +
    "!";

  const jonasNew = `I'm ${firstName4}, a ${year4 - birthYear4} year old ${job4}!`;
  const templateString = `Just a regular string....`;
  const templateString2 =
    "String with \n\
    multiple \n\
    lines";

  const templateString3 = `String multiple lines`;

  // Taking Decisions: if / else statements
  const age2 = 15;

  if (age2 >= 18) {
    console.log("Sarah can start driving license 🚗");
  } else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
  }

  const birthYear2 = 2012;
  let century;
  if (birthYear2 <= 2000) {
    century = 20;
  } else {
    century = 21;
  }

  const results = century;
})();
