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

    // Fetch ul element and configure the visual appearance.
    let ul = document.getElementById("selected-categories");
    ul.classList.add("selected-categories-grocery-list");
    
    for(let i=0; i<grocerySupply.length; i++) {
        if(category == grocerySupply[i].getCategory()) {

            // Create li element and configure its visual appearance.
            let li = document.createElement("li");
            li.classList.add("grocery");

            // Fetch name from current grocery in the iteration and append to the li element.
            let textNode = document.createTextNode(grocerySupply[i].getName()); 

            let btn = document.createElement('button');
            btn.classList.add("grocery");

            btn.onclick = function() {
                let selectedGrocery = this.innerText;
                myList.addGrocery(new Grocery(selectedGrocery));
                updateGroceryList();
            }

            btn.appendChild(textNode);

            ul.appendChild(btn);
        }
    }
}

function resetSelectedCategory() {
    let ul = document.getElementById("selected-categories");

    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

