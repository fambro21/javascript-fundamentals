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

  // Working With Strings - Part 2
  const airline2 = "TAP Air Portugal";

  console.log(airline2.toLowerCase());
  console.log(airline2.toUpperCase());

  // Fix captialization in name
  const passenger = "jOnAS";
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);

  // Comparing emails
  const email = "hello@jonas.io";
  const loginEmail = " Hello@Jonas.Io \n";

  const lowerEmail = loginEmail.toLowerCase();
  const trimmedEmail = loginEmail.trim();
  const normalizedEmail = loginEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  console.log(email === normalizedEmail);

  // replacing
  const priceGB = "288,97£";
  const priceUS = priceGB.replace("£", "$").replace(",", ".");
  console.log(priceUS);

  const announcement =
    "All passengers come to boarding door 23. Boarding door 23!";
  console.log(announcement.replace("door", "gate"));
  console.log(announcement.replaceAll("door", "gate"));

  // Booleans
  const plane2 = "Airbus A320neo";
  console.log(plane2.includes("A320"));
  console.log(plane2.includes("Boeing"));
  console.log(plane2.startsWith("Airb"));

  if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
    console.log("Part of the NEW ARirbus family");
  }

  // Working With Strings - Part 3
  // Split and join
  console.log("a+very+nice+string".split("+"));
  console.log("Jonas Schmedtmann".split(" "));

  const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

  const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
  console.log(newName);

  const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const n of names) {
      namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(" "));
  };

  capitalizeName("jessica ann smith davis");
  capitalizeName("jonas schmedtmann");

  // Padding
  const message = "Go to gate 23!";
  console.log(message.padStart(20, "+").padEnd(30, "+"));
  console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

  const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
  };

  console.log(maskCreditCard(646378836));
  console.log(maskCreditCard(43378463864647384));
  console.log(maskCreditCard("3348594934847755774747"));

  // Repeat
  const message2 = "Bad weather... All Departures Delayed...";
  console.log(message2.repeat(5));

  const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${"🛩️".repeat(n)}`);
  };

  planesInLine(5);
  planesInLine(3);
  planesInLine(12);

  // Maps: Iteration
  const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct 🎉"],
    [false, "Try again!"],
  ]);
  console.log(question);

  // Convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);

  // Maps: Fundamentals
  const rest = new Map();
  rest.set("name", "Classico Italiano");
  rest.set(1, "Firenze, Italy");
  console.log(rest.set(2, "Listbon, Portugal"));

  rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are clsed :(");

  console.log(rest.get("name"));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 8;
  console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
  console.log(rest.has("categories"));
  rest.delete(2);
  rest.clear();

  const arr = [1, 2];
  rest.set(arr, "Test");
  console.log(rest);
  console.log(rest.size);

  console.log(rest.get(arr));

  // New Operations to make sets useful!
  const italianFoods = new Set([
    "pasta",
    "gnocchi",
    "tomatoes",
    "olive oil",
    "garlic",
    "basil",
  ]);

  const mexicianFoods = new Set([
    "tortialls",
    "beans",
    "rice",
    "tomatoes",
    "avocado",
    "garlic",
  ]);

  const commonFoods = italianFoods.intersection(mexicianFoods);
  console.log("Intersection", commonFoods);
  console.log([...commonFoods]);

  const italianMexicanFusion = italianFoods.union(mexicianFoods);
  console.log("Union", italianMexicanFusion);

  const uniqueItalianFoods = italianFoods.difference(mexicianFoods);
  console.log("Difference italian", uniqueItalianFoods);

  const uniqueItalianAndMexicanFoods =
    italianFoods.symmetricDifference(mexicianFoods);
  console.log(uniqueItalianAndMexicanFoods);

  console.log(italianFoods.isDisjointFrom(mexicianFoods));

  // Sets
  const ordersSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Pizza"]);
  console.log(ordersSet);

  console.log(new Set("Jonas"));

  console.log(ordersSet.size);
  console.log(ordersSet.has("Pizza"));
  console.log(ordersSet.has("Bread"));
  ordersSet.add("Garlic Bread");
  ordersSet.add("Garlic Bread");
  console.log(ordersSet);

  for (const order of ordersSet) console.log(order);

  // Looping Objects: Object Keys, Values and Entries

  // Property Names
  const properties = Object.keys(openingHours);
  console.log(properties);

  let openStr = `We are open on ${properties.length} days:`;
  for (const day of properties) {
    openStr += `${day}, `;
  }
  console.log(openStr);

  // Entire Object
  const entries = Object.entries(openingHours);
  console.log(entries);

  // [key, value]
  for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
  }

  // Optional chaining
  if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
  }

  // WITH optional chaining
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);

  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
  }

  // Methods
  console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
  console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

  // Arrays
  const users = [{ name: "Jonas", email: "hello@jonas.io" }];
  console.log(users[0]?.name ?? "User array empty");

  if (users.length > 0) console.log(users[0].name);
  else console.log("user array empty");

  // The for-of Loop
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  for (const item of menu) console.log(item);

  for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
  }

  console.log([...menu.entries()]);
})();
