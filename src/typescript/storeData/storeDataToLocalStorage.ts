
export const setLocalSorageData = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalSorageData = (key: string): string | null => {
  return localStorage.getItem(key);
};
