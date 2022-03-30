function showBeverages() {
    displayCategory("Drycker", GroceryCategory.Beverages);
}

function showBreadAndBakery() {
    displayCategory("Bröd & Bak", GroceryCategory.BreadAndBakery);
}

function showCannedAndJarred() {
    displayCategory("Konserver", GroceryCategory.CannedAndJarredGoods);
}

function showDairyProducts() {
    displayCategory("Mjölkprodukter", GroceryCategory.DairyProducts);
}

function showFrozenFoods() {
    displayCategory("Fruset", GroceryCategory.FrozenFoods);
}

function showMeatProducts() {
    displayCategory("Kött/Fisk/Kyckling", GroceryCategory.Meat);
}

function showFruitsAndVeggies() {
    displayCategory("Frukt & Grönt", GroceryCategory.FruitsAndVegetables);
}

function showCleaningProducts() {
    displayCategory("Städning", GroceryCategory.CleaningProducts);
}

function showPaperGoods() {
    displayCategory("Papper", GroceryCategory.PaperGoods);
}

function showAllCategories() {
    displayCategory("Alla Kategorier", GroceryCategory.AllCategories);
}

function displayCategory(categoryName, category) {
    let title = document.getElementById("selected-category-title");
    title.innerText = categoryName;

    // Fetch ul element and configure the visual appearance.
    let ul = document.getElementById("selected-categories");
    ul.classList.add("selected-categories-grocery-list");

    resetSelectedCategory(); 

    var selectedGroceries = fetchGroceriesByCategory(category);

    for(let i=0; i<selectedGroceries.length; i++) {
        // Create li element and configure its visual appearance.
        let li = document.createElement("li");
        li.classList.add("grocery");

        // Fetch name from current grocery in the iteration and append to the li element.
        let textNode = document.createTextNode(selectedGroceries[i].getName()); 

        let btn = document.createElement('button');
        btn.classList.add("grocery");
        btn.appendChild(textNode);

        btn.onclick = function() {
            let selectedGrocery = this.innerText;
            myList.addGrocery(new Grocery(selectedGrocery));
            updateGroceryList();
        } 

        ul.appendChild(btn);
    }   
}

function fetchGroceriesByCategory(category) {
    var list = [];

    for(let i=0; i<grocerySupply.length; i++) {
        if(category == grocerySupply[i].getCategory() || category==GroceryCategory.AllCategories) {
            list.push(grocerySupply[i]);
        }
    }

    let sortedList = sortGroceriesAlphabetical(list);
    return sortedList;
}

function sortGroceriesAlphabetical(list) {
    let names = []

    // Add all grocery names (as strings) to a seperate list.
    for(let i=0; i<list.length; i++){
        names.push(list[i].getName());
    }

    names.sort(); // Sort extracted names alphabetically.

    let sortedList = [];

    for(let j=0; j<names.length; j++) {
        let groceryName = names[j];

        for(l=0;l<list.length; l++) {
            grocery = list[l];

            if(grocery.getName() == groceryName) {
                sortedList.push(grocery);
            }
        }
    }

    return sortedList;
 }

function resetSelectedCategory() {
    let ul = document.getElementById("selected-categories");

    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

