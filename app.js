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
			id:id
                });

		newToDoText.value = '';
		
		renderTheUI();
		id++;		
        }
	

  	function renderTheUI() {
		const toDoList = document.getElementById('toDoList');

 		toDoList.textContent = '';

     		toDos.forEach(function(toDo) {

       			const newLi = document.createElement('li');
       			newLi.textContent = toDo.title;

       			const checkbox = document.createElement('input');
       			checkbox.type = "checkbox";

       			const delete = document.createElement('button');

       			newLi.appendChild(delete);	
       			toDoList.appendChild(newLi);
       			newLi.appendChild(checkbox);
       
       			delete.addEventListener('click', event => {
				function deleteToDo(id){
				toDos = toDos.filter(item => item.id !== id);
				renderTheUI();
				}
			});
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
