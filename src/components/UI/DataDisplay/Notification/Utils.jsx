export const addToObject = (notifications, setNotifications, setKeys) => {
  return (key, data) => {
    const tempArr = notifications;
    tempArr[key] = data;
    setNotifications(tempArr);
    setKeys(Object.keys(tempArr)); // need to re-render
  };
};

export const removeFromObject = (notifications, setNotifications, setKeys) => {
  return (key) => {
    const tempArr = notifications;
    delete tempArr[key];
    setNotifications(tempArr);
    setKeys(Object.keys(tempArr)); // need to re-render
  };
};

export const updateObject = (notifications, setNotifications, setKeys) => {
  // if object not found throw error
  return (key, data) => {
    const tempArr = notifications;
    tempArr[key] = data;
    setNotifications(tempArr);
    setKeys(Object.keys(tempArr)); // need to re-render
  };
};
