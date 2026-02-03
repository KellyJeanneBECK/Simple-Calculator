function setResult(result) {
  document.getElementById("primitive_result").innerText = `Result : ${result}`;
}

function primitiveSum() {
  let firstValue = parseFloat(document.getElementById("first_num").value);
  let secondValue = parseFloat(document.getElementById("second_num").value);
  let resultSum = firstValue + secondValue;
  setResult(resultSum);
}

function primitiveSub() {
  let firstValue = parseFloat(document.getElementById("first_num").value);
  let secondValue = parseFloat(document.getElementById("second_num").value);
  let resultSub = firstValue - secondValue;
  setResult(resultSub);
}

function primitiveMult() {
  let firstValue = parseFloat(document.getElementById("first_num").value);
  let secondValue = parseFloat(document.getElementById("second_num").value);
  let resultMult = firstValue * secondValue;
  setResult(resultMult);
}

function primitiveDivide() {
  let firstValue = parseFloat(document.getElementById("first_num").value);
  let secondValue = parseFloat(document.getElementById("second_num").value);
  let resultDivide = firstValue / secondValue;
  setResult(resultDivide);
}
