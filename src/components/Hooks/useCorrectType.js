export const useCorrectType = (variant, listOfVariants) => {
  if (typeof variant === "string") {
    if (listOfVariants.indexOf(variant) === -1) {
      return false;
    } else {
      return true;
    }
  }
  if (typeof variant === "object") {
    for (let i = 0; i < variant.length; i++) {
      if (listOfVariants[i].indexOf(variant[i]) === -1) {
        return false;
      }
    }
    return true;
  }
};
