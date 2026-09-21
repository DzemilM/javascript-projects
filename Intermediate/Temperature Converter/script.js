const valueInput = document.getElementById("value");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertBtn = document.getElementById("convert");
const resultEl = document.getElementById("result");
const form = document.getElementById("converter");


  function updateButton() {
     valueInput.value && fromSelect.value && toSelect.value?
     convertBtn.disabled = false : convertBtn.disabled = true;
  }

       valueInput.addEventListener("input", updateButton);
       fromSelect.addEventListener("change", updateButton);
       toSelect.addEventListener("change", updateButton);


 form.addEventListener("submit", function (event) { 
    event.preventDefault();
    const temp = Number(valueInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    // STEP 1 — get to the hub. Start by assuming it's already Celsius,
    // then override if it's actually F or K.
    let celsius;
    if (from === "celsius")         celsius = temp;
    else if (from === "fahrenheit") celsius = ((temp - 32) * 5 / 9);
    else if (from === "kelvin")     celsius = (temp - 273.15);

    // STEP 2 — leave the hub toward the target unit.
    let result;
    if (to === "celsius")         result = celsius;
    else if (to === "fahrenheit") result = (celsius * 9 / 5 + 32);
    else if (to === "kelvin")     result = (celsius + 273.15);

    resultEl.textContent = `${temp} ${from} is ${result.toFixed(2)} ${to}`;
});
