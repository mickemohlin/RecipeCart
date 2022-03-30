var myList = new GroceryList();

function homeButtonClicked() {
    displaySection("home-page");
}

function recipesButtonClicked() {
    displaySection("recipe-page");
}

function shoppingListButtonClicked() {
    displaySection("grocery-page");
    showAllCategories();
}

function addGrocery() {
    let groceryName = document.getElementById('grocery-input');
    myList.addGrocery(new Grocery(groceryName.value));
    updateGroceryList();
    groceryName.value = '';
}

function updateGroceryList() {
    let list = document.getElementById("added-groceries");
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    fetchGroceryList();
}

// Shows the the selected page
function displaySection(section) {
    switch(section) {
        case "recipe-page":
            document.getElementById("home-page").style.display = 'none';
            document.getElementById("recipe-page").style.display = 'flex';
            document.getElementById("grocery-page").style.display = 'none';
            break;
        case "grocery-page":
            document.getElementById("home-page").style.display = 'none';
            document.getElementById("recipe-page").style.display = 'none';
            document.getElementById("grocery-page").style.display = 'flex';
            break;
        default:
            document.getElementById("home-page").style.display = 'flex';
            document.getElementById("recipe-page").style.display = 'none';
            document.getElementById("grocery-page").style.display = 'none';
    }
}

function fetchGroceryList() {
    var groceries = myList.getGroceries();

    for(let i=0; i < groceries.length; i++) {

        // Fetch name of grocery in the current iteration.
        let grocery = groceries[i].getName();

        // Create text and input elements for the grocery.
        let itemText = document.createTextNode(grocery);
        let itemLabel = document.createElement('label');
        itemLabel.appendChild(itemText);

        let item = document.createElement('input');
        item.setAttribute("type", "checkbox");
        item.appendChild(itemLabel);

        // Create li element and append input text and input element.
        let li = document.createElement('li');
        li.classList.add("added-grocery-item");
        li.appendChild(item);
        li.appendChild(itemText);

        // Fetch list and append new li element.
        let list = document.getElementById("added-groceries");
        list.classList.add("added-groceries");
        list.appendChild(li);
    }
}