const usedIds = [];

export const useUniqueId = () => {
    const uid = Math.random().toString(36).slice(2, 9);
    return uid
}