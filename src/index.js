import "./styles.css";
import renderProjectPage from "./renderProjects.js";
import {getFromStorage} from "./storage.js";
import {clearContent} from "./utility.js";

// Initialization
const {projects, todos} = getFromStorage();

// Tabbed browsing
const allProjects = document.getElementById("projects");

allProjects.addEventListener("click", function () {
    clearContent();
    renderProjectPage(projects);
})

// Render home page
renderProjectPage(projects);
