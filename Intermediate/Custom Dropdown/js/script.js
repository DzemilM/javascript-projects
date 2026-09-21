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
  dropdown.classList.add("is-open");
  trigger.setAttribute("aria-expanded", "true");
}

// Hide the list.
function closeDropdown() {
  dropdown.classList.remove("is-open");
  trigger.setAttribute("aria-expanded", "false");
}

// Open if closed, close if open.
function toggleDropdown() {
  if(dropdown.classList.contains("is-open")){
    closeDropdown()
  } else {
    openDropdown()
  }
}

/*
  Runs when the user clicks an option.
  `option` is the <li> element that was clicked.
*/
function selectOption(option) {
  selectedValue = option.dataset.value;
  label.textContent = option.textContent;
  label.classList.remove("is-placeholder");
  const allOptions = list.querySelectorAll(".dropdown__option");
  for(let i = 0; i < allOptions.length; i++){
    allOptions[i].removeAttribute("aria-selected")
  }
  option.setAttribute("aria-selected", "true");
  closeDropdown();
  selectedOutput.textContent = option.textContent
}

// --- Event listeners ---
trigger.addEventListener("click", toggleDropdown)

list.addEventListener("click",(event)=>{
  const option = event.target.closest(".dropdown__option");
  if (option === null) return;
  selectOption(option);
})

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    closeDropdown()
  }
});

// TODO 4 (optional, once the rest works): keyboard support
//   Escape closes it, ArrowDown/ArrowUp move a highlight using the
//   .is-active class that's already in the CSS, Enter picks the highlighted one.

// Start the page off with the options on screen.
buildOptions();
