class GroceryUnit {
    // Weight
    static Kilogram = new GroceryUnit("kg");
    static Hectogram = new GroceryUnit("hg");
    static Gram = new GroceryUnit("g");

    //Volume
    static Liter = new GroceryUnit("l");
    static Deciliter = new GroceryUnit("dl");
    static Centiliter = new GroceryUnit("cl");
    static Milliliter = new GroceryUnit("ml");

    // Length
    static Meter = new GroceryUnit("m");
    static Decieter = new GroceryUnit("dm");
    static Centimeter = new GroceryUnit("cm");
    static Millimeter = new GroceryUnit("mm");

    // Quantity
    static Quantity = new GroceryUnit("st");

    constructor(name) {
        this.name = name;
    }
}