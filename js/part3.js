const hoverBox = document.getElementById("hoverBox");
const originalColor = "#3b82f6";
const hoverColor = "#f59e0b";

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = hoverColor;
  hoverBox.textContent = "Mouse is Over! (mouseover)";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = originalColor;
  hoverBox.textContent = "Hover Over Me!";
});

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", function (event) {
  const currentVal = event.target.value;
  liveOutput.textContent = currentVal ? currentVal : "(nothing typed yet)";
});

const calcNum1 = document.getElementById("calcNum1");
const calcNum2 = document.getElementById("calcNum2");
const calcResult = document.getElementById("calcResult");
const opButtons = document.querySelectorAll(".calc-op");

opButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const a = parseFloat(calcNum1.value);
    const b = parseFloat(calcNum2.value);
    const op = button.getAttribute("data-op");

    if (isNaN(a) || isNaN(b)) {
      calcResult.textContent = "Please enter valid numbers in both fields.";
      calcResult.style.color = "#dc2626";
      return;
    }

    let result;
    if (op === "+") {
      result = a + b;
    } else if (op === "-") {
      result = a - b;
    } else if (op === "*") {
      result = a * b;
    } else if (op === "/") {
      if (b === 0) {
        calcResult.textContent = "Error: Division by zero is not allowed.";
        calcResult.style.color = "#dc2626";
        return;
      }
      result = a / b;
    }

    calcResult.style.color = "#16a34a";
    calcResult.textContent = `${a} ${op} ${b} = ${result}`;
  });
});