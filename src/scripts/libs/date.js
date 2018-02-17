const currentYear = () => {
  return new Date().getFullYear();
};

const currentMonth = () => {
  return new Date().getMonth() + 1;
};

const currentDate = () => {
  return new Date().getDate();
};

export { currentYear, currentMonth, currentDate };
