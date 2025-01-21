const container = document.getElementById("container");

items.forEach(obj => {
	const item = document.createElement("div");
	item.classList.add("item");

	// display description here as well aritra
	item.innerHTML = `<strong class = "item-name">${obj.name}</strong>
		<br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
		<br></br> <button onclick="borrow(${obj.id})" class = "borrow-button">Borrow</button>`;

	container.appendChild(item);
});

function showItems() {
	container.innerHTML = "";

	items.forEach(obj => {
		const item = document.createElement("div");
		item.classList.add("item");

		// display description here as well aritra
		item.innerHTML = `<strong class = "item-name">${obj.name}</strong> <br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
			<br></br> <button onclick="borrow(${obj.id})" class = "borrow-button">Borrow</button>`;

		container.appendChild(item);
	});
}

// needs significant work, will work.
function filterArray() {
	const query = document.getElementById("searchItems").value.toLowerCase();
	const results = items.filter(item => item.name.toLowerCase().includes(query));

	console.log("hi");

	displayResults(results);
}

function displayResults(results) {
	const resultsList = document.getElementById("container");

	results.forEach(obj => {
		const item = document.createElement("div");
		item.classList.add("item");

		item.innerHTML = `<strong class = "item-name">${obj.name}</strong>
			<br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
			<br></br> <button onclick="borrow(${obj.id})" class = "borrow-button">Borrow</button>`;

		resultsList.appendChild(item);
	});

	if (results.length === 0) {
		const li = document.createElement("li");
		li.innerHTML = "No results found";
		resultsList.appendChild(li);
	}
}

// TODO: borrow leads to a form which requires student enter their student id.

function borrow(id) {
	// id must equal array position
	if (id < items.length) {
		if (items[id].amount > 0) {
			items[id].borrowers++; // its an array oopsies.
			items[id].amount--;
		}

		showItems();
	}
}
