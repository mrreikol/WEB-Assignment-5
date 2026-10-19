const paragraph = document.getElementById("changeableParagraph");
const changeTextBtn = document.getElementById("changeTextBtn");

const messages = [
  "The paragraph text has been updated using JavaScript DOM manipulation (textContent)!",
  "JavaScript makes web pages dynamic and responsive to user actions.",
  "DOM stands for Document Object Model — every HTML tag is an object!",
  "This is the original paragraph text before clicking the button."
];
let msgIndex = 0;

changeTextBtn.addEventListener("click", function () {
  paragraph.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

const styleContainer = document.getElementById("styleContainer");
const changeBgBtn = document.getElementById("changeBgBtn");
const changeFontBtn = document.getElementById("changeFontBtn");

const bgColors = ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3", "#ede9fe", "#f8fafc"];
const fontSizes = ["18px", "22px", "26px", "16px"];
let bgIndex = 0;
let fontIndex = 0;

changeBgBtn.addEventListener("click", function () {
  styleContainer.style.backgroundColor = bgColors[bgIndex];
  bgIndex = (bgIndex + 1) % bgColors.length;
});

changeFontBtn.addEventListener("click", function () {
  styleContainer.style.fontSize = fontSizes[fontIndex];
  fontIndex = (fontIndex + 1) % fontSizes.length;
});

const dynamicList = document.getElementById("dynamicList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", function () {
  const newItemNumber = dynamicList.children.length + 1;
  const li = document.createElement("li");
  li.textContent = `Item ${newItemNumber} — Newly Added Element`;
  dynamicList.appendChild(li);
});

removeItemBtn.addEventListener("click", function () {
  if (dynamicList.lastElementChild) {
    dynamicList.removeChild(dynamicList.lastElementChild);
  }
});