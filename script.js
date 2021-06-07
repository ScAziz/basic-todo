const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.submit-todo');
const todoList = document.querySelector('.todo-list');

function checkLocalStorage() {
  let todos = null;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
}

function createTodoItem(itemText) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodoItem = document.createElement('li');
  newTodoItem.innerText = itemText;
  newTodoItem.classList.add('todo-item');
  newDiv.appendChild(newTodoItem);
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-button');
  newDiv.appendChild(completedButton);
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-button');
  newDiv.appendChild(deleteButton);
  todoList.appendChild(newDiv);
}

function addTodoItem(event) {
  event.preventDefault();
  createTodoItem(todoInput.value);
  saveLocal(todoInput.value);
  todoInput.value = '';
}

function deleteOrComplete(event) {
  const item = event.target;
  
  if (item.classList[0] === 'delete-button') {
    const todoItem = item.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }

  if (item.classList[0] === 'complete-button') {
    const todoItem = item.parentElement;
    todoItem.classList.toggle('completed');
  }
}

function saveLocal(todo) {
  const todos = checkLocalStorage();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  const todos = checkLocalStorage();
  todos.forEach((todo) => {
    createTodoItem(todo);
  });
}

function removeLocal(todo) {
  const todos = checkLocalStorage();
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

todoButton.addEventListener('click', addTodoItem);

todoList.addEventListener('click', deleteCheck);

document.addEventListener('DOMContentLoaded', getTodos);
