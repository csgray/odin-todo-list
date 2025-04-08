export function createProject(title) {
    // Title
    const getTitle = function () {
        return title;
    }

    const setTitle = function (newTitle) {
        title = newTitle;
    }

    // Description
    let description;

    const getDescription = function () {
        return description;
    }

    const setDescription = function (newDescription) {
        description = newDescription;
    }

    // Todos
    const todos = [];

    const getTodos = function () {
        return todos;
    }

    const addTodo = function (todo) {
        todos.push(todo);
    }

    const deleteTodo = function (todo) {
        todos.splice(todos.indexOf(todo), 1)
    }

    return {getTitle, setTitle, getDescription, setDescription, getTodos, addTodo, deleteTodo};
}