const inputRef = document.querySelector("#validation-input");
const handleInputValidation = () => {
  const validator = inputRef.dataset.length;
  inputRef.value.length === Number(validator)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
};
const clearClasses = () => {
  inputRef.classList.remove("valid");
  inputRef.classList.remove("invalid");
};
inputRef.addEventListener("blur", handleInputValidation);
inputRef.addEventListener("input", clearClasses);
