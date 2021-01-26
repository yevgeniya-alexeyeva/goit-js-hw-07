const inputRef = document.querySelector("#validation-input");
const handleInputValidation = () => {
  const validator = inputRef.dataset.length;
  inputRef.value.length === Number(validator)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
};
inputRef.addEventListener("blur", handleInputValidation);
