function showBeverages() {
    displayCategory("Beverages", GroceryCategory.Beverages);
}

function showBreadAndBakery() {
    displayCategory("Bread/Bakery", GroceryCategory.BreadAndBakery);
}

function showCannedAndJarred() {
    displayCategory("Canned/Jarred Goods", GroceryCategory.CannedAndJarredGoods);
}

function showDairyProducts() {
    displayCategory("Dairy Products", GroceryCategory.DairyProducts);
}

function showFrozenFoods() {
    displayCategory("Frozen Foods", GroceryCategory.FrozenFoods);
}

function showMeatProducts() {
    displayCategory("Meat", GroceryCategory.Meat);
}

function showFruitsAndVeggies() {
    displayCategory("Fruits and Vegetables", GroceryCategory.FruitsAndVegetables);
}

function showCleaningProducts() {
    displayCategory("Cleaning Products", GroceryCategory.CleaningProducts);
}

function showPaperGoods() {
    displayCategory("Paper Goods", GroceryCategory.PaperGoods);
}

function showAllCategories() {
    displayCategory("All Categories", GroceryCategory.AllCategories);
}

function displayCategory(categoryName, category) {
    let title = document.getElementById("selected-category-title");
    title.innerText = categoryName;

    resetSelectedCategory();
    let ul = document.getElementById("selected-categories");
    
    for(let i=0; i<grocerySupply.length; i++) {
        if(category == grocerySupply[i].getCategory()) {
            let li = document.createElement("li");
            let text = document.createTextNode(grocerySupply[i].getName()); 
            li.appendChild(text);
            ul.appendChild(li);
        }
    }
}

function resetSelectedCategory() {
    let ul = document.getElementById("selected-categories");

    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

