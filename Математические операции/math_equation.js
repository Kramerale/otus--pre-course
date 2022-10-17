//* Пользователь вводит числа a, b и c.
// Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

const input = prompt(
  "Введи через пробел числа a b c для решения квадратного уравнения:"
);

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
