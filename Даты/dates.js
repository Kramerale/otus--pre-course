//Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
//Напишите программу, выводящую день недели по введённой дате.

let date = prompt('Type a date: DD.MM.YYYY');

export function getWeekDay() {
    let [day, month, year] = date.split('.');
    let inputDate = new Date(Number(year), Number(--month), Number(day));
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
    alert(days[inputDate.getDay()]);
}

getWeekDay();

//Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.

export function secToday() {
    const now = new Date();
    const secPass = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
    console.log(secPass);
}

secToday();

//*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
//Написать программу, которая определяет более молодого пользователя.

export function yongestOne(user1, user2) {
    let [day, month, year] = user1.split('.');
    let [day2, month2, year2] = user2.split('.');

    let date1 = new Date();
    date1.setDate(day);
    date1.setMonth(month - 1);
    date1.setYear(year);

    let date2 = new Date();
    date2.setDate(day2);
    date2.setMonth(month2 - 1);
    date2.setYear(year2);

    date1 < date2 ? alert('User1 is older than User2') : alert('User2 is older than User1');
}

yongestOne('12.10.1996', '20.06.1993');