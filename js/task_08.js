const inputRef = document.querySelector("#div-number-creator");
const btnCreateDivsRef = document.querySelector('button[data-action="render"]');
const btnDestroyDivsRef = document.querySelector(
  'button[data-action="destroy"]'
);
const boxesRef = document.querySelector("#boxes");
const randomColor = () => {
 let col = Math.round(255.0 * Math.random());
 let r = col.toString(16);
  col = Math.round(255.0 * Math.random());
  let g = col.toString(16);
  col = Math.round(255.0 * Math.random());
  let d = col.toString(16);
  col = r + g + d;
  return col;
};
const addDivs = (amount) => {
  amount = inputRef.value;
  console.log(amount);
  const boxes = [];

  for (let i = 0; i <= amount; i += 1) {
    const box = document.createElement("div");
    console.log(box);
    box.classList.add("box");
    const size = 30 + 10 * i;
    console.log(size);
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = randomColor();

    boxes.push(box);
  }
  console.log(boxes);
  boxesRef.append(...boxes);
};

btnCreateDivsRef.addEventListener("click", addDivs);
// btnDestroyDivsRef.addEventListener('click', destroyDivs);
