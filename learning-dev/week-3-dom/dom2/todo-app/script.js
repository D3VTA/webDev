let globalTodoCount = 1;

function addTodo() {
  const data = document.querySelector("input").value;
  const newTodo = document.createElement("div");
  const n = globalTodoCount;
  newTodo.innerHTML = `
        <h4 id=todo-${n}>${data}</h4>
        <button onclick="editTodo(${n})">Edit</button>
        <button onclick="deleteTodo(${n})">Delete</button>
    `;
  newTodo.style = `display: flex`;
  newTodo.id = `divTodo-${n}`;

  document.querySelector("main").appendChild(newTodo);
  globalTodoCount++;
}

function deleteTodo(n) {
  document.getElementById(`divTodo-${n}`).remove();
}

function editTodo(n) {
  const newData = prompt("Edit the todo");
  document.getElementById(`todo-${n}`).innerText = newData;
}
