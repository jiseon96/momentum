const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function savedTodoList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleDeleteInput(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  savedTodoList();
}

function paintList(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodoObj.text;
  button.innerText = `X`;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", handleDeleteInput);
}

function handletodoFormSumbit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: todoInputValue,
  };

  todos.push(newTodoObj);
  paintList(newTodoObj);
  savedTodoList();
}

todoForm.addEventListener("submit", handletodoFormSumbit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  todos.forEach(paintList);
}
