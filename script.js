// --- Primitive Calculator --
function setResult(result) {
  result = +result.toFixed(2); // will round the result at max 2 digits but will not use 'unnecessary' digit
  document.getElementById("primitive_result").textContent =
    `Result : ${result}`;
}

function primitiveCalc(operator) {
  let firstValue = parseFloat(document.getElementById("first_num").value);
  let secondValue = parseFloat(document.getElementById("second_num").value);
  let resultValue;
  switch (operator) {
    case "plus":
      resultValue = firstValue + secondValue;
      break;
    case "minus":
      resultValue = firstValue - secondValue;
      break;
    case "multiply":
      resultValue = firstValue * secondValue;
      break;
    case "divide":
      resultValue = firstValue / secondValue;
      break;
  }
  setResult(resultValue);
}

// --- Simple Calculator ---
const calcDisplay = document.getElementById("calc_display");

function simpleCalc() {
  // replace() method to strip value of anything that isn't a digit, + - * / . or ()
  let result = calcDisplay.value.replace(/[^-()\d/*+.]/g, "");
  // eval() can be dangerous, that's why we clean the value with regex first
  calcDisplay.value = eval(result);
}

calcDisplay.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    simpleCalc();
  }
});

var addInDisplay = (btnValue) => (calcDisplay.value += btnValue);
var clearDisplay = () => (calcDisplay.value = "");
var deleteLast = () => (calcDisplay.value = calcDisplay.value.slice(0, -1));
