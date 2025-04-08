import "./styles.css";
import renderProjectPage from "./renderProjects.js";
import {getFromStorage} from "./storage.js";

const allProjects = document.getElementById("projects");
const content = document.getElementById("content");

// Initialization
const {projects, todos} = getFromStorage();

// Tabbed browsing
function clearContent() {
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }

}

allProjects.addEventListener("click", function () {
    clearContent();
    renderProjectPage(projects);
})

// Render
renderProjectPage(projects);
