const usedIds = [];

export const useUniqueId = () => {
  const generateUniqueId = () => {
    const uid = Math.random().toString(36).slice(2, 9);
    if (usedIds.indexOf(uid) === -1) {
      usedIds.push(uid);
      return uid;
    } else {
      generateUniqueId();
    }
  };

  return generateUniqueId();
};
