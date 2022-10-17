// Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63

export function multTable(num = 7) {
  for (let i = 1; i <= 9; i++) {
    const multiply = num * i;
    console.log(`${num} * ${i} = ${multiply}`);
  }
}
