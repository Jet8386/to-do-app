function onReady() {

	let toDos = [];
	
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementId('newToDoText');

	const toDoList = document.getElementById('toDoList');


        function createNewToDo() {
		if (!newToDoText.value) {return; }

                toDos.push({
                        title:newToDoText.value,
                        complete:false
                });

		newToDoText.value = '';
		
		renderTheUI();
		
        }
	
	function renderTheUI(){
		const toDoList = document.getElementByID('toDoList');
		
		toDolist.textContent = '';
		
		toDos.forEach(function(toDo) {
			const newToDo = document.createElement('li');

			const checkbox = documnet.createElement('input');
			checkbox.type= "checkbox";

			const title = document.createElement('span');
			title.textContent = toDo.title;
			
			toDoList.appendChild (newLi);
			newLi.appendChil(checkbox);

		});
	}
	
        addToDoForm.addEventListener('submit', event => { 
                event.preventDefault(); 
                createNewToDo(); 
                newToDoText.value = '';
        }); 
	
	renderTheUI();
}

window.onload = function(){
	onReady();
};
