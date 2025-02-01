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
    new Item(0, "Watercolor Set", 10, []),
    new Item(1, "Acrylic Paint Set", 9, []),
    new Item(2, "Oil Paint Set", 10, []),
    new Item(3, "Soft Pastels", 8, []),
    new Item(4, "Alcohol Markers", 9, []),
    new Item(5, "Graphite Pencil Set", 7, []),
    new Item(6, "Charcoal Drawing Set", 7, []),
    new Item(7, "Fineliner Pen Set", 8, []),
    new Item(8, "Ink and Dip Pen Set", 9, []),
    new Item(9, "Sketchbook", 8, []),
    new Item(10, "Mixed Media Paper", 7, []),
    new Item(11, "Canvas Panels", 9, []),
    new Item(12, "Watercolor Brushes", 9, []),
    new Item(13, "Acrylic Brushes", 8, []),
    new Item(14, "Palette Knives", 7, []),
    new Item(15, "Easel", 10, []),
    new Item(16, "Blending Stumps", 6, []),
    new Item(17, "Gesso Primer", 7, []),
    new Item(18, "Fixative Spray", 8, []),
    new Item(19, "Masking Tape for Artists", 6, []),
    new Item(20, "Lightbox for Tracing", 9, []),
    new Item(21, "Digital Drawing Tablet", 10, []),
    new Item(22, "Color Mixing Palette", 7, []),
    new Item(23, "Projector", 2, []), 
];

// var items = [
// 	new Item(0, "Scissors", 2, []),
// 	new Item(1, "Ruler", 3, []),
// 	new Item(2, "Colour pens", 4, []),
// 	new Item(3, "Fineliner", 5, []),
// 	new Item(4, "Clipboard", 6, []),
// 	new Item(5, "Sharpener", 6, []),
// 	new Item(6, "Mechanical pencil", 6, []),
// 	new Item(7, "Notebooks", 6, []), ]; 

console.log(items);
