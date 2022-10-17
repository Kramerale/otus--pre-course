// Даны длины трёх сторон треугольника.
// Определить, является ли треугольник прямоугольным.

export function rectangleTriangle(a, b, c) {
  return Math.sqrt(c) === Math.sqrt(a) + Math.sqrt(b)
    ? console.log("Треугольник прямоугольный")
    : console.log("Треугольник не прямоугольный");
}

rectangleTriangle(1, 2, 3);
