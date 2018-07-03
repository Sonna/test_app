console.log('task manager');

var footer = document.querySelector('footer');
var completedCount = document.querySelector('.completed-count');
var todoItems = document.querySelectorAll('li'); // find all todo items
var resetBtn = document.querySelector('button.reset');
var newTodoInput = document.querySelector('.new-todo-input');
var addTodoBtn = document.querySelector('form button');
var todoList = document.querySelector('.todo-list');

addTodoBtn.addEventListener('click', function(event) {
  event.preventDefault();

  // get value from input
  var newTodoValue = newTodoInput.value;
  if (newTodoValue === '') { return; }

  // create new `li`
  var newLi = document.createElement('li');
  // set `li` text content to value
  newLi.textContent = newTodoValue;

  // add todo-item class to newLi
  newLi.classList.add('todo-item');
  // prepare it for the real world

  // append it to `ul`
  todoList.appendChild(newLi);

  // clear text (from input field)
  // set input value to empty string
  newTodoInput.value = '';
  updateCompleteCount();
});

function updateCompleteCount() {
  completedCount.textContent = document.querySelectorAll('.completed').length;
  todoItems = document.querySelectorAll('li'); // re-evaluate

  if (Number(completedCount.textContent) === todoItems.length) {
    footer.classList.remove('hidden');
  } else {
    footer.classList.add('hidden');
  }
}

function markComplete(event) {
  if (!event.target.classList.contains('todo-item')) { return; }
  event.target.classList.toggle('completed');
  updateCompleteCount();
};

todoList.addEventListener('click', markComplete);

var resetTodos = function() {
  todoItems = document.querySelectorAll('li'); // re-evaluate
  todoItems.forEach(function(item) {
    item.classList.remove('completed');
  });
  footer.classList.add('hidden'); // hide after reset
}

resetBtn.addEventListener('click', resetTodos);

var addNewTodoItem = function(value) {
  if (value === '') { return; }
  var newTodoItem = document.createElement('li');
  newTodoItem.classList.add('todo-item');
  newTodoItem.textContent = value;
  todoList.appendChild(newTodoItem);
  updateCompleteCount();
};

newTodoInput.addEventListener('keydown', function(event) {
  if (event.code === "Enter") {
    addNewTodoItem(event.target.value);
    event.target.value = ''; // Clear Input
  }
})
