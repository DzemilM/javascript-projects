# Custom Dropdown

A custom dropdown menu built with plain HTML, CSS and JavaScript.
No frameworks, no build step - practice for DOM manipulation and event handling.

## States

| State | What it looks like |
| --- | --- |
| Default | Trigger shows the placeholder "Select an Item", chevron points down |
| Open | List visible, chevron points up |
| Selected | Trigger shows the chosen label, chevron down, list closed |
| Open + selected | List visible, chosen option shows a check mark |

## Structure

```
.
├── index.html          the trigger button + the (empty) list
├── css/
│   ├── reset.css       baseline resets
│   └── style.css       all the styling - already done
├── js/
│   ├── data.js         the ITEMS array
│   └── script.js       the dropdown logic (your job)
└── README.md
```

## How the CSS hooks work

You don't need to write any CSS. It reacts to exactly two things:

- class `is-open` on `#dropdown` -> the list shows, the chevron flips
- `aria-selected="true"` on an option -> the check mark appears

So the JS just has to add and remove those at the right times.

## Order to work through it

1. `buildOptions()` - get the five `<li>`s onto the page
2. `openDropdown()` / `closeDropdown()` / `toggleDropdown()`
3. The click listener on the trigger
4. The click listener on the list -> `selectOption()`
5. Click anywhere outside to close
6. Optional: keyboard support (arrows, Enter, Escape)

## Running it

Open `index.html` in a browser. That's it.
