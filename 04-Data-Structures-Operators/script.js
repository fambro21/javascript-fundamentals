(function () {
  "use strict";

  const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0,
    },
  };

  const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours,

    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({
      starterIndex = 1,
      mainIndex = 0,
      time = "20:00",
      address,
    }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
      );
    },

    orderPasta(ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2}, and ${ing3}`,
      );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  };

  // String Methods Practice
  const flights =
    "_Delayed_Departure;fao93766109;tx12133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel74399980fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

  // 🔴 Delayed Departure from FAO to TXL (11h25)
  //            Arrival from BRU to FAO (11h45)
  // 🔴 Delayed Arrival from HEL to FAO (12h05)
  //            Departure from FAO to LIS (12h30)

  const getCode = (str) => str.slice(0, 3).toUpperCase();

  for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const output = `${type.startsWith("_Delayed") ? "🛑" : ""}${type.replaceAll(
      "-",
      " ",
    )} ${getCode(from)} ${getCode(to)} (${time?.replace(":", "h")})`.padStart(
      36,
    );
  }

  // Working With Strings - Part 1
  const airline = "TAP Air Portugal";
  const plane = "A320";

  console.log(plane[0]);
  console.log(plane[1]);
  console.log(plane[2]);
  console.log("B737"[0]);

  console.log(airline.length);
  console.log("B737".length);

  console.log(airline.indexOf("r"));
  console.log(airline.lastIndexOf("r"));
  console.log(airline.indexOf("portugal"));

  console.log(airline.slice(4));
  console.log(airline.slice(4, 7));

  console.log(airline.slice(0, airline.indexOf(" ")));
  console.log(airline.lastIndexOf(" ") + 1);

  console.log(airline.slice(-2));
  console.log(airline.slice(1, -1));

  const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === "B" || s === "E") console.log("You got the middle seat 😬");
    else console.log("You got lucky 😎");
  };

  checkMiddleSeat("11B");
  checkMiddleSeat("23C");
  checkMiddleSeat("3E");

  console.log(new String("jonas"));

  console.log(typeof new String("jonas").slice(1));
})();
