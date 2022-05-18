export const useClipboard = () => {
  const copy = (textToCopy) => {
    if (textToCopy === undefined) {
      throw new Error("Cant read 'value' of clipboard or its undefined");
    }
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(textToCopy).catch((err) => {
        throw new Error(err);
      });
    } else {
      throw new Error("useClipboard is not supported in this browser");
    }
    navigator.clipboard.writeText(textToCopy);
  };
  return { copy };
};

export default useClipboard;
