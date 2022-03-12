function homeButtonClicked() {
    displaySection("welcome-section");
}

function recipesButtonClicked() {
    displaySection("recipe-section");
}

function shoppingListButtonClicked() {
    displaySection("grocery-section");
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
            document.getElementById("grocery-section").style.display = 'block';
            break;
        default:
            document.getElementById("welcome-section").style.display = 'block';
            document.getElementById("recipe-section").style.display = 'none';
            document.getElementById("grocery-section").style.display = 'none';
    }
}