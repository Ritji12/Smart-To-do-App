function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const time = document.getElementById("taskTime").value;

  if (title === "") {
    alert("Please enter a task title first!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <strong>${title}</strong>
    <div><small>Due: ${time || "No deadline"}</small></div>
    <div class="task-buttons">
      <button class="complete-btn" onclick="completeTask(this)">Complete</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  document.getElementById("taskTitle").value = "";
  document.getElementById("taskTime").value = "";
  document.getElementById("taskTitle").focus(); // auto-focus next entry
}

// Mark task complete
function completeTask(button) {
  const item = button.closest(".task-item");
  item.classList.toggle("completed");
}

// Delete task
function deleteTask(button) {
  const item = button.closest(".task-item");
  item.remove();
}

// Allow pressing Enter to add task
document.getElementById("taskTitle").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});
