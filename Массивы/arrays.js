//Создайте массив целых чисел из 10 элементов.

let arr = [1,2,3,4,5,6,7,8,9,10];

//1.Выведите в консоль сумму всех элементов массива.

export function sumOfNewArr() {
    let sum = 0;
    arr.forEach(function(el){
        sum += el;
    });
    console.log(sum);
}

sumOfNewArr(arr);

//2.Создайте новый массив на основе исходного,
//в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.
//(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).

export function newArr() {
    let newValue = [];
    console.log(newValue = arr.map((el) => el * 2));
}

newArr(arr);

//3.*Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.

let indexMax = arr.indexOf(Math.max(...arr));
let indexMin = arr.indexOf(Math.min(...arr));
console.log(`Минимальный элемент: ${arr[indexMin]}, максимальный элемент: ${arr[indexMax]}`);