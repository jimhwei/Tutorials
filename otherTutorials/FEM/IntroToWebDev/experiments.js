// While loop demo

const character = "a";
const timesToRepeat = 5;
let answer = '';

console.log(timesToRepeat * character)

for (let i = 0; i <= timesToRepeat; i++) {
  answer += character;
}

console.log(answer);

// Generally function names are verbs, variables are nouns
function greet(fName, lName, salutations, honorific) {
  return `${salutations}, ${honorific} ${fName} ${lName}`
}

console.log(greet("Jack", "Sparrow", "A-Hoy", "Captain"));

// Invoking a function = calling a function
const greeting = greet(fName, lName, salutations, honorific)
// You can insert variables directily as strings

// Global scope is powerful, but dangerous, because any function can possibly change it and lead to some hard to find bugs
