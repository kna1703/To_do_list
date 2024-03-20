const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let del = document.createElement("span");
        del.classList.add("delete");
        del.innerHTML = "\u00d7";
        li.appendChild(del);
        let modify = document.createElement("span");
        modify.innerHTML = "\u270E";
        modify.classList.add("modify");
        li.appendChild(modify);

        // Add event listener to the "modify" button
        modify.addEventListener("click", function () {
        // Add the "disable" class to the "modify" button
         modify.classList.add("disable");

    // Create input field and save button
    let taskText = e.target.parentElement.firstChild;
    let newText = taskText.textContent.trim();

    
});
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("modify")) {
        const modifyButton = e.target;
        let taskText = e.target.parentElement.firstChild;
        let newText = taskText.textContent.trim();

        // Create input field
        let inputField = document.createElement("input");
        inputField.classList.add("editInput");
        inputField.value = newText;

        // Create save button
        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        // Replace task text with input field and save button
        modifyButton.parentElement.replaceChild(inputField, taskText);
        modifyButton.parentElement.appendChild(saveButton);

        // Handle save button click
        saveButton.addEventListener("click", function () {
            let updatedText = inputField.value;
            e.target.parentElement.replaceChild(document.createTextNode(updatedText), inputField);
            e.target.parentElement.removeChild(saveButton);
         // Enable the modify button
            modifyButton.classList.remove("disable");
            modifyButton.classList.add("enabled");

            saveData();
        });
        
        // Disable the modify button
        modifyButton.classList.remove("enabled");
        modifyButton.classList.add("disable");


    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();