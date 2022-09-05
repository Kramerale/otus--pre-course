clear
вести в консоль сумму всех целых чисел от 50 до 100.

function sumRange() {
    let sum = 0;
    for (let i = 50; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

//Вывести в консоль таблицу умножения на 7.
//7 x 1 = 7
//7 x 2 = 14
//…
//7 x 9 = 63

function multTable(num = 7) {
    for (let i = 1; i <=9; i++) {
        let multiply = num * i;
        console.log(`${num} * ${i} = ${multiply}`);
    }
}

//*Запросить у пользователя ввод числа N.
//Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.

const input = prompt("Введите число: ");

(function average() {
    let numberAvg = 0;
    let count = 0;

    for (let i = 1; i <= input; i++) {
        if (i % 2 !== 0) {
            numberAvg += i;
            count++;
        }
    }
    console.log(numberAvg / count);
}(input))