class GroceryList {
    constructor() {
        this.date = Date.now();
        this.groceries = [];
        this.isDone = false;
    }

    getCreationDate() {
        // todo: format date before returning
        return this.date;
    }

    getGroceries() {
        return this.groceries;
    }

    addGrocery(grocery) {
        this.groceries.push(grocery);
    }
}
