//Создайте объект user, содержащий поле name со значением ‘John’.

const user = {
    name: 'John',
};

//1.Запросить у пользователя ввод числа.
//Записать введенное значение в поле age объекта user.

(function addUserAge() {
    const input = prompt('Enter a number');
    user.age = input;
}(user));

//2.Создать копию объекта user с именем admin.
//Добавить новому объекту поле role со значением ‘admin’.

(function addAdminRole() {
    const admin = user;
    admin.role = 'admin';
    return admin;
}(user));

//*Записать все значения полей объекта admin в отдельные переменные.
//Имена переменных должны совпадать с названиями полей.

let {name, age, role} = admin;