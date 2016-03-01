'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);

	//$(".login-btn").click(check);
	$(".profile-btn").click(sendPress);
}

function sendPress(e){
	e.preventDefault();
 	ga("send", "event", 'profile', 'click');
}
