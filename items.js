// the list of items
const items = [
	new Item(0, "Scissors", 2, []),
	new Item(1, "Scissors", 3, []),
	new Item(2, "Scissors", 4, []),
	new Item(3, "Glue", 5, []),
	new Item(4, "Glue", 6, []),
];

const container = document.getElementById('container');

items.forEach(obj => {
	const item = document.createElement('div');
	item.classList.add('item');


	//assalamualaikum abrar
	// aritra beautify this shit.
	// also put in a link to the borrowpage for each item
	item.innerHTML = `<strong class = "item-name">${obj.name}</strong>
		<br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
		<br></br> <a href = "./confirm_borrow.html" class = "borrow-button">Borrow</a>`;

	container.appendChild(item);
});
