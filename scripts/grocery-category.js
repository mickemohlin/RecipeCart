class GroceryCategory {
    static Beverages = new GroceryCategory("Beverages");
    static BreadAndBakery = new GroceryCategory("Bread and Bakery");
    static CannedAndJarredGoods = new GroceryCategory("Canned and Jarred Goods");
    static DairyProducts = new GroceryCategory("Dariy Products");
    static FrozenFoods = new GroceryCategory("Frozen Foods");
    static Meat = new GroceryCategory("Meat");
    static FruitsAndVegetables = new GroceryCategory("Fruits and Vegetables");
    static CleaningProducts = new GroceryCategory("Cleaning Products");
    static PaperGoods = new GroceryCategory("Paper Goods");
    static AllCategories = new GroceryCategory("All Categories");

    constructor(name) {
        this.name = name;
    }
}