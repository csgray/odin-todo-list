// renderProjects.js
import {createProject} from "./projects.js";
import {getFromStorage, saveToStorage} from "./storage.js";
import {clearContent} from "./utility.js";

const content = document.getElementById("content");

// Heading and subheading
const headingDiv = document.createElement("div");
const heading = headingDiv.appendChild(document.createElement("h1"));
heading.textContent = "All Projects"

// List projects
function provisionProjects(projects) {
    const projectsList = document.createElement("ul");
    for (const project of projects) {
        const projectItem = document.createElement("li");

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.getTitle();
        projectItem.appendChild(projectTitle);

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.getDescription();
        projectItem.appendChild(projectDescription);

        projectsList.append(projectItem);
    }
    return projectsList;
}

// Create new project
const createProjectForm = document.createElement("form");
createProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(createProjectForm);
    const project = createProject(formData.get("title"));
    project.setDescription(formData.get("description"));
    const {projects} = getFromStorage();
    projects.push(project);
    saveToStorage(projects);
    clearContent();
    renderProjectPage(projects);
})

const newProjectTitleLabel = document.createElement("label");
newProjectTitleLabel.setAttribute("for", "title");
newProjectTitleLabel.innerText = "Project Title"
createProjectForm.appendChild(newProjectTitleLabel);

const newProjectTitleInput = document.createElement("input");
newProjectTitleInput.setAttribute("name", "title");
newProjectTitleInput.setAttribute("type", "text");
createProjectForm.appendChild(newProjectTitleInput);

const newProjectDescriptionLabel = document.createElement("label");
newProjectDescriptionLabel.setAttribute("for", "description");
newProjectDescriptionLabel.innerText = "Project Description"
createProjectForm.appendChild(newProjectDescriptionLabel);

const newProjectDescriptionInput = document.createElement("input");
newProjectDescriptionInput.setAttribute("name", "description");
newProjectDescriptionInput.setAttribute("type", "text");
createProjectForm.appendChild(newProjectDescriptionInput);

const newProjectButton = document.createElement("button");
newProjectButton.textContent = "Create Project";
createProjectForm.appendChild(newProjectButton);

// Put it all together and export
export default function renderProjectPage(projects) {
    content.appendChild(headingDiv);
    content.appendChild(provisionProjects(projects));
    content.appendChild(createProjectForm);
}
