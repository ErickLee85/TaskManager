

// function dragStart(event) {
//     event.dataTransfer.setData("Text", event.target.id);
//     const id = event.dataTransfer.getData("Text");
//     const dragObject = document.getElementById(id);
//     dragObject.style.opacity = 0.5;
// }

// function dragEnd(event) {
//    const id = event.target.id;
//    document.getElementById(id).style.opacity = 1;
// }
// function allowDrop(event) {
//     event.preventDefault();

// }

// function drop(event) {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("Text");
//     event.target.appendChild(document.getElementById(data));

//     // To do list
//     if (event.target.id == "todo" || event.target.closest('div[id]').id == "todo") {
//         document.getElementById(data).classList.remove("custom-border-warning", "custom-border-success");
//         document.getElementById(data).classList.add("custom-border-primary");
//     }
//     // Progress list
//     if (event.target.id == "progress" || event.target.closest('div[id]').id == "progress") {
//         document.getElementById(data).classList.remove("custom-border-primary", "custom-border-success");
//         document.getElementById(data).classList.add("custom-border-warning");
//     }
//     // Completed list
//     if (event.target.id == "completed" || event.target.closest('div[id]').id == "completed") {
//         document.getElementById(data).classList.remove("custom-border-warning", "custom-border-primary");
//         document.getElementById(data).classList.add("custom-border-success");
//     }
// }

// function addTask() {
//     const taskInput = document.getElementById("newTaskInput");
//     const taskDescription = document.getElementById('taskDescription')
//     const description = taskDescription.value.trim();
//     const taskText = taskInput.value.trim();
//     if (taskText === "" || description === "") {
//         if(taskText === "") {
//             taskInput.focus();
//         } else {
//             taskDescription.focus();
//         }
//         return;
//     }
//     const newTask = createTaskElement(taskText, description);
//     document.getElementById("todoList").appendChild(newTask);
//     taskInput.value = "";
//     taskDescription.value = "";
// }

// function removeTask(task)  {
//     if(window.confirm('Are you sure you want to delete this task?')) {
//         task.remove()
//     } else {
//         return;
//     }
// }
// function createTaskElement(taskText, description) {
//     const date = new Date()
//     const localTime = date.toLocaleString();
//     const newTask = document.createElement("div");
//     const taskId = "task" + new Date().getTime();
//     newTask.id = taskId
//     newTask.draggable = true;
//     newTask.ondragstart = dragStart;
//     newTask.ondragend = dragEnd;
//     newTask.className = "card rounded-0 w-100 mb-3 custom-border-primary border-3 shadow-sm";
//     newTask.innerHTML = `
//         <div class="card-body px-3 py-3 position-relative">
//              <div class="card-text mb-2">${localTime}</div>
//             <div class="card-text mb-2 fw-semibold ">${taskText}</div>
//             <div class="  project-name font-weight-bold" style="width:100%;">${description}</div>
//             <button class="btn btn-danger btn-sm mt-2" onclick="removeTask(${taskId})">Delete</button>
//         </div>
//     `;
//     return newTask;
// }


// function login () {
//     const loginContainer = document.querySelector('.loginContainerHolder');
//     const optionContainer = document.querySelector('.authOptionContainer');
//     const email = document.getElementById('email')
//     loginContainer.style.display = 'grid';
//     optionContainer.style.display = 'none';
//     email.focus();
// }

// function authOption() {
//     const optionContainer = document.querySelector('.authOptionContainer');
//     optionContainer.style.display = 'grid';
// }


// function openRegister () {
//     const registerContainer = document.querySelector('.registerContainerHolder')
//     const optionContainer = document.querySelector('.authOptionContainer');
//     optionContainer.style.display = 'none';
//     registerContainer.style.display = 'grid';
// }






