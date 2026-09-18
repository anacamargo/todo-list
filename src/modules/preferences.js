import { loadFromStorage, saveToStorage } from "./storage.js";
import { getDefaultProject } from "./TodoManager.js";

const preferences = loadFromStorage("preferences", {
  currentProjectId: getDefaultProject().id,
  viewMode: "list",
  statusFilter: "all",
  theme: "light",
  sidebarOpen: true,
});

export const getCurrentProjectId = () => preferences.currentProjectId;

export const getViewMode = () => preferences.viewMode;

export const getStatusFilter = () => preferences.statusFilter;

export const getTheme = () => preferences.theme;

export const isSidebarOpen = () => preferences.sidebarOpen;

export const setCurrentProjectId = (id) => {
  preferences.currentProjectId = id;
  persist();
};

export const setViewMode = (mode) => {
  preferences.viewMode = mode;
  persist();
};

export const setStatusFilter = (status) => {
  preferences.statusFilter = status;
  persist();
};

export const toggleTheme = () => {
  preferences.theme = preferences.theme === "light" ? "dark" : "light";
  persist();
};

export const toggleSidebar = () => {
  preferences.sidebarOpen = !preferences.sidebarOpen;
  persist();
};

const persist = () => saveToStorage("preferences", preferences);
