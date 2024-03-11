document.addEventListener("DOMContentLoaded", function() {
  // Create a task container with priority circle
  function createTask(taskName, priorityColor) {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    let circle = document.createElement("div");
    circle.classList.add("priority-circle");
    circle.style.backgroundColor = priorityColor;

    let taskNameElement = document.createElement("span");
    taskNameElement.textContent = taskName;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      taskContainer.remove(); // Remove the task when delete button is clicked
    });

    let modifyBtn = document.createElement("button");
    modifyBtn.textContent = "Modify";
    modifyBtn.classList.add("modify-btn");
    modifyBtn.addEventListener("click", function() {
      // Display a modal or a form for modifying the task
      displayModifyModal(taskContainer, taskNameElement.textContent);
    });

    taskContainer.appendChild(circle); // Append circle inside task box
    taskContainer.appendChild(taskNameElement);
    taskContainer.appendChild(modifyBtn);
    taskContainer.appendChild(deleteBtn);
    
    document.getElementById("tasks-container").appendChild(taskContainer);
  }




/* work in progress (il faut du changemnt sur cela et le style aussi dans css)*/



  // Function to display a modal or form for modifying the task
  function displayModifyModal(taskContainer, taskName) {
    // Example of using a modal:
    // You can replace this with your preferred modal implementation
    let modalContent = `
      <h2>Modify Task</h2>
      <label for="new-task-name">Task Name:</label>
      <input type="text" id="new-task-name" value="${taskName}">
      <label for="task-date">Date:</label>
      <input type="date" id="task-date">
      <label for="task-description">Description:</label>
      <textarea id="task-description"></textarea>
      <button id="save-changes-btn">Save Changes</button>
    `;

    // Create a modal container
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = modalContent;

    // Append modal to the body
    document.body.appendChild(modal);

    // Add event listener to the save changes button
    document.getElementById("save-changes-btn").addEventListener("click", function() {
      let newTaskName = document.getElementById("new-task-name").value;
      let taskDate = document.getElementById("task-date").value;
      let taskDescription = document.getElementById("task-description").value;

      // Update task name if user provides a new name
      taskName.textContent = newTaskName;

      // Close the modal
      modal.remove();
    });
  }

  // Toggle color picker based on important checkbox
  document.getElementById("important-checkbox").addEventListener("change", function() {
    let colorPicker = document.getElementById("priority-color");
    colorPicker.disabled = this.checked; // Disable color picker if checkbox is checked
    colorPicker.value = this.checked ? "#ff0000" : "#0000ff"; // Set default color to red if important
  });

  // Enable color picker by default
  document.getElementById("priority-color").disabled = false;

  // Create a task based on user input
  document.getElementById("add-task-btn").addEventListener("click", function() {
    let taskName = document.getElementById("task-name").value;
    let priorityColor = document.getElementById("priority-color").value;

    // Validate if task name is not empty
    if (taskName.trim() === "") {
      alert("Task name cannot be empty.");
      return; // Exit the function if task name is empty
    }
    
    createTask(taskName, priorityColor);
  });
});
