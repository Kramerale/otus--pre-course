// Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее этому числу
// (1 — январь, 2 — февраль и т.д.).

const num = +prompt("Enter a number from 1 to 12");

export function monthName(num) {
  switch (num) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      alert("Please, enter a number from 1 to 12");
  }
}
