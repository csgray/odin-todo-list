import {createProject} from "./projects.js";

export function saveToStorage(projects, todos) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function getFromStorage() {
    console.log("Loading projects...");
    const projects = [];
    const projectsJson = JSON.parse(localStorage.getItem("projects"));

    if (!projectsJson) {
        console.log("No projects found. Initializing All Todos...")
        const allTodos = createProject("All Todos");
        allTodos.setDescription("Default project that holds all todos")
        projects.push(allTodos);
    } else {
        for (const item of projectsJson) {
            const project = createProject(item.title);
            project.setDescription(item.description);
            projects.push(project);
        }
    }
    console.dir(projects);

    console.log("Loading todos...");
    const todos = []

    return {projects, todos};
}


