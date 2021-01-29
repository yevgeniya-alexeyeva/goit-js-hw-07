const inputRef = document.querySelector("#name-input");
const greetingRef = document.querySelector("#name-output");

const handleGreeting = (event) => {
  if (!inputRef.value) {
    greetingRef.textContent = "незнакомец";
    return;
  }
  greetingRef.textContent = inputRef.value;
};
inputRef.addEventListener("input", handleGreeting);
