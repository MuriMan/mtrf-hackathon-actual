class Item {
	constructor (id, name, amount, borrowers, desc) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.borrowers = borrowers;
		this.desc = desc;
	}
}

// the list of items
// -------------------------
// ITEM ID = ARRAY POSITION OF ITEM.
// see items.js for usage explanation
// -------------------------
var items = [
	new Item(0, "Scissors", 2, []),
	new Item(1, "Ruler", 3, []),
	new Item(2, "Colour pens", 4, []),
	new Item(3, "Fineliner", 5, []),
	new Item(4, "Clipboard", 6, []),
	new Item(4, "Sharpener", 6, []),
	new Item(4, "Mechanical pencil", 6, []),
	new Item(4, "Notebooks", 6, []),
];

var itemsLen = 4;
