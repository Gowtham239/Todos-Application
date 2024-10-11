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

function addTodos(todo) {
    const tasksList = document.querySelector("#tasksList");

    const todoTask = document.createElement("li");
    todoTask.className = "tasks";
    tasksList.appendChild(todoTask);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = todo.uniqueNo;
    todoTask.appendChild(input);

    const labelContainer = document.createElement("div");
    labelContainer.className = "label-container";
    todoTask.appendChild(labelContainer);

    const checkboxLabel = document.createElement("label");
    checkboxLabel.className = "checkbox-label";
    checkboxLabel.setAttribute("for", todo.uniqueNo);
    checkboxLabel.textContent = todo.task;
    labelContainer.appendChild(checkboxLabel);

    const deleteIconContainer = document.createElement("div");
    deleteIconContainer.className = "delete-icon";
    labelContainer.appendChild(deleteIconContainer);
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-regular", "fa-trash-can");
    deleteIconContainer.appendChild(deleteIcon);
}


for(let todo of userTasks) {
    addTodos(todo);
}

