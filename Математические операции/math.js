// Даны длины трёх сторон треугольника.
// Определить, является ли треугольник прямоугольным.

export function rectangleTriangle(a, b, c) {
  return Math.sqrt(c) === Math.sqrt(a) + Math.sqrt(b)
    ? console.log("Треугольник прямоугольный")
    : console.log("Треугольник не прямоугольный");
}

rectangleTriangle(1, 2, 3);

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

//* Пользователь вводит числа a, b и c.
// Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

const input = prompt("Введи числа для a b c через пробел:");

export function equation() {
  [a, b, c] = input.split(" ");
  const d = b ** 2 - 4 * a * c;

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    alert(`У уравнения 2 корня: x1 = ${x1}, x2 = ${x2}`);
  } else if (d === 0) {
    const x = -b / (2 * a);
    alert(`У уравнения 1 корень, x = ${x}`);
  } else {
    alert("У уравнения нет корней");
  }
}

equation(input);
