function showBeverages() {
    displayCategory("Beverages");
}

function showBreadAndBakery() {
    displayCategory("Bread/Bakery");
}

function showCannedAndJarred() {
    displayCategory("Canned/Jarred Goods");
}

function showDairyProducts() {
    displayCategory("Dairy Products");
}

function showFrozenFoods() {
    displayCategory("Frozen Foods");
}

function showMeatProducts() {
    displayCategory("Meat");
}

function showFruitsAndVeggies() {
    displayCategory("Fruits and Vegetables");
}

function showCleaningProducts() {
    displayCategory("Cleaning Products");
}

function showPaperGoods() {
    displayCategory("Paper Goods");
}

function showAllCategories() {
    displayCategory("All Categories");
}

function displayCategory(category) {
    let categoryTitle = document.getElementById("selected-category-title");
    categoryTitle.innerText = category;
}

