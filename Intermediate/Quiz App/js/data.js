// The questions the quiz asks.
// Kept in its own file so the quiz is easy to change without touching the logic.
//
// Each question is an object:
//   id        a stable number, handy when you store results
//   question  the text shown on the card
//   answers   the choices, in the order they appear on screen
//   correct   the INDEX into `answers` of the right one (0 = first)

const QUESTIONS = [
  {
    id: 1,
    question: "Which method removes the last element of an array and returns it?",
    answers: ["shift()", "pop()", "slice()", "splice()"],
    correct: 1,
  },
  {
    id: 2,
    question: "What does `typeof null` return?",
    answers: ["\"null\"", "\"undefined\"", "\"object\"", "\"number\""],
    correct: 2,
  },
  {
    id: 3,
    question: "Which keyword declares a variable that cannot be reassigned?",
    answers: ["let", "var", "const", "static"],
    correct: 2,
  },
  {
    id: 4,
    question: "What does `[1, 2, 3].map(n => n * 2)` return?",
    answers: ["[1, 2, 3]", "[2, 4, 6]", "6", "undefined"],
    correct: 1,
  },
  {
    id: 5,
    question: "Which comparison checks value AND type, without converting?",
    answers: ["==", "===", "=", "!="],
    correct: 1,
  },
  {
    id: 6,
    question: "Which method adds an event listener to an element?",
    answers: ["element.onEvent()", "element.listen()", "element.addEventListener()", "element.attach()"],
    correct: 2,
  },
  {
    id: 7,
    question: "What does `JSON.parse()` do?",
    answers: [
      "Turns an object into a string",
      "Turns a JSON string into a value",
      "Checks whether a string is valid JSON",
      "Downloads JSON from a URL",
    ],
    correct: 1,
  },
  {
    id: 8,
    question: "Inside an arrow function, what is `this` bound to?",
    answers: [
      "The object that called the function",
      "The global object, always",
      "The surrounding scope's `this`",
      "undefined, always",
    ],
    correct: 2,
  },
];

// How long the user gets per question, in seconds.
const SECONDS_PER_QUESTION = 60;
