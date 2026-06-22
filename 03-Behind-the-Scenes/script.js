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
})();
