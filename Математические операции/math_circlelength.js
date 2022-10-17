// Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и площадь круга с радиусом R.

const r = +prompt("Enter a number");

export function circleLength() {
  const length = 2 * Math.PI * r;
  console.log(`Длина окружности: ${Math.round(length)}`);
}

circleLength();

export function circleArea() {
  const area = Math.PI * r ** 2;
  console.log(`Площадь окружности: ${Math.round(area)}`);
}

circleArea();
