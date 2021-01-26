const listRef = document.querySelector("#categories");
const listItemsRef = document.querySelectorAll(".item");

const categoriesNumber = listRef.children.length;
console.log(`В списке ${categoriesNumber} категории.`);

const getCategoryDescription = (list) => {
  list.forEach((category) => {
    const title = category.firstElementChild.textContent;
    const numberOfCatItems = category.lastElementChild.children.length;
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${numberOfCatItems}`);
  });
};
getCategoryDescription(listItemsRef);
