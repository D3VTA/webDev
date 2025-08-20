var names = "manu";
console.log(names);
console.log(document);

let todoLength = 4;

function deleteTodo(n) {
  document.getElementById("todo-" + n).remove();
}

function addTodo() {
  const element = document.querySelector("input");
  const inputValue = element.value;
  const newTodo = document.createElement("div");
  const n = todoLength;
  newTodo.innerHTML = `
      <h4>-> ${inputValue}</h4>
      <button class="btn btn--edit" onclick="editTodo(${n})">Edit</button>
      <button class="btn btn--delete" onclick="deleteTodo(${n})">Delete</button>
    `;
  newTodo.id = `todo-${n}`;
  newTodo.style.display = "flex";
  document.querySelector("main").appendChild(newTodo);
  element.value = "";
  ++todoLength;
}

function editTodo(n) {
  const toEdit = document.querySelectorAll("h4")[n];
  const newInput = prompt("Edit todo", toEdit.textContent);
  document.getElementById("todo-" + n);
  toEdit.innerText = `${newInput}`;
}
