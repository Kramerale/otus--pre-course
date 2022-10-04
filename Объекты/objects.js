// Создайте объект user, содержащий поле name со значением 'John'.

const user = {
  name: 'John',
};

// 1.Запросить у пользователя ввод числа.
// Записать введенное значение в поле age объекта user.

export function addUserAge(user) {
  return {
    ...user,
    age: prompt('Enter a number'),
  };
}

// 2.Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением 'admin'.

const admin = addAdminRole(user);

export function addAdminRole(user) {
  return {
    ...addUserAge(user),
    role: 'admin',
  };
}

//* Записать все значения полей объекта admin в отдельные переменные.
// Имена переменных должны совпадать с названиями полей.

export function printAdminFields(admin) {
  const { name, age, role } = admin;
  return { name, age, role };
}

printAdminFields(admin);
