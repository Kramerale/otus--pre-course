//Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.

function diff(a, b) {
    return a > b ? a - b : b - a;
 };
 
 
 //Напишите функцию isWord, которая принимает на вход текстовую строку.
 //Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.
 
 function isWord(str) {
    return str = str.split(' ').length == 1 ? true : false;
 }
  
 //Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x
 
 function pow2(a, x) {
    return a ** x;
 } //Или воспользоваться более умным Math.pow();