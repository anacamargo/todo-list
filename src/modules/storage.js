export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  return JSON.parse(stored) ?? defaultValue;
};
