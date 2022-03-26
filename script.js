var myList = new GroceryList();
myList.addGrocery(new Grocery("milk"));
myList.addGrocery(new Grocery("cookies"));
myList.addGrocery(new Grocery("bread"));
myList.addGrocery(new Grocery("coffee"));

function homeButtonClicked() {
    displaySection("welcome-section");
}

function recipesButtonClicked() {
    displaySection("recipe-section");
}

function shoppingListButtonClicked() {
    displaySection("grocery-section");
    fetchGroceryList();
}

function displaySection(section) {
    switch(section) {
        case "recipe-section":
            document.getElementById("welcome-section").style.display = 'none';
            document.getElementById("recipe-section").style.display = 'block';
            document.getElementById("grocery-section").style.display = 'none';
            break;
        case "grocery-section":
            document.getElementById("welcome-section").style.display = 'none';
            document.getElementById("recipe-section").style.display = 'none';
            document.getElementById("grocery-section").style.display = 'inline-block';
            break;
        default:
            document.getElementById("welcome-section").style.display = 'block';
            document.getElementById("recipe-section").style.display = 'none';
            document.getElementById("grocery-section").style.display = 'none';
    }
}

function fetchGroceryList() {
    var groceries = myList.getGroceries()

    for(let i=0; i < groceries.length; i++) {

        // Fetch name of grocery and append to new li element.
        let grocery = groceries[i].getName();
        let li = document.createElement("li");
        li.innerText = grocery;

        // Fetch list and append new li element.
        let list = document.getElementById("added-groceries");
        list.style.listStyleType = 'none';
        list.style.textAlign = 'center';
        list.style.paddingLeft = '0px';
        list.appendChild(li);
    }
}