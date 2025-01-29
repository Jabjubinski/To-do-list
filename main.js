const taskInput = document.querySelector("#task-input");

const taskList = document.querySelector("#task-list");

const addTaskBtn = document.querySelector("#add-task-btn");

const taskArr = [];

addTaskBtn.addEventListener("click", () => {
  //task quantity
  let increment = 0;
  increment++;

  //task list element creation
  let taskElement = document.createElement("li");

  taskElement.innerHTML = `
  <div class="task-text-container">${taskInput.value}</div><div class="task-icons-container">
  <i class="fa-solid fa-x task-icon remove-btn"></i><i class="fa-solid fa-arrow-up task-icon arrow-up"></i>
  <i class="fa-solid fa-arrow-up arrow-down task-icon fa-rotate-180"></i>
  </div>`;
  //adding classes to created list item/task
  taskElement.classList.add("task-list-element");
  const removeBtn = taskElement.querySelector(".remove-btn");

  removeBtn.addEventListener("click", () => {
    taskList.remove(taskElement);                 
  });
});
