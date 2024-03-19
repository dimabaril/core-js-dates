function getWeekNumberByDate(date) {
  const startOfTheYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.ceil((date - startOfTheYear) / 86400000) + 1;

  let dayOfWeek = startOfTheYear.getDay();
  dayOfWeek = dayOfWeek !== 0 ? 7 : dayOfWeek;

  const days = dayOfYear + 7 - dayOfWeek;

  return Math.ceil(days / 7);
}

console.log(getWeekNumberByDate(new Date(2024, 0, 3))); // 1
console.log();
console.log(getWeekNumberByDate(new Date(2024, 0, 31))); // 5
console.log();
console.log(getWeekNumberByDate(new Date(2024, 1, 23))); // 8
console.log();
console.log(getWeekNumberByDate(new Date(2023, 1, 23))); // 9
