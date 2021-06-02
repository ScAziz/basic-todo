const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.submit-todo');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodoItem);

function addTodoItem(event) {
  event.preventDefault();
  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodoItem = document.createElement('li');
  newTodoItem.innerText = 'pls work';
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
