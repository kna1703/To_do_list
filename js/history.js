const historyListContainer = document.getElementById("history-list");

function showDeletedTasks() {
    let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];

    deletedTasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = `${task.text} (Deleted at: ${new Date(task.deletedAt).toLocaleString()})`;
        historyListContainer.appendChild(li);
    });
}

showDeletedTasks();