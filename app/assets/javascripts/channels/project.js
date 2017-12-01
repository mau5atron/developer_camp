// all js code should be inside the turbolinks: load event listener. When the page is done loading the js will initiate.
document.addEventListener('turbolinks:load', function(){
	// setting the id targets to variables to reuse in js
	const openProjectButton = document.getElementById('new-project-button')
	const openProjectPopover = document.getElementById('new-project-popover')

	if(openProjectButton && openProjectPopover){
		// attaching event listener to openProjectButton which targets the 'new-project-button' when clicked
		openProjectButton.addEventListener('click', function(){

			// if the openProjectPopover has 'is-hidden' in its class list then
			return openProjectPopover.classList.contains('is-hidden') ? 
			// it will be removed, else it will return null
			openProjectPopover.classList.remove('is-hidden') : null
		}, false)

		// adds a new variable which targets the cancel button with the id = 'cancel-project-popover'
		const cancelProjectPopover = document.getElementById('cancel-project-popover')

		// adds an event listener to the cancel button
		cancelProjectPopover.addEventListener('click', function(){
			// adds back the 'is-hidden' class from the openProjectPopover classList
			return openProjectPopover.classList.add('is-hidden')
		}, false)
	}









// var modal = document.getElementById('new-project-popover');

// window.onclick = function(event){
// 	if (event.target == modal){
// 		modal.style.display = "none";
// 	}
// 	else{
// 		modal.style.display
// 	}
// }



})