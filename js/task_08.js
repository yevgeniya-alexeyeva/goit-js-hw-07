const inputRef = document.querySelector("#div-number-creator");
const btnCreateDivsRef = document.querySelector('button[data-action="render"]');
const btnDestroyDivsRef = document.querySelector(
  'button[data-action="destroy"]'
);
const boxesRef = document.querySelector("#boxes");
const randomColor = () => {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
};
const addDivs = (amount) => {
  amount = inputRef.value;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    const size = 30 + 10 * i;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = randomColor();

    boxes.push(box);
  }

  boxesRef.append(...boxes);
};
const destroyDivs = () => {
  Array.from(boxesRef.children).forEach((element) => {
    element.remove();
  });
};

btnCreateDivsRef.addEventListener("click", addDivs);
btnDestroyDivsRef.addEventListener("click", destroyDivs);
