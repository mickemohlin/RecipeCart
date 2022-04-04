class ShoppingList {
    constructor() {
        this.date = Date.now();
        this.groceries = [];
        this.isDone = false;
    }

    getGroceries() {
        return this.groceries;
    }

    addToShoppingList(addedGrocery, addedQuantity) {

        let newGrocery = {
            grocery: addedGrocery,
            quantity: addedQuantity,
        }

        this.groceries.push(newGrocery);
    }
}
