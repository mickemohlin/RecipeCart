const MIN_INPUT_SIZE = 3;
const MAX_INPUT_SIZE = 20;
const INPUT_TO_SHORT_ERROR_MESSAGE = "Varans namn måste innehålla minst " + MIN_INPUT_SIZE + " bokstäver";
const INPUT_TO_LONG_ERROR_MESSAGE = "Varans namn kan högst innehålla " + MAX_INPUT_SIZE + " bokstäver";

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
    let nameInput = document.getElementById('grocery-input');

    if(checkInputConstraints(nameInput.value)){
        myList.addGrocery(new Grocery(nameInput.value));
        updateGroceryList();
    }

    // Reset input fields.
    nameInput.value = ''; 
}

function checkInputConstraints(input) {
    if(input.length < MIN_INPUT_SIZE) {
        displayErrorMessage(INPUT_TO_SHORT_ERROR_MESSAGE);
        return false;
    } else if (MAX_INPUT_SIZE < input.length) {
        displayErrorMessage(INPUT_TO_LONG_ERROR_MESSAGE);
        return false;
    } else {
        return true;
    }
}

function displayErrorMessage(errorMessage) {
    console.log(errorMessage);
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