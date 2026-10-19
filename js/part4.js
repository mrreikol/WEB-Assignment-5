let tasks = [
  {
    id: 1,
    title: "Assignment 6",
    description: "Complete assignment on time",
    completed: false
  }
];

const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoListContainer = document.getElementById("todoListContainer");

function renderTasks() {
  todoListContainer.innerHTML = "";

  if (tasks.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.style.color = "#6b7280";
    emptyMsg.textContent = "No tasks yet. Add a new task on the right!";
    todoListContainer.appendChild(emptyMsg);
    return;
  }

  tasks.forEach(function (task) {
    const card = document.createElement("div");
    card.className = "todo-item-card" + (task.completed ? " completed" : "");

    const header = document.createElement("div");
    header.className = "todo-item-header";

    const titleEl = document.createElement("span");
    titleEl.className = "todo-item-title";
    titleEl.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const completeBtn = document.createElement("button");
    completeBtn.className = "icon-btn complete-btn";
    completeBtn.title = "Mark as completed";
    completeBtn.innerHTML = "&#10148;";
    completeBtn.addEventListener("click", function () {
      toggleTaskCompleted(task.id);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn delete-btn";
    deleteBtn.title = "Delete task";
    deleteBtn.innerHTML = "&#10007;";
    deleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(titleEl);
    header.appendChild(actions);

    const descEl = document.createElement("p");
    descEl.className = "todo-item-desc";
    descEl.textContent = task.description;

    card.appendChild(header);
    card.appendChild(descEl);

    todoListContainer.appendChild(card);
  });
}

function addTask() {
  const title = taskTitleInput.value.trim();
  const description = taskDescriptionInput.value.trim();

  if (!title) {
    taskTitleInput.focus();
    return;
  }

  const newTask = {
    id: Date.now(),
    title: title,
    description: description || "No description provided",
    completed: false
  };

  tasks.push(newTask);
  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  renderTasks();
}

function toggleTaskCompleted(taskId) {
  tasks = tasks.map(function (t) {
    if (t.id === taskId) {
      return {
        id: t.id,
        title: t.title,
        description: t.description,
        completed: !t.completed
      };
    }
    return t;
  });
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(function (t) {
    return t.id !== taskId;
  });
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

renderTasks();