export const saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadProjects = () => {
  const stored = localStorage.getItem("projects") ?? "[]";
  return JSON.parse(stored);
};
