export const convertDate = (createAt: any) => {
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date(createAt);
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthName = monthNames[month];
  const todayDate = date.getDate();
  const todayFormate = todayDate < 10 ? '0' + todayDate : todayDate;

  const myDate = todayFormate + ' ' + monthName + ', ' + year;

  return myDate;
};
