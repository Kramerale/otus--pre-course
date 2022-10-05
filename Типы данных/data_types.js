// В переменных a и b хранятся числа.
// Написать программу, которая выводит
// в консоль произведение и сумму этих чисел.

export function multiply(a, b) {
  console.log(a * b);
}

// В двух переменных хранятся строки символов.
// Написать программу, которая выведет в консоль
// суммарное количество символов в обоих строках.

export function sumLength(firstVar, secondVar) {
  const sum = firstVar.length + secondVar.length;
  console.log(`Суммарное количество символов: ${sum}`);
}

// Написать программу,
// которая запрашивает у пользователя ввод трёхзначного числа,
// а потом выводит в консоль сумму цифр введённого числа.

const input = prompt("Введите трехзначное число");

export function sumNum() {
  let sum = 0;
  if (input.length !== 3) {
    alert("Вы ввели не трехзначное число, попробуйте еще раз");
  } else {
    for (let i = 0; i < input.length; i++) {
      sum += Number(input[i]);
    }
  }
  console.log(`Сумма цифр числа ${input}: ${sum}`);
}

sumNum(input);
