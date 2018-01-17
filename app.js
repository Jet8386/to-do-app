function onReady() {

	let id = 0;


	let toDos = [];
	
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementId('newToDoText');

	const toDoList = document.getElementById('toDoList');


        function createNewToDo() {
		if (!newToDoText.value) {return; }

                toDos.push({
                        title:newToDoText.value,
                        complete:false,
			id:0
                });

		newToDoText.value = '';
		
		renderTheUI();
		id++;		
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
			newLi.appendChild(checkbox);
			
			deleteToDo.appendChild(newLi);	

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
