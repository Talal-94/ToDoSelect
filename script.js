//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//event listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

//functions
function addTodo(event) {
    //prevent form from submitting 
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     //trash button 
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     //APPEND TO LIST
     todoList.appendChild(todoDiv);
     //CLEAR todo INPUT VALUE
     todoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target
    //delete 
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }
    // check
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

// filter

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "incomplete":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }




  