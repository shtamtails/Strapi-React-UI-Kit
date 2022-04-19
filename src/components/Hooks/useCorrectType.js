// ? Hook for checking if props.type or props.variant is available in Component.availableProps
// ? If not - return false and render default styles
// ? If yes - return true and render component with unique styles

// * Example:

// * useCorrectType(props.size, Component.availableProps.size)
// * ? Styles.push(props.size)
// * : Styles.push("md");

// * Component.availableProps = {
// *  variant: ["filled", "outline", "transparent", "hover", "light"],
// *  size: ["sm", "md", "lg"],
// * };

// ? Also work with array of props if need to check both at once
// ! DONT MESS UP WITH SYNTAX, IF CHECKING ARRAY OF PROPS PUT THEM IN BRACKETS [ ]
// * Example:
// * Returns custom styles only if both {type} and {variant} are existing in Component.availableProps;

// * useCorrectType([type, variant], [Button.availableProps.type, Button.availableProps.variant])
// * ? buttonStyles.push(`btn-${variant}-${type}`)
// * : buttonStyles.push(`btn-light-info`);

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
