function getWorkSchedule(period, countWorkDays, countOffDays) {
  const startDate = new Date(period.start.split('-').reverse().join('-'));
  const endDate = new Date(period.end.split('-').reverse().join('-'));
  const result = [];
  const currentDate = new Date(startDate);
  let isWorkDay = true;

  while (currentDate <= endDate) {
    if (isWorkDay) {
      for (let i = 0; i < countWorkDays; i += 1) {
        if (currentDate <= endDate) {
          result.push(
            `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`
          );
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      isWorkDay = false;
    } else {
      for (let i = 0; i < countOffDays; i += 1) {
        if (currentDate <= endDate) {
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      isWorkDay = true;
    }
  }

  return result;
}

console.log(getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3)); // ["1-1-2021", "2-1-2021", "4-1-2021", "5-1-2021", "7-1-2021", "8-1-2021", "10-1-2021"]
