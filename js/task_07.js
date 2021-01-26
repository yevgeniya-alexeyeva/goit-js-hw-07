const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const setFontSize = () => {
  textRef.style.fontSize = inputRef.value + "px";
};
inputRef.addEventListener("input", setFontSize);
