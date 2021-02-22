const ref = {
  input: document.querySelector("#div-number-creator"),
  btnCreateDivs: document.querySelector('button[data-action="render"]'),
  btnDestroyDivs: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

const randomColor = () => {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
};

let size = 30;
const addDivs = (amount) => {
  amount = ref.input.value;
  let boxes = [...new Array(+amount).keys()];
  const markup = boxes
    .map(() => {
      const box = `<div class="box" style="width:${size}px;height:${size}px;background:${randomColor()}"></div>`;
      size += 10;
      return box;
    })
    .join("");

  console.log(markup);
  ref.boxes.insertAdjacentHTML("beforeend", markup);
};

const destroyDivs = () => {
  Array.from(ref.boxes.children).forEach((element) => {
    element.remove();
  });
};

ref.btnCreateDivs.addEventListener("click", addDivs);
ref.btnDestroyDivs.addEventListener("click", destroyDivs);
