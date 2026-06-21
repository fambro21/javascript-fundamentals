(function () {
  "use strict";

  // Activating Strict Mode
  let hasDriversLicense = false;
  const passTest = true;

  if (passTest) hasDriversLicense = true;
  if (hasDriversLicense) console.log("I can drive :D");

  // Functions
  function logger() {
    return "My name is Jonas";
  }

  // Calling / Running / Invoking Function
  logger();
  logger();
  logger();

  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }

  const appleJuice = fruitProcessor(5, 0);
  const appleOrangeJuice = fruitProcessor(2, 4);
  const num = Number("23");

  // Function Declaratios vs. Expressions
  // Function Declaration:
  function calcAge1(birthYear) {
    return 2037 - birthYear;
  }
  const age1 = calcAge1(1991);

  // Function expression:
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  };
  const age2 = calcAge2(1991);

  // Arrow Functions
  const calcAge3 = (birthYear) => 2037 - birthYear;
  const ag3 = calcAge3(1991);

  const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
  };

  const retirementResults1 = yearsUntilRetirement(1991, "Jonas");
  const retirementResults2 = yearsUntilRetirement(1980, "Bob");

  // Functions calling other functions
  function cutFruitPieces(fruit) {
    return fruit * 4;
  }

  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
  }

  const processor = fruitProcessor(2, 3);

  const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge1(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  };

  const retirementResults3 = yearsUntilRetirement2(1991, "Jonas");
  const retirementResults4 = yearsUntilRetirement2(1950, "Mike");
})();
