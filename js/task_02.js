const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");

const listItems = ingredients.reduce((acc, itemName) => {
  const item = document.createElement("li");
  item.textContent = itemName;
  acc.push(item);
  return acc;
}, []);

ingredientsListRef.append(...listItems);
