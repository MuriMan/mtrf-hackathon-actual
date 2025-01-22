// TODO: make the form and stuff, student id.
function studentBorrow(event, itemID) {
	event.preventDefault();

	// const studentID = document.getElementById("id").value;

	console.log(itemID);
	borrow("1", itemID);
}
