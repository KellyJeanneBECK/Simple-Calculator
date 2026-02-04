// --- Primitive Calculator --
function setResult(result) {
  result = +result.toFixed(2); // will round the result at max 2 digits but will not use 'unnecessary' digit
  document.getElementById("primitive_result").innerText = `Result : ${result}`;
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
