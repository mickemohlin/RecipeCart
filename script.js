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
    console.log("fetching...")

    var groceries = myList.getGroceries()

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
        li.style.margin = '2px';
        li.style.display = 'inline-flex';
        li.style.flexDirection = 'row';
        li.style.alignItems = 'center';
        li.appendChild(item);
        li.appendChild(itemText);

        // Fetch list and append new li element.
        let list = document.getElementById("added-groceries");
        list.style.listStyleType = 'none';
        list.style.paddingLeft = '25%';
        list.style.display = 'flex';
        list.style.flexDirection = 'column';
        list.style.alignItems = 'flex-start';
        list.appendChild(li);
    }
}