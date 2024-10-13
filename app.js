const userTasks = [
    {
        task : "HTML",
        uniqueNo : 1
    }, 
    {
        task : "CSS",
        uniqueNo : 2
    },
    {
        task : "JavaScript",
        uniqueNo : 3
    },
];

let todosCount = userTasks.length;

const addBtn = document.getElementById("addBtn");
const todoItemsContainer = document.getElementById("tasksList");

function onTodoStatusChange(checkboxId, labelId) {
    const checkboxEl = document.getElementById(checkboxId)
    const labelEl = document.getElementById(labelId);

    labelEl.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
    const todoEl = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoEl);
}

function addTodos(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    const tasksList = document.querySelector("#tasksList");

    const todoTask = document.createElement("li");
    todoTask.className = "tasks";
    todoTask.id = todoId;
    tasksList.appendChild(todoTask);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = checkboxId;
    input.addEventListener("click", () => {
        onTodoStatusChange(checkboxId, labelId);
    })
    todoTask.appendChild(input);

    const labelContainer = document.createElement("div");
    labelContainer.className = "label-container";
    todoTask.appendChild(labelContainer);

    const checkboxLabel = document.createElement("label");
    checkboxLabel.className = "checkbox-label";
    checkboxLabel.id = labelId;
    checkboxLabel.setAttribute("for", checkboxId);
    checkboxLabel.textContent = todo.task;
    labelContainer.appendChild(checkboxLabel);

    const deleteIconContainer = document.createElement("div");
    deleteIconContainer.className = "delete-icon";
    labelContainer.appendChild(deleteIconContainer);
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-regular", "fa-trash-can", "delete-i", "delete-icon");
    deleteIcon.addEventListener("click", () => {
        onDeleteTodo(todoId);
    });
    deleteIconContainer.appendChild(deleteIcon);
}


for(let todo of userTasks) {
    addTodos(todo);
}


function onTodoTask() {
    const userInputEl = document.getElementById("userInput");
    const userInputvalue = userInputEl.value;

    if(userInputvalue === "") {
        alert("input fields should not be empty");
        return;
    }

    todosCount += 1;

    let newTodo = {
        task: userInputvalue,
        uniqueNo: todosCount
    }

    addTodos(newTodo);
    userInputEl.value = "";
}

addBtn.addEventListener("click", onTodoTask)