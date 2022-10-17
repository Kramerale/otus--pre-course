// Написать программу,
// которая запрашивает у пользователя ввод трёхзначного числа,
// а потом выводит в консоль сумму цифр введённого числа.

export function sumNum() {
  let sum = 0;
  const input = window.prompt("Введите трехзначное число");
  if (input.length !== 3) {
    alert("Вы ввели не трехзначное число, попробуйте еще раз");
  } else {
    for (let i = 0; i < input.length; i++) {
      sum += Number(input[i]);
    }
    console.log(`Сумма цифр числа ${input}: ${sum}`);
  }
}
