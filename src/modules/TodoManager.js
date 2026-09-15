import { Project } from "./Project";
import { Todo } from "./Todo";
import { loadProjects, saveProjects } from "./storage";

const projects = [];
const storedProjects = loadProjects();

export const createProject = (name) => {
  const project = new Project(name);
  projects.push(project);
  persist();
  return project;
};

export const getDefaultProject = () => {
  return projects.find((project) => project.name === "Default");
};

export const createTodo = (projectId, data) => {
  const project = getProjectById(projectId) ?? getDefaultProject();
  const todo = new Todo(data);
  project.addTodo(todo);
  persist();
};

export const deleteTodo = (projectId, todoId) => {
  const project = getProjectById(projectId);
  if (!project) {
    throw new Error("Project not found");
  }
  project.removeTodo(todoId);
  persist();
};

export const getProjectById = (projectId) => {
  return projects.find((project) => project.id === projectId);
};

export const getAllProjects = () => {
  return projects;
};

const persist = () => saveProjects(projects);

export const initializeProjects = () => {
  storedProjects.forEach((rawProject) => {
    const project = new Project(rawProject.name, rawProject.id);
    rawProject.todoList.forEach((rawTodo) => {
      const todo = new Todo(rawTodo, rawTodo.id);
      project.addTodo(todo);
    });
    projects.push(project);
  });
  return projects;
};

const initializeApp = () => {
  if (storedProjects.length === 0) {
    createProject("Default");
  } else initializeProjects();
};

initializeApp();
