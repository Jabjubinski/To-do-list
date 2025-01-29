const taskInput = document.querySelector("#task-input");

const taskList = document.querySelector("#task-list");

const addTaskBtn = document.querySelector("#add-task-btn");

const taskArr = [];

let increment = 0;

addTaskBtn.addEventListener("click", () => {
  createElement();
  displayArr(taskArr);
});

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    createElement();
    displayArr(taskArr);
  }
});

function createElement() {
  
  increment++;

  let taskListElement = document.createElement("li");

  taskListElement.setAttribute("task-count", increment);

  taskListElement.classList.add(".task-list-element");

  taskListElement.innerHTML = `${increment})
  <button class="remove-task-btn">Delete</button>
  ${taskInput.value}`;

  taskArr.push(taskListElement);

  const removeTaskBtn = taskListElement.querySelector(".remove-task-btn");

  function removeTask() {
    taskList.removeChild(taskListElement);

    let taskCount = taskListElement.getAttribute("task-count").value;

    // console.log(taskListElement.getAttribute("task-count"));

    taskArr.splice(taskCount, 1);
  }
  removeTaskBtn.addEventListener("click", () => {
    removeTask();
    reCount();
  });

  taskInput.value = "";
}

function displayArr(arr) {
  for (i = 0; i < taskArr.length; i++) {
    taskList.appendChild(arr[i]);
  }
}

function reCount() {
  for (i = 0; i < taskArr.length; i++) {
    taskArr[i].setAttribute("data-count", i);
  }
}
