// В переменных circle и square хранятся площади круга и квадрата соответственно.
// Написать программу, которая определяет, поместится ли круг в квадрат.

export function circleInSquare(circle, square) {
  2 * Math.sqrt(circle / Math.PI) <= Math.sqrt(square)
    ? console.log("Круг поместится в квадрат")
    : console.log("Круг не поместится в квадрат");
}
