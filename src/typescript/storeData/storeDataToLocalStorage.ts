const setLocalSorageData = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalSorageData = (key: string) => {
  localStorage.getItem(key);
};

export default setLocalSorageData; getLocalSorageData;
