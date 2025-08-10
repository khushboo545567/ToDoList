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
  todoInput.value = ""; //input clear after the submit
  console.log(tasks);
});
