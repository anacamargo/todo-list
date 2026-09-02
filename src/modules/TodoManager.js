import { Project } from "./Project";
import { Todo } from "./Todo";

const projects = [];

export const createProject = (name) => {
  const project = new Project(name);
  projects.push(project);
  return project;
};

export const defaultProject = createProject("Default");

export const createTodo = (projectId, data) => {
  const project = getProjectById(projectId) ?? defaultProject;
  const todo = new Todo(data);
  project.addTodo(todo);
};

export const deleteTodo = (projectId, todoId) => {
  const project = getProjectById(projectId);
  if (!project) {
    throw new Error("Project not found");
  }
  project.removeTodo(todoId);
};

export const getProjectById = (projectId) => {
  return projects.find((project) => project.id === projectId);
};

export const getAllProjects = () => {
  return projects;
};
