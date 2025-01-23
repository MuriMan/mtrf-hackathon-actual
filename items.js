const container = document.getElementById("container");

items.forEach(obj => {
	const item = document.createElement("div");
	item.classList.add("item");

	// display description here as well aritra
	item.innerHTML = `<strong class = "item-name">${obj.name}</strong>
		<br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
		<br></br>  <button onclick="studentBorrow(event, ${obj.id})" class = "borrow-button">Borrow</button>`;

	container.appendChild(item);
});

function showItems() {
	container.textContent = "";

	items.forEach(obj => {
		const item = document.createElement("div");
		item.classList.add("item");

		// display description here as well aritra
		item.innerHTML = `<strong class = "item-name">${obj.name}</strong> <br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} 
			<br></br><button onclick="studentBorrow(event, ${obj.id})">borrow</button>`;

		container.appendChild(item);
	});

}

// needs significant work, will work.
function filterArray() {
	const query = document.getElementById("searchItems").value.toLowerCase();
	const results = items.filter(item => item.name.toLowerCase().includes(query));

	displayResults(results);
}

function displayResults(results) {
	const resultsList = document.getElementById("container");

	item.innerHTML = ""
	results.forEach(obj => {
		const item = document.createElement("div");
		item.classList.add("item");

		item.innerHTML = `<strong class = "item-name">${obj.name}</strong>
			<br> <strong class = "item-amount">Amount Available:</strong> ${(obj.amount - obj.borrowers.length)} <br></br> <button onclick="studentBorrow(event, ${obj.id})">borrow</button>`;

		resultsList.appendChild(item);
	});

	if (results.length === 0) {
		const li = document.createElement("li");
		li.innerHTML = "No results found";
		resultsList.appendChild(li);
	}
}

function borrow(studentID, itemID) {
	// id must equal array position
	if (itemID < items.length) {
		if (items[itemID].amount > 0) {
			items[itemID].borrowers.push(studentID); // its an array oopsies.
		}
	}

	location.reload();
}
