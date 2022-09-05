//Даны длины трёх сторон треугольника.
//Определить, является ли треугольник прямоугольным.


function rectangleTriangle(a, b, c) {
    return (Math.sqrt(c) == Math.sqrt(a) + Math.sqrt(b)) ? console.log("Треугольник прямоугольный") : console.log("Треугольник не прямоугольный")
}

//Пользователь вводит число R. Написать программу,
//которая выведет в консоль длину окружности и площадь круга с радиусом R.

const r = +prompt('Enter a number');

function circleLength() {
    let length = 2 * Math.PI * r;
    console.log(Math.round(length));
};

function circleArea() {
    let area = Math.PI * Math.pow(r, 2);
    console.log(Math.round(area));
};

//*Пользователь вводит числа a, b и c.
//Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

const input = prompt('Введи числа для a b c через пробел:');

(function equation() {
    [a, b, c] = input.split(' ');
    const d = Math.pow(b, 2) - 4 * a * c;

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert(`У уравнения 2 корня: x1 = ${x1}, x2 = ${x2}`)
    } else if (d === 0) {
        x = -b / (2 * a);
        alert(`У уравнения 1 корень, x = ${x}`);
    } else {
        alert('У уравнения нет корней')
    };
}(input));
