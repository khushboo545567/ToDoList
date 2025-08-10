document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addTask");
  const addList = document.getElementById("addList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //if there is no tasks then get the task form the localstorage we cant just use it bcz it is string we HAVE TO PARSE IT
  tasks.forEach((task) => renderTask(task));

  addBtn.addEventListener("click", () => {
    let task = todoInput.value.trim();
    if (task === "") return;

    const newtask = {
      id: Date.now(),
      tasks: task,
      completed: false,
    };

    tasks.push(newtask);
    renderTask(newtask); // render the new task that are currently added
    saveTask();

    todoInput.value = ""; //input clear after the submit
    console.log(tasks);
  });

  // SAVE TO THE LOCAL STORAGE
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // RENDER THE TASKS
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (li.completed) {
      li.className = " line-through decoration-2 decoration-red-500";
    }
    li.className =
      "flex justify-between items-center p-2 rounded-md bg-slate-700";
    li.innerHTML = `<p class="text-white"> ${task.tasks} </p>
    <button class="bg-red-500 px-2 py-1 rounded-md text-white">delete</button>
    `;
    if (task.completed) {
      li.classList.toggle("line-through");
      li.classList.toggle("decoration-2");
      li.classList.toggle("decoration-red-500");
    }
    // the task is completed or not
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("line-through");
      li.classList.toggle("decoration-2");
      li.classList.toggle("decoration-red-500");

      saveTask(); // bcz we are changing the completed property thats why
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // to prevent the toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });

    addList.appendChild(li);
  }
});
