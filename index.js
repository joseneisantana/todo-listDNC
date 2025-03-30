let  tasks=  [
  { id: 1, description: 'Comprar pão', checked: false},
  { id: 2, description: 'Pasear com o cachorro ', checked: false},
  { id: 3, description: 'Fazer o almoço', checked: false},
]

const createTaskListItem = (task, checkbox) => {
  const list = document.getElementById('todo-list');
  const toDo = document.createElement('li');

toDo.id = task.id;
toDo.appendChild(checkbox);
list.appendChild(toDo);

return toDo

}

const result = getCheckboxInput = ({id, description, checked})=>{

const checkbox = document.createElement('input');
const label = document.createElement('label');
const  wrapper = document.createElement('div');
const checkboxId = `${id}-checkbox`;

checkbox.type = 'checkbox';
checkbox.id = checkboxId;
checkbox.checked = checked  || false;

label.textContent = description;
label.htmlFor = checkboxId;
wrapper.className= 'checkbox-label-container';

wrapper.appendChild(checkbox);
wrapper.appendChild(label);

return wrapper
}

const getNewTaskId = () => {

  const lastId = tasks[tasks.length - 1]?.id;
  return lastId ? lastId + 1 : 1
  
}

const getNewTaskData = (event)=> {
  const description = event.target.elements.description.value;
  const id = getNewTaskId();

  return {description, id}
  
};

const createTask = (event ) => {  
  event.preventDefault();
  const newTaskData = getNewTaskData(event);
  //const{ id, description,} = newTaskData;


 const checkbox = getCheckboxInput(newTaskData);
 createTaskListItem(newTaskData, checkbox, description);

 tasks =[...tasks, {id: newTaskData.id, description: newTaskData.description, checked: false}];
  
  
}


window.onload=  function(){
 
  const form =document.getElementById('create-todo-form');
  form.addEventListener('submit', createTask);



  tasks.forEach((tasks)=> {

    const checkbox = getCheckboxInput(tasks);
    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');
    //const button = document.createElement('button');


   toDo.id = tasks.id;
   toDo.appendChild(checkbox);
   //toDo.appendChild(button);


   list.appendChild(toDo)

  })
}