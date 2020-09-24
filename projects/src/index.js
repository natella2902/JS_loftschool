/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */

function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i], i, array));
  }

  return newArray;
}
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */

// function reduce(array, fn, initial) {

//   for(let i = 0; i < array.length; i++) {

//     if(!initial === undefined) {
//       let stor = initial;
//       stor = fn(stor, array[i], i, array);
//     } else {
//       let stor = array[i];
//       stor = fn(stor, array[i+1], i, array);
//     }
//   }

//   return stor;
// }

function reduce(array, fn, initial) {
  let store;

  if (typeof initial === 'number') {
    store = initial;

    for (let i = 0; i < array.length; i++) {
      store = fn(store, array[i], i, array);
    }
  } else {
    store = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      store = fn(store, array[i + 1], i, array);
    }
  }

  return store;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const newArr = [];

  for (const key in obj) {
    newArr.push(key.toUpperCase());
  }

  return newArr;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  const objProxy = new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value * value;
    },
  });

  return objProxy;
}

export { forEach, map, reduce, upperProps, createProxy };
