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
const items = [
	new Item(0, "Scissors", 2, []),
	new Item(1, "Scissors", 3, []),
	new Item(2, "Scissors", 4, []),
	new Item(3, "Glue", 5, []),
	new Item(4, "Glue", 6, []),
];
