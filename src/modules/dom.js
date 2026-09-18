import { createProject, deleteProject, getAllProjects } from "./TodoManager.js";
import { getCurrentProjectId, setCurrentProjectId } from "./preferences.js";

const projectListEl = document.querySelector("#project-list");
const addProjectBtn = document.querySelector("#add-project-btn");

export const renderSidebar = () => {
  projectListEl.replaceChildren();
  const allProjects = getAllProjects();

  allProjects.forEach((project) => {
    const projectEl = document.createElement("li");
    projectEl.classList.add("project-item");
    projectEl.dataset.id = project.id;
    projectEl.textContent = project.name;
    if (project.id === getCurrentProjectId()) {
      projectEl.classList.add("active");
    }
    if (project.name !== "Default") {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";
      deleteBtn.classList.add("delete-project-btn");
      projectEl.appendChild(deleteBtn);
    }
    projectListEl.appendChild(projectEl);
  });
};

export const handleProjectListClick = (event) => {
  const projectEl = event.target.closest("[data-id]");
  const projectId = projectEl.dataset.id;
  const deleteBtn = event.target.closest(".delete-project-btn");
  if (deleteBtn) deleteProject(projectId);
  else setCurrentProjectId(projectId);
  renderSidebar();
};

export const handlerAddProject = () => {
  const projectName = prompt("Project Name");
  if (projectName) {
    createProject(projectName);
    renderSidebar();
  }
};

renderSidebar();
projectListEl.addEventListener("click", handleProjectListClick);
addProjectBtn.addEventListener("click", handlerAddProject);
