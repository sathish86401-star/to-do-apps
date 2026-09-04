const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");
  const task = document.createElement("span");
  const deleteButton = document.createElement("button");

  task.textContent = taskText;
  task.className = "task-text";

  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";

  task.addEventListener("click", () => {
    task.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(task);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
  taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});