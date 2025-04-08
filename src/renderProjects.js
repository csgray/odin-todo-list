// renderProjects.js
const content = document.getElementById("content");

// Heading and subheading
const headingDiv = document.createElement("div");
const heading = headingDiv.appendChild(document.createElement("h1"));
heading.textContent = "All Projects"

// Projects
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

export default function (projects) {
    content.appendChild(headingDiv);
    content.appendChild(provisionProjects(projects));
}
