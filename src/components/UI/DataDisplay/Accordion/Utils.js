export const createEmptyList = (len) => {
  let tempLists = {};
  for (let i = 0; i < len; i++) {
    tempLists[i] = false;
  }
  return tempLists;
};
