class ShoppingList {
    constructor() {
        this.date = Date.now();
        this.groceries = [];
        this.isDone = false;
    }

    getGroceries() {
        return this.groceries;
    }

    addGrocery(grocery) {
        this.groceries.push(grocery);
    }
}
