const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const changeFontSize = event => {
  mainElement.style.fontSize = event.target.value;
};
const changeSelectBgColor = event => {
  mainElement.style.backgroundColor = event.target.value;
};

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeSelectBgColor);
