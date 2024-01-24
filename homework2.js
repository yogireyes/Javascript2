// Exercise #1
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [{
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt"
  }]
};

function displayFavoriteFoods(person) {
  for (let category in person) {
      console.log(`${category}: ${JSON.stringify(person[category])}`);
  }
}

// Call the function
displayFavoriteFoods(person3);

// Exercise #2
// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the person's age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one person's
// age by 3 years. Use an arrow function for both methods

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;

  // Use an arrow to create the printInfo method
  this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
  };

  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age 
  this.addAge = () => {
      this.age += 1;
  };
}

// Creating two people
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Printing their infos
person1.printInfo();
person2.printInfo();

// Incrementing age
person1.addAge();
person1.addAge();
person1.addAge();

// Printing again after incrementing age
person1.printInfo();

// Exercise #3
// Create a Promised based function that will check a string to determine if its length is greater than 10.
// If the length is greater than ten console log "Big word". 
// If the length of the string is less than 10 console log "Small Number"

function checkStringLength(string) {
  return new Promise((resolve, reject) => {
      if (string.length > 10) {
          resolve("Big word");
      } else {
          reject("Small Number");
      }
  });
}

// Testing the function
checkStringLength("Hello World")
  .then(message => console.log(message))
  .catch(error => console.log(error));

checkStringLength("Hi")
  .then(message => console.log(message))
  .catch(error => console.log(error));
