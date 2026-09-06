let todos = [];

// Add Todo
function addTodo() {

    let input = document.getElementById("todoInput");
    let title = input.value.trim();

    if (title === "") {
        alert("Please enter a Task");
        return;
    }

    let todo = {
        id: Date.now(),
        title: title
    };

    todos.push(todo);

    input.value = "";

    displayTodos();
}


// Display Todos
function displayTodos() {

    let todoList = document.getElementById("todoList");

    todoList.innerHTML = "";

    todos.forEach(function(todo) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.id}</td>
            <td>
                <button class="edit-btn" onclick="editTodo(${todo.id})">
                    Edit
                </button>

                <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                    Delete
                </button>
            </td>
        `;
console.log(todo)
        todoList.appendChild(row);
    });
}


// Edit Todo
function editTodo(id) {

    let todo = todos.find(function(todo) {
        return todo.id === id;
    });

    let newTitle = prompt("Enter new Todo title", todo.title);

    if (newTitle === null) {
        return;
    }

    newTitle = newTitle.trim();

    if (newTitle === "") {
        alert("Title cannot be empty");
        return;
    }

    todo.title = newTitle;

    displayTodos();
}


// Delete Todo
function deleteTodo(id) {

    todos = todos.filter(function(todo) {
        return todo.id !== id;
    });

    displayTodos();
}