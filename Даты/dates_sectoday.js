// Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.

export function secToday() {
  const now = new Date();
  const secPass =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  console.log(secPass);
}
