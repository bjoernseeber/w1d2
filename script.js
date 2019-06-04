let age = 21;

if (age < 18) {
  console.log("You are not allowed to drink");
} else if (age < 21) {
  console.log("You can drink in Europe");
} else {
  console.log("You can drink everywhere");
}

// curly braces are optional for one line statements
if (true) console.log(true);

let char = "a";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "u" ||
  char === "o"
)
  console.log("it is a vowel");

if (0 || false) {
  console.log(false);
} else if (4 > 2 && 3 > 1) {
  console.log(true);
} else if ((true && false) || true) {
  console.log(true);
}

let lang = "french";

if (lang === "french") {
  console.log("Bonjour");
} else if (lang === "german") {
  console.log("Hallo");
} else if (lang === "spanish") {
  console.log("Hola");
} else {
  console.log("Hello");
}

switch (lang) {
  case "french":
  case "french canadian":
    console.log("Bonjour");
    break;
  case "german":
    console.log("Hallo");
    break;
  case "spanish":
    console.log("Hola");
    break;
  default:
    console.log("Hello");
}

// Loops
let i = 1;
while (i < 100) {
  console.log(i);
  // i += 1;
  i++;
}

while (i > 0) {
  console.log(i);
  i--;
}

for (let counter = 100; counter > 0; counter--) {
  console.log(i);
}

const longestWord = "anticonstitutionnellement";

// output all of the characters in a string one by one
for (let i = 0; i < longestWord.length; i++) {
  console.log(longestWord[i]);
}

// continue skips one iteration
for (let i = 10; i >= 0; i--) {
  if (i === 5) continue;
  console.log(i);
}

// break exits the loop
for (let i = 10; i >= 0; i--) {
  if (i === 5) break;
  console.log(i);
}
