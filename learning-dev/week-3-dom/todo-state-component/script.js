class Render {
  constructor() {
    this.index = 0;
    this.todos = [];
  }

  push({ title }) {
    if (!title?.trim()) return;
    this.todos.push({ id: this.index, title });
    ++this.index;
  }
  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.render();
  }
  update(id) {
    const val = prompt("Edit your todo........");
    const todo = this.todos.find((todo) => todo.id === id);

    if (val?.trim() && todo) {
      todo.title = val.trim();
      this.render();
    }
  }
  render() {
    const container = document.querySelector("main");
    //removing this iteration todos on the page
    const currentTodos = document.querySelectorAll('[id^="todoDiv-"]');
    currentTodos.forEach((todo) => todo.remove());

    this.todos.forEach((todo) => {
      const div = document.createElement("div");
      div.setAttribute("id", `todoDiv-${todo.id}`);

      const h4 = document.createElement("h4");
      const eBtn = document.createElement("button");
      const dBtn = document.createElement("button");

      h4.innerText = todo.title;
      h4.setAttribute("id", `todo-${todo.id}`);

      eBtn.textContent = "Edit";
      eBtn.onclick = () => editTodo(todo.id);

      dBtn.textContent = "Delete";
      dBtn.onclick = () => deleteTodo(todo.id);

      div.appendChild(h4);
      div.appendChild(eBtn);
      div.appendChild(dBtn);
      container.appendChild(div);
    });
  }
}

const app = new Render();

function addTodo() {
  const input = document.querySelector("input");
  app.push({
    title: input.value,
  });
  input.value = "";
  app.render();
}

function editTodo(id) {
  app.update(id);
}

function deleteTodo(id) {
  app.remove(id);
}
