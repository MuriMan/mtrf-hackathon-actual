document.getElementById('borrowLink').addEventListener('click', function(event) {
	event.preventDefault(); 

	document.getElementById('message').innerHTML = 'You clicked the link!';
});
