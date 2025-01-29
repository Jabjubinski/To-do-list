const taskInput = document.querySelector("#task-input");

const taskList = document.querySelector("#task-list");

const addTaskBtn = document.querySelector("#add-task-btn");

const taskArr = [];

function pushToArray() {
  let increment = 0;

  increment++;

  let taskListElement = document.createElement("li");

  taskListElement.classList.add(".task-list-element");

  taskListElement.innerHTML = `${increment})
  ${taskInput.value}`;

  taskArr.push(taskListElement);

  for (i = 0; i < taskArr.length; i++) {
    taskList.appendChild(taskArr[i]);
  }
}

addTaskBtn.addEventListener("click", () => {
  pushToArray();
});
