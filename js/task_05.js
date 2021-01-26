const inputRef = document.querySelector("#name-input");
const greetingRef = document.querySelector("#name-output");

const handleGreeting = (event) => {
  event.preventDefault();
  if (!inputRef.value) {
    greetingRef.textContent = "незнакомец";
    return;
  }
  greetingRef.textContent = inputRef.value;
};
inputRef.addEventListener("input", handleGreeting);
