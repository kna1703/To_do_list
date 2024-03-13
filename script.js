const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let del = document.createElement("span");
        del.classList.add("delete")
        del.innerHTML = "\u00d7";
        li.appendChild(del);
        let modify = document.createElement("span")
        modify.innerHTML = "\u270E";
        modify.classList.add("modify")
        li.appendChild(modify);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();


        // else if (e.target.classList.contains("modify")) {
        //     let newText = prompt("Enter new text:", e.target.parentElement.textContent.trim());
        //     if (newText !== null) {
        //         e.target.parentElement.textContent = newText;
        //         saveData();
        //     }


    } else if (e.target.classList.contains("modify")) {
        let taskText = e.target.parentElement.firstChild;
        let newText = prompt("Enter new text:", taskText.textContent.trim());
        if (newText !== null) {
            taskText.textContent = newText;
            saveData();
        }


        let modify = document.createElement("span");
        modify.innerHTML = "\u270E";
        modify.classList.add("modify");
        e.target.parentElement.appendChild(modify);

        let del = document.createElement("span");
        del.innerHTML = "\u00d7";
        e.target.parentElement.appendChild(del);

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();