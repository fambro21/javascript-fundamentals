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
})();
