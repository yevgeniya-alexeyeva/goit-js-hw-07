const counterValueRef = document.querySelector("#value");
const decButtonRef = document.querySelector('button[data-action="decrement"]');
const incButtonRef = document.querySelector('button[data-action="increment"]');
let counterValue = Number(counterValueRef.textContent);

const decrement = () => {
  counterValueRef.textContent = counterValue -= 1;
};
const increment = (e) => {
  counterValueRef.textContent = counterValue += 1;
};

decButtonRef.addEventListener("click", decrement);
incButtonRef.addEventListener("click", increment);
