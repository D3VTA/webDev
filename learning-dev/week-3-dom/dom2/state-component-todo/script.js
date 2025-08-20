var names = "manu";
console.log(names);
console.log(document);

function deleteTodo(id) {
  app.remove(id);
}

class Render {
  constructor() {
    this.nextID = 1;
    this.todos = [
      {
        id: 0,
        title: "Sample Todo - Add Your todo here",
      },
    ];
  }

  push({ title }) {
    if (!title?.trim()) return;

    const todo = { id: this.nextID, title };
    this.todos.push(todo);
    this.render();

    this.nextID++;
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.render();
  }

  render() {
    const container = document.querySelector("main");
    //deleting existingTodo
    const existingTodo = document.querySelectorAll('[id^="todo-"]');
    existingTodo.forEach((el) => el.remove());

    this.todos.forEach((todo) => {
      const div = document.createElement("div");
      div.id = `todo-${todo.id}`;
      div.style.display = "flex";
      div.innerHTML = `
            <h4>-> ${todo.title}</h4>
            <button class="btn btn--edit" onclick="editTodo(${todo.id})">Edit</button>
            <button class="btn btn--delete" onclick="deleteTodo(${todo.id})">Delete</button>
          `;
      container.appendChild(div);
    });
  }
}

const app = new Render();

app.render();

function addTodo() {
  const input = document.querySelector("input");
  app.push({
    title: input.value,
  });
  input.value = "";
}

function editTodo(n) {
  const toEdit = document.querySelectorAll("h4")[n];
  const newInput = prompt("Edit todo", toEdit.textContent);
  document.getElementById("todo-" + n);
  toEdit.innerText = `${newInput}`;
}
