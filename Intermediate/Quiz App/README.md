# Quiz App

A browser based multiple-choice quiz built with plain HTML, CSS and JavaScript.
No frameworks, no build step. Practice for managing a bigger pile of state:
three screens, a running score, a per-question countdown and a result list to
show at the end.

## Features

- A start screen explaining the rules, with a button to begin
- Questions are shown one card at a time, with the answers as buttons
- Picking an answer turns it green or red, and always reveals the correct one
- The score goes up by 1 for every correct answer
- A 60 second countdown per question; running out of time costs 1 point and
  moves on to the next question
- The final screen shows the score and every question with what you answered

## Structure

```
.
├── index.html          the three screens: start, question, results
├── css/
│   ├── reset.css       baseline resets
│   └── style.css       all the styling, including the answer states
├── js/
│   ├── data.js         the questions and the seconds per question
│   └── script.js       state, rendering, the timer and events
└── README.md
```

## How it works

Everything the app knows lives in one `state` object - which question we are
on, the score, whether the current question has been answered, the seconds
left, and a `results` array with one entry per finished question. Nothing else
stores anything.

Every change follows the same shape: update `state`, then call a render
function that rebuilds that part of the page from it. It is the idea behind
`useState` in React, done by hand: the state is the truth, the screen is only
a picture of it.

All three screens sit in the HTML at once. Two of them carry `is-hidden`, and
`showScreen()` moves that class around, so switching screens never rebuilds
anything.

The answer buttons get `is-correct` or `is-wrong` once the question is over,
and the CSS does the colours and the tick or cross. One click listener sits on
the answer list rather than on each button, since the buttons are rebuilt for
every question.

The countdown is a `setInterval` whose id is kept in `state.intervalId`, so it
can be stopped the moment the question ends - on an answer, on a timeout or on
a restart.

## Running it

Open `index.html` in a browser.

## Project page

[Project page](https://roadmap.sh/projects/quiz-app)
