function handleFormSubmit(event) {
    event.preventDefault();

	const itemName = document.getElementById("itemName").value;
	const itemDesc = document.getElementById("itemDesc").value;
	const itemAmt = document.getElementById("itemAmt").value;

	const checkArray = items.filter(item =>
		item.name && item.name.toLowerCase().includes(itemName.toLowerCase())
	);

	if (checkArray.length !== 0) {
		checkArray[0].amount++;
	}
}
