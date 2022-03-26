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

        // Fetch name of grocery and append to new li element.
        let grocery = groceries[i].getName();
        let li = document.createElement("li");
        li.style.margin = '0px';
        li.innerText = grocery;

        // Fetch list and append new li element.
        let list = document.getElementById("added-groceries");
        list.style.listStyleType = 'none';
        list.style.paddingLeft = '0px';
        list.appendChild(li);
    }
}