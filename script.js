var myList = new GroceryList();
myList.addGrocery(new Grocery("milk"));
myList.addGrocery(new Grocery("cookies"));
myList.addGrocery(new Grocery("bread"));
myList.addGrocery(new Grocery("coffee"));
fetchGroceryList();

function homeButtonClicked() {
    displaySection("home-page");
}

function recipesButtonClicked() {
    displaySection("recipe-page");
}

function shoppingListButtonClicked() {
    displaySection("grocery-page");
}

function displaySection(section) {
    switch(section) {
        case "recipe-page":
            document.getElementById("home-page").style.display = 'none';
            document.getElementById("recipe-page").style.display = 'block';
            document.getElementById("grocery-page").style.display = 'none';
            break;
        case "grocery-page":
            document.getElementById("home-page").style.display = 'none';
            document.getElementById("recipe-page").style.display = 'none';
            document.getElementById("grocery-page").style.display = 'inline-block';
            break;
        default:
            document.getElementById("home-page").style.display = 'block';
            document.getElementById("recipe-page").style.display = 'none';
            document.getElementById("grocery-page").style.display = 'none';
    }
}

function fetchGroceryList() {
    var groceries = myList.getGroceries()

    for(let i=0; i < groceries.length; i++) {

        // Fetch name of grocery in the current iteration.
        let grocery = groceries[i].getName();

        // Create text and input elements for the grocery.
        let itemText = document.createTextNode(grocery);
        let item = document.createElement('input');
        item.setAttribute("type", "checkbox");
        item.appendChild(itemText);

        // Create li element and append input text and input element.
        let li = document.createElement('li');
        li.style.margin = '0px';
        li.appendChild(item);
        li.appendChild(itemText);

        // Fetch list and append new li element.
        let list = document.getElementById("added-groceries");
        list.style.listStyleType = 'none';
        list.style.paddingLeft = '0px';
        list.appendChild(li);
    }
}