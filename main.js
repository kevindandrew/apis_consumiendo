

/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}

*/
const todoList = document.getElementById('todo-list');

const todos=document.querySelector(".all")
const activados=document.querySelector(".activesito")
const completados=document.querySelector(".completed")

const barra=document.querySelector(".cont-inp")

  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json()) 
      .then(data => {
        console.log(data)
        todos.addEventListener("click",mostrarall)
        function mostrarall() {
          displayTodos(data);
        }
        activados.addEventListener("click",mostraractivados) 
        function mostraractivados() {
          filterCompleted(data)
        } 
        completados.addEventListener("click",mostrarcompletados)
        function mostrarcompletados() {
          filterUncompleted(data)
        }
      })
      .catch(error => console.error('Error fetching data:', error));


// Función para mostrar los todos en la página
function displayTodos(todos) {
  barra.classList.remove("hidden")
  todoList.innerHTML=""
  todos.forEach(todo => {
      
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
      const checkbox=document.createElement("input")
      checkbox.type="checkbox"

      if(todo.completed){
        checkbox.checked=true
      }
      const label = document.createElement('label');
      label.textContent = todo.title;
      todoItem.append(checkbox,label)
      todoList.appendChild(todoItem);
  });
}




// Función para añadir una nueva tarea
function addTask() {

}

// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
function completeTask() {

}

// Función para borrar una tarea
function deleteTask() {
  
}

// Funcion para borrar todas las tareas
function deleteAll() {
  
}

// Función para filtrar tareas completadas
function filterCompleted(todos) {
  barra.classList.remove("hidden")
  todoList.innerHTML=""
  todos.forEach(todo => {
     if(!todo.completed){
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
      const checkbox=document.createElement("input")
      checkbox.type="checkbox"
  
      if(todo.completed){
        checkbox.checked=true
      }
      const label = document.createElement('label');
      label.textContent = todo.title;
      todoItem.append(checkbox,label)
      todoList.appendChild(todoItem);} 
    
});
}

// Función para filtrar tareas incompletas
function filterUncompleted(todos) {


barra.classList.add("hidden")
todoList.innerHTML=""
  todos.forEach(todo => {
      if(todo.completed){const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        
        if(todo.completed){
          checkbox.checked=true
        }
        const label = document.createElement('label');
        label.textContent = todo.title;
        const i=document.createElement("i")
        i.classList.add("fa-solid")
        i.classList.add("fa-box-archive")
        todoItem.append(checkbox,label,i)
        todoList.appendChild(todoItem);}
    
});

 
}

