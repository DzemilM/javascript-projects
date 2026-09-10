// Grab the elements we need from the page.
const dropdown = document.getElementById("dropdown");
const trigger = document.getElementById("dropdownTrigger");
const label = document.getElementById("dropdownLabel");
const list = document.getElementById("dropdownList");
const selectedOutput = document.getElementById("selectedOutput");

// Keeps track of which item is currently chosen (null = nothing yet).
let selectedValue = null;


function buildOptions() {
 
  for (const item of ITEMS) {
  const li = document.createElement("li");   // make the element
  li.className = "dropdown__option";          // CSS needs this
  li.textContent = item.label;                 // the visible text
  li.dataset.value=item.value;
  list.appendChild(li);                       // put it on the page
}

  
}

// Show the list.
function openDropdown() {
  // TODO:
  //   dropdown.classList.add("is-open")
  //   trigger.setAttribute("aria-expanded", "true")
}

// Hide the list.
function closeDropdown() {
  // TODO: the opposite of openDropdown()
}

// Open if closed, close if open.
function toggleDropdown() {
  // TODO: check dropdown.classList.contains("is-open") and branch
}

/*
  Runs when the user clicks an option.
  `option` is the <li> element that was clicked.
*/
function selectOption(option) {
  // TODO:
  //   - selectedValue = option.dataset.value
  //   - put the option's text into label.textContent
  //   - label.classList.remove("is-placeholder")  (grey placeholder styling)
  //   - clear aria-selected off every option, then set it to "true" on this one
  //     (the check mark in the CSS keys off aria-selected)
  //   - closeDropdown()
  //   - selectedOutput.textContent = option.textContent
}

// --- Event listeners ---

// TODO 1: click on `trigger` -> toggleDropdown()

// TODO 2: click on `list` -> selectOption(...)
//   Put ONE listener on the list instead of one on every <li>.
//   Inside it: const option = event.target.closest(".dropdown__option");
//   If there's no option, return early. Otherwise call selectOption(option).

// TODO 3: click on `document` -> close if the click was outside the dropdown
//   Hint: if (!dropdown.contains(event.target)) closeDropdown();

// TODO 4 (optional, once the rest works): keyboard support
//   Escape closes it, ArrowDown/ArrowUp move a highlight using the
//   .is-active class that's already in the CSS, Enter picks the highlighted one.

// Start the page off with the options on screen.
buildOptions();
