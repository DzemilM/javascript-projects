# Task Tracker

A task tracker built with plain HTML, CSS and JavaScript.
No frameworks, no build step. Practice for array manipulation, event handling
and re-rendering the DOM from state.

## Features

- Add a task by typing and pressing Enter (or clicking the button)
- Tick the checkbox to mark a task complete, untick it to make it pending again
- Completed tasks move to the end of the list and get a strikethrough
- Delete a task with the trash button
- Tasks are saved in `localStorage`, so they survive a page refresh

## Structure

```
.
├── index.html          the form + the (empty) task list
├── css/
│   ├── reset.css       baseline resets
│   └── style.css       all the styling
├── js/
│   └── script.js       task state, rendering, events and saving
└── README.md
```

## How it works

All tasks live in one `tasks` array. Every change (add, toggle, delete) updates
the array, then `renderTasks()` rebuilds the list from it and saves it to
`localStorage`. Pending tasks are shown first, completed ones last.

A completed task's `<li>` gets the class `is-completed`, which the CSS uses for
the grey checkbox and strikethrough.

## Running it

Open `index.html` in a browser.

## Project page

[Project page](https://roadmap.sh/projects/task-tracker-js)
