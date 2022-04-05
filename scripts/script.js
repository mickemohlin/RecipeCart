const MIN_INPUT_SIZE = 3;
const MAX_INPUT_SIZE = 20;
const INPUT_TO_SHORT_ERROR_MESSAGE = "Varans namn måste innehålla minst " + MIN_INPUT_SIZE + " bokstäver";
const INPUT_TO_LONG_ERROR_MESSAGE = "Varans namn kan högst innehålla " + MAX_INPUT_SIZE + " bokstäver";

var myList = new ShoppingList();

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
    let quantityInput = document.getElementById('quantity-input');
    let unitInput = document.getElementById('unit-input');

    if(checkInputConstraints(nameInput.value)){
        myList.addToShoppingList(new Grocery(nameInput.value, undefined, unitInput.value), quantityInput.value);
        updateShoppingList();
    }

    // Reset grocery input fields.
    nameInput.value = '';  
    quantityInput.value = ''
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

function updateShoppingList() {
    let list = document.getElementById("added-groceries");
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    fetchShoppingList();
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

function fetchShoppingList() {
    var groceries = myList.getGroceries();

    for(let i=0; i < groceries.length; i++) {

        
        let groceryItem = groceries[i]; // Fetch current grocery in the iteration.
        let grocery = groceryItem.grocery;
        let quantity = groceryItem.quantity;

        console.log(grocery);

        let itemLabel = document.createElement('label');
        itemLabel.innerText = grocery.name;

        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add('item-checkbox');

        let itemDiv = document.createElement('div');
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(itemLabel);

        // Create unit and quantity text node
        let unitQuantity = document.createElement('label');
        unitQuantity.innerText = "x " + quantity;
        unitQuantity.classList.add('added-grocery-unit-quantity');

        // Create li element and append input text and input element.
        let item = document.createElement('li');
        item.classList.add("added-grocery-item");
        item.appendChild(itemDiv);
        item.appendChild(unitQuantity);

        // Fetch list and append new li element.
        let list = document.getElementById("added-groceries");
        list.classList.add("added-groceries");
        list.appendChild(item);
    }
}