function calculate() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operator = document.getElementById('operator').value;

  let output;

  if (operator === "+") {
    output = num1 + num2;
  } else if (operator === "-") {
    output = num1 - num2;
  } else if (operator === "*") {
    output = num1 * num2;
  } else if (operator === "/") {
    output = num2 !== 0 ? num1 / num2 : "Error (cannot divide by 0)";
  } else {
    output = "Invalid operator";
  }


  document.getElementById('result').value = output;
  document.getElementById("num1").value = ""
  document.getElementById("num2").value = ""
}