//* В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
// Написать программу, которая определяет более молодого пользователя.

export function yongestOne(user1, user2) {
  const [day, month, year] = user1.split(".");
  const [day2, month2, year2] = user2.split(".");

  const date1 = new Date();
  date1.setDate(day);
  date1.setMonth(month - 1);
  date1.setYear(year);

  const date2 = new Date();
  date2.setDate(day2);
  date2.setMonth(month2 - 1);
  date2.setYear(year2);

  date1 < date2
    ? alert("User1 is older than User2")
    : alert("User2 is older than User1");
}
