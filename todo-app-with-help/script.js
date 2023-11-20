let todos = JSON.parse(localStorage.getItem("todos")) || [
  { id: 1, description: "Default Todo", done: false },
];

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className = "todoItem";
    if (todo.done) {
      listItem.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => toggleDone(todo.id));

    const description = document.createElement("span");
    description.textContent = todo.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(description);
    todoList.appendChild(listItem);
  });

  updateLocalStorage();
}

function addTodo() {
  const newTodoInput = document.getElementById("newTodoInput");
  const description = newTodoInput.value.trim();

  if (description === "" || isDuplicate(description)) {
    return;
  }

  const newTodo = {
    id: new Date().getTime(),
    description,
    done: false,
  };

  todos.push(newTodo);
  renderTodos();
  newTodoInput.value = "";
}

function toggleDone(todoId) {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos[todoIndex].done = !todos[todoIndex].done;
  renderTodos();
}

function isDuplicate(description) {
  return todos.some(
    (todo) => todo.description.toLowerCase() === description.toLowerCase()
  );
}

function filterTodos() {
  const filter = document.querySelector('input[name="filter"]:checked').value;
  let filteredTodos;

  if (filter === "open") {
    filteredTodos = todos.filter((todo) => !todo.done);
  } else if (filter === "done") {
    filteredTodos = todos.filter((todo) => todo.done);
  } else {
    filteredTodos = todos;
  }

  renderTodos(filteredTodos);
}

function removeTodosByFilter(filter) {
  let todosToRemove;

  if (filter === "open") {
    todosToRemove = todos.filter((todo) => !todo.done);
  } else if (filter === "done") {
    todosToRemove = todos.filter((todo) => todo.done);
  } else {
    todosToRemove = todos;
  }

  todos = todos.filter((todo) => !todosToRemove.includes(todo));

  renderTodos();
}

function removeFilteredTodos() {
  const filter = document.querySelector('input[name="filter"]:checked').value;
  removeTodosByFilter(filter);
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos();
