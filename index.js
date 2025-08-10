const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addTask");
const addList = document.getElementById("addList");

// TASK ADDED
let tasks = [];
addBtn.addEventListener("click", () => {
  let task = todoInput.value.trim();
  if (task === "") return;
  const newtask = {
    id: Date.now(),
    tasks: task,
    completed: false,
  };
  tasks.push(newtask);
  saveTask();
  todoInput.value = ""; //input clear after the submit
  console.log(tasks);
});

// SAVE TO THE LOCAL STORAGE
function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
