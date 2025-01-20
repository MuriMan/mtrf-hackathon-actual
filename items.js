// the list of items
const items = [
	new Item(0, "Scissors", 2, []),
	new Item(1, "Scissors", 3, []),
	new Item(2, "Scissors", 4, []),
];

const container = document.getElementById('container');

items.forEach(obj => {
	const item = document.createElement('div');


	//assalamualaikum abrar
	// aritra beautify this shit.
	// also put in a link to the borrowpage for each item
	item.innerHTML = `<strong>Item ID:</strong> ${obj.id} 
		<br> <strong>Item Name:</strong> ${obj.name} 
		<br> <strong>Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
		<br><br>`;

	container.appendChild(item);
});
