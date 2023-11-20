"use strict";

const todos = document.querySelector("#btn-add");
const input = document.querySelector("#newTodo");
const toDoList = document.querySelector("#to-do-list");
let newArray = [];

if (localStorage.getItem("newArray")) {
  newArray = JSON.parse(localStorage.getItem("newArray"));
  showNewArray();
}

function buttonClick() {
  const inputtext = input.value;
  input.value = "";

  newArray.push({ checkbox: false, description: inputtext });
  showNewArray();

  localStorage.setItem("newArray", JSON.stringify(newArray));
}

todos.addEventListener("click", buttonClick);

function showNewArray() {
  toDoList.innerHTML = "";
  for (const objects of newArray) {
    const toDoElement = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const description = document.createElement("label");
    description.textContent = objects.description;

    description.appendChild(checkbox);
    toDoElement.appendChild(description);
    toDoList.appendChild(toDoElement);
  }
}

/*const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => toggleDone(todo.id));*/
/*
function toggleDone(todoId) {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos[todoIndex].done = !todos[todoIndex].done;
  renderTodos();
}*/
