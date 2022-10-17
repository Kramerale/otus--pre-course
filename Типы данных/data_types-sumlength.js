// В двух переменных хранятся строки символов.
// Написать программу, которая выведет в консоль
// суммарное количество символов в обоих строках.

export function sumLength(firstVar, secondVar) {
  const sum = firstVar.length + secondVar.length;
  console.log(`Суммарное количество символов: ${sum}`);
}
