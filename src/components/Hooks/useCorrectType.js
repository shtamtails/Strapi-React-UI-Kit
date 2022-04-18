export const useCorrectType = (variant, listOfVariants) => {
  return listOfVariants.indexOf(variant) !== "-1" ? true : false;
};
