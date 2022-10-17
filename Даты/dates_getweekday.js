// Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
// Напишите программу, выводящую день недели по введённой дате.

const date = prompt("Type a date: DD.MM.YYYY");

export function getWeekDay() {
  let [day, month, year] = date.split(".");
  const inputDate = new Date(Number(year), Number(--month), Number(day));
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  alert(days[inputDate.getDay()]);
}
