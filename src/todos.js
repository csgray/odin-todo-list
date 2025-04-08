export const Priorities = Object.freeze({
    High: "High",
    Medium: "Medium",
    Low: "Low",
    None: "None",
})

export function createTodo(title) {
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

    // Due Date
    let dueDate;

    const getDueDate = function () {
        return dueDate;
    }

    const setDueDate = function (newDueDate) {
        dueDate = new Date(newDueDate);
    }

    // Priority
    let priority = Priorities.None;

    const getPriority = function () {
        return priority;
    }

    const setPriority = function (newPriority) {
        if (!(newPriority in Priorities)) {
            throw new Error(`${priority} is not valid. Priority must be one of: ${Priorities.High} ,${Priorities.Medium}, ${Priorities.Low}, ${Priorities.None}`)
        }
        priority = Priorities[newPriority];
    }

    // Project
    let project = null;

    const getProject = function () {
        return project;
    }

    const setProject = function (newProject) {
        project = newProject;
    }

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
        getProject,
        setProject
    };
}
