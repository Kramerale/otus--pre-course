// Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка:

// 1.Датой.
// 2.Адресом электронной почты.
// 3.*Номером телефона.

const input = prompt('Напишите дату, емейл или номер телефона');

export function reqexpCheck() {
  const regexpDate = /[0-9]{1,4}[\.\/\-][0-9]{1,2}[\.\/\-][0-9]{2,4}/;
  const regexpEmail = /[a-zA-Z_\.\d]+@[a-z\d]+\.[a-z]{2,5}/;
  const regexpTelephone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  if (regexpDate.test(input)) {
    alert('Это дата!');
  } else if (regexpEmail.test(input)) {
    alert('Это email!');
  } else if (regexpTelephone.test(input)) {
    alert('Это номер телефона!');
  } else {
    alert('Невалидный ввод');
  }
}

reqexpCheck(input);
