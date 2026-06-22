(function () {
  // Scoping in Practice
  function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
      let output = `${firstName}, you are born in ${birthYear}`;

      if (birthYear >= 1981 && birthYear) {
        var millenial = true;

        // Creating NEW variable with same name as outer scope's variable
        const firstName = "Steven";

        // Reassigning outer scope's variable
        output = "NEW OUTPUT!";

        const str = `Oh, and you're a millenial, ${firstName}`;
        str;

        function add(a, b) {
          return a + b;
        }
      }
      add(2, 3);
      millenial;
    }

    printAge();
    return age;
  }

  const firstName = "Jonas";
  calcAge(1991);

  // Hosting and TDZ in Practice
  // Variables
  var me = "Jonas";
  let job = "teacher";
  const year = 1991;

  // Functions
  addDec1(2, 3);

  function addDec1(a, b) {
    return a + b;
  }

  const addExpr = function (a, b) {
    return a + b;
  };

  var addArrow = (a, b) => a + b;

  console.log(undefined);
  if (!numProducts) deleteShoppingCart();

  var numProducts = 10;

  function deleteShoppingCart() {
    console.log("All products deleted!");
  }

  var x = 1;
  let y = 2;
  const z = 3;
})();
