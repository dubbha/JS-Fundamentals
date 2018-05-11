console.log('Primitive Data Types');

// Task 01
// Объявите переменную days и проинициализируйте ее числом от 1 до 10.
// Преобразуйте это число в количество секунд и выведите в консоль.

const days = 7;
const secs = days * 24 * 60* 60;
console.log(`${days} days is ${secs} seconds of your life`);



// Task 02
// Объявите две переменные: admin и name. Установите значение переменной name
// в ваше имя. Скопируйте это значение в переменную admin и выведите его в консоль.

let admin;
let name;

name = 'Alex';
admin = name;

console.log(admin);




// Task 03
// Объявите три переменных: a, b, c. Присвойте им следующие значения: 10, 2, 5.
// Объявите переменную result1 и вычислите сумму значений переменных a, b, c.
// Объявите переменную min и вычислите минимальное значение переменных a, b, c.
// Выведите результат в консоль.

let a;
let b;
let c;

a = 10;
b = 2;
c = 5;

const result = a + b + c;
const min = Math.min(a, b, c);

console.log(min);





// Task 04
// Объявите три переменных: hour, minute, second. Присвойте им следующие значения:
// 10, 40, 25. Выведите в консоль время в формате 10:40:25.

const hour = 10;
const minute = 40;
const second = 25;
console.log(`${hour}:${minute}:${second}`);



// Task 05
// Объявите переменную minute и проинициализируйте ее целым числом.
// Вычислите к какой четверти принадлежит это число и выведите в консоль.

const minute105 = 140;
console.log(Math.ceil((minute105 % 60) / 15));  // works for minutes over 60


// Task 06
// Объявите две переменные, которые содержат стоимость товаров:
// первый товар - 0.10 USD, второй - 0.20 USD
// Вычислите сумму и выведите в консоль. Используйте toFixed()

const price1 = 0.1
const price2 = 0.2
console.log((price1 + price2).toFixed(2));



// Task 07
// Объявите переменную a.
// Если значение переменной равно 0, выведите в консоль "True", иначе "False".
// Проверьте, что будет появляться в консоли для значений 1, 0, -3.

const a_107 = 0;
console.log(!a_107);    // true



// Task 08
// Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
// Если результат больше 5, выведите его в консоль, иначе умножте его на 10
// и выведите в консоль.
// Данные для тестирования: 2, 5 и 3, 1.

const a_108 = 2;
const b_108 = 3;
const result_108 = a_108 + b_108;
console.log(result_108 > 5 ? result_108 : result_108 * 10);



// Task 09
// Объявите переменную month и проинициализируйте ее числом от 1 до 12.
// Вычислите время года и выведите его в консоль.

const month_109 = 5;

if ([1,2,12].includes(month_109)) {
  console.log('winter');
} else if (month_109 < 6) {
  console.log('spring');
} else if (month_109 < 9) {
  console.log('summer');
} else if (month_109 < 12) {
  console.log('fall');
} else {
  console.log('WAT');
}



// Task 10
// Выведите в консоль все числа от 1 до 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}



// Task 11
// Выведите в консоль все четные числа от 1 до 15.

for (let i = 2; i < 15; i += 2) {
  console.log(i);
}

for (let i = 1; i < 15; i++) {
  if (!(i % 2)) {   // MUST use parentesis: !(i % 2); this won't work: if (!i%2)
    console.log(i);
  }
}




// Task 12
// Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
// x
// xx
// xxx
// xxxx
// ...

for (let i = 0; i < 10; i++) {
  console.log('x'.repeat(i+1));
}



// Task 13
// Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
// 1
// 22
// 333
// 4444
// ...

for (let i = 1; i < 10; i++) {
  console.log(`${i}`.repeat(i));
}



// Task 14
// Запросите у пользователя какое либо значение и выведите его в консоль.

// const answer = prompt('Please enter something', 'default');
// console.log(answer);



// Task 15
// Перепишите if используя тернарный опертор
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// const result = (a + b < 4) ? 'Мало' : 'Много' ;
const a_115 = 2;
const b_115 = 1;
const result_115 = (a_115 + b_115 < 4) ? 'Мало' : 'Много' ;
console.log(result_115);



// Task 16
// Перепишите if..else используя несколько тернарных операторов.
// var message;
// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

const login = 'Директор';
let message;

login == 'Вася'
  ? message = 'Привет'
  : (
    login == 'Директор'
      ? message = 'Здравствуйте'
      : (
        login == ''
          ? message = 'Нет логина'
          : message = ''
      )
  );

console.log(message);




// Task 17
// Замените for на while без изменения поведения цикла
// for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

{
  let i = 0;
  while (i < 3) {
    console.log(`номер ${i}!`);   // alert()
    i++;
  }
}


// Task 18
// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если пользователь ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число,
// большее 100, либо не нажмёт кнопку Cancel (ESC).
// Предусматривать обработку нечисловых строк в этой задаче необязательно.

{
  // let num = 0;
  // while(num !== null && num < 100) {  // cancel returns null
  //   num = +prompt('Enter a number over 100');
  // }
}




// Task 19
// Переписать следующий код используя switch
// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

{
  // const a = +prompt('a?', '');
  // switch (a) {
  //   case 0:
  //     alert(0);
  //     break;
  //   case 1:
  //     alert(1);
  //     break;
  //   case 2:
  //   case 3:
  //     alert('2,3');
  // }
}



// Task 20
// Объявите переменную и проинициализируйте ее строчным значением в переменном
// регистре. (Например так "таООооОддОО")
// Напишите код, который преобразует эту строку к виду:
// первая буква в верхнем регистре, остальные буквы в нижнем регистре.
// Выведите результат работы в консоль
// Используйте: toUpperCase/toLowerCase, slice.

{
  const string = 'таООооОддОО';

  const capitalize = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;

  console.log(capitalize(string));  // 'Таоооооддоо'
}




// Task 21
// Напишите код, который выводит в консоль true, если строка str содержит
// „viagra“ или „XXX“, а иначе false.
// Тестовые данные: 'buy ViAgRA now', 'free xxxxx'

{
  const nasty = (str) => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');

  console.log(nasty('buy ViAgRA now'));   // true
  console.log(nasty('free xxxxx'));       // true
  console.log(nasty('pink unicorn'));     // false
}




// Task 22
// Напишите код, который проверяет длину строки str, и если она превосходит
// maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
// Результатом должна быть (при необходимости) усечённая строка.
// Выведите строку в консоль
// Тестовые данные:
//  "Вот, что мне хотелось бы сказать на эту тему:", 20
//  "Всем привет!", 20

{
  const trim = (str, len) => {
    const end = '...';
    return str.length > len ? `${str.slice(0, len - end.length)}${end}` : str;
  }
  console.log(trim('Вот, что мне хотелось бы сказать на эту тему:', 20));
  console.log(trim('Всем привет!', 20));
}




// Task 23
// Напишите код, который из строки $100 получит число и выведите его в консоль.

{
  const str = '$100';
  console.log(+str.match(/\d+/g, str));     // Number(str.match(/\d+/g, str))
}



// Task 24
// Напишите код, который проверит, является ли переменная промисом

{
  const p = Promise.resolve();    // const p = new Promise(resolve => resolve())
  console.log(typeof p.then === 'function');  // true - check that it is then-able, has then method
  console.log(Promise.resolve(p) === p);      // true - another way:
                                              // Promise.resolve() always returns the link to the
                                              // original object itself if it is a promise
}



