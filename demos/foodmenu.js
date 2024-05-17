let menuData = {
  Appetizers: ["Jerk Wings", "Saltfish Fritters", "Conch Fritters"],
  Main: ["Jerk Chicken", "Curry Goat", "Escovitch Fish"],
  Desserts: ["Rum Cake", "Coconut Drops", "Sweet Potato Pudding"],
};

function populateCategoryDropdown() {
  let categoryMenu = document.getElementById("categoryMenu");
  for (let category in menuData) {
    let option = document.createElement("option");
    option.value = category;
    option.text = category;
    categoryMenu.appendChild(option);
  }
}

function displayOptions() {
  let selectedCategory = document.getElementById("categoryMenu").value;
  let optionDisplay = document.getElementById("optionDisplay");
  if (selectedCategory !== "") {
    let options = menuData[selectedCategory];
    options.forEach((option) => {
      let optionItem = document.createElement("p");
      optionItem.textContent = option;
      optionDisplay.appendChild(optionItem);
    });
  }
}

document
  .getElementById("categoryMenu")
  .addEventListener("change", displayOptions);

window.onload = function () {
  populateCategoryDropdown();
};
