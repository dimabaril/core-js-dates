function getWeekNumberByDate(date) {
  //   console.log(date);
  //   const dateToCheck = new Date(date);
  const onejan = new Date(date.getFullYear(), 0, 1);
  const week = Math.ceil(
    ((date - onejan) / 86400000 + onejan.getDay() + 1) / 7
  );

  return week;
}

console.log(getWeekNumberByDate(Date(2024, 0, 3)));
