let  tasks=  [
  { id: 1, description: 'Comprar pão', checked: false},
  { id: 2, description: 'Pasear com o cachorro ', checked: false},
  { id: 3, description: 'Fazer o almoço', checked: false},
]

const result = getCheckboxInput = ({id, description, checked})=>{

const checkbox = document.createElement('input');
const label = document.createElement('label');
const  wrapper = document.createElement('div');
const checkboxId = `${id}-checkbox`;

checkbox.type = 'checkbox';
checkbox.id = checkboxId;
checkbox.checked = checked

label.textContent = description;
label.htmlFor = checkboxId;
wrapper.className= 'checkbox-label-container';

wrapper.appendChild(checkbox);
wrapper.appendChild(label);

return wrapper


}

window.onload=  function(){
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