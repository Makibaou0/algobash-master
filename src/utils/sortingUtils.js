// utils/sortingUtils.js

export const sortDataByPriceAsc = (DATA, setDATA, setIsSorting) => {
  const sortedData = [...DATA];
  sortedData.sort((a, b) => a.price - b.price);
  setDATA(sortedData);
  setIsSorting(false);
};

export const sortDataByPriceDesc = (DATA, setDATA, setIsSorting) => {
  const sortedData = [...DATA];
  sortedData.sort((a, b) => b.price - a.price);
  setDATA(sortedData);
  setIsSorting(false);
};

export const sortDataByName = (DATA, setDATA, setIsSorting) => {
  const sortedData = [...DATA];
  sortedData.sort((a, b) => a.title.localeCompare(b.title));
  setDATA(sortedData);
  setIsSorting(false);
};
