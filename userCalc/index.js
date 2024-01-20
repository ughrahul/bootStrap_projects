function multiply() {
  console.log("Multiply function called");
  const num1 = document.getElementById("num1Input").value;
  const num2 = document.getElementById("num2Input").value;
  document.getElementById("result").innerText =
    parseFloat(num1) * parseFloat(num2);
}

function divide() {
  console.log("Divide function called");
  const num1 = document.getElementById("num1Input").value;
  const num2 = document.getElementById("num2Input").value;
  if (parseFloat(num2) !== 0) {
    document.getElementById("result").innerText =
      parseFloat(num1) / parseFloat(num2);
  } else {
    document.getElementById("result").innerText = "Cannot divide by zero";
  }
}
