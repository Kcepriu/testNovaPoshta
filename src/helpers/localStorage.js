export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const loadFromLocalStorage = (key, defaultValue = '') => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null
      ? defaultValue
      : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    return defaultValue;
  }
};
