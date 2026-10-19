const studentName = "Rayazov Mustafa";
const studentGroup = "SE - 2529";

console.log("=== Task 0: First Script ===");
console.log("Student:", studentName);
console.log("Group:", studentGroup);

window.addEventListener("DOMContentLoaded", function () {
  alert("Hello, JavaScript World!");
});

const runAlertBtn = document.getElementById("runAlertBtn");
if (runAlertBtn) {
  runAlertBtn.addEventListener("click", function () {
    alert("Hello, JavaScript World!");
  });
}

const task0Console = document.getElementById("task0Console");
if (task0Console) {
  task0Console.textContent =
    `console.log("Student: ${studentName}");\n` +
    `console.log("Group: ${studentGroup}");\n` +
    `alert("Hello, JavaScript World!");`;
}

console.log("\n=== Task 1: Variables & Operators ===");

const courseTitle = "Front-End Web Technologies";
const assignmentNumber = 5;
const maxScore = 100;
const isSubmittedOnTime = true;

console.log("Data Types:", {
  courseTitle: typeof courseTitle,
  assignmentNumber: typeof assignmentNumber,
  isSubmittedOnTime: typeof isSubmittedOnTime
});

const numA = 24;
const numB = 6;
const addition = numA + numB;
const subtraction = numA - numB;
const multiplication = numA * numB;
const division = numA / numB;
const remainder = numA % numB;

console.log(`Addition (${numA} + ${numB}):`, addition);
console.log(`Subtraction (${numA} - ${numB}):`, subtraction);
console.log(`Multiplication (${numA} * ${numB}):`, multiplication);
console.log(`Division (${numA} / ${numB}):`, division);
console.log(`Modulus (${numA} % ${numB}):`, remainder);

const greetingMessage = "Hello! Welcome to " + courseTitle + " — Assignment #" + assignmentNumber + ".";
const statusMessage = `Student ${studentName} (${studentGroup}) | Max Score: ${maxScore}% | On Time: ${isSubmittedOnTime}`;

console.log("Concatenated String 1:", greetingMessage);
console.log("Concatenated String 2:", statusMessage);

const task1Console = document.getElementById("task1Console");
if (task1Console) {
  task1Console.textContent =
    `// Variables (string, number, boolean)\n` +
    `courseTitle = "${courseTitle}" (string)\n` +
    `assignmentNumber = ${assignmentNumber} (number)\n` +
    `isSubmittedOnTime = ${isSubmittedOnTime} (boolean)\n\n` +
    `// Arithmetic Operations (${numA} and ${numB})\n` +
    `${numA} + ${numB} = ${addition}\n` +
    `${numA} - ${numB} = ${subtraction}\n` +
    `${numA} * ${numB} = ${multiplication}\n` +
    `${numA} / ${numB} = ${division}\n` +
    `${numA} % ${numB} = ${remainder}\n\n` +
    `// String Concatenation\n` +
    `${greetingMessage}\n` +
    `${statusMessage}`;
}