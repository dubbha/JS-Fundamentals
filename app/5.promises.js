// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
{
  const p = new Promise(resolve => {});
  console.log('Promise is created');
  console.log(p);     // Promise {<pending>}
                      // {
                      //    __proto__:  Promise,
                      //    [[PromiseStatus]]: "pending",
                      //    [[PromiseValue]]: undefined
                      // }
}


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и введите их в консоль
{
  const p = new Promise(resolve => resolve('Promise Data'));

  console.log(p);   // Promise {<resolved>: "Promise Data"}
                    // {
                    //    __proto__:  Promise,
                    //    [[PromiseStatus]]: "resolved"
                    //    [[PromiseValue]]: "Promise Data"
                    // }
}

// Promise.resolve() shorthand
{
  const p = Promise.resolve('Promise Data');      // same as: new Promise(resolve => resolve('Promise Data'));

  console.log(p);   // Promise {<resolved>: "Promise Data"}
}


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и введите их в консоль
{
  const p = new Promise((resolve, reject) => reject('Promise Error'));

  console.log(p);   // Promise {<rejected>: "Promise Error"}

  p.catch(err => console.log(`error caught: ${err}`));   // catch the error, prevent from falling out
}

// Promise.reject() shorthand
{
  const p = Promise.reject('Promise Error');    // same as: new Promise((resolve, reject) => reject());

  console.log(p);   // Promise {<rejected>: "Promise Error"}

  p.catch(err => console.log(`error caught: ${err}`));   // catch the error, prevent from falling out
}


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и введите их в консоль
{
  const delayedPromise = new Promise(resolve => setTimeout(() => resolve('Promise Data'), 3000));

  delayedPromise.then(res => console.log(res));
}


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три кнопки и три обработчика события click для этих кнопок
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый сосзданный промис,
// свойства resolve и reject получают ссылки на сооветствующие функции
// resolve и reject. Следующий два обработчика запускают методы resolve и reject.
{
  const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: res => console.log(`Promise is resolved with data: ${res}`),
    onError: err => console.log(`Promise is rejected with error: ${err}`),
  };

  document.querySelector('#btn-create-promise').onclick = () => {
    handlePromise.promise = new Promise((resolve, reject) => {
      handlePromise.resolve = resolve;
      handlePromise.reject = reject;
    });

    handlePromise.promise.then(handlePromise.onSuccess, handlePromise.onError);

    console.log('Promise created');
  }

  document.querySelector('#btn-resolve-promise').onclick = () => handlePromise.resolve('resolveData');
  document.querySelector('#btn-reject-promise').onclick = () => handlePromise.reject('rejectError');

}


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then
{
  const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: res => console.log(`Promise is resolved with data: ${res}`),
    onError: err => console.log(`Promise is rejected with error: ${err}`),
  };

  document.querySelector('#btn-create-promise').onclick = () => {
    handlePromise.promise = new Promise((resolve, reject) => {
      handlePromise.resolve = resolve;
      handlePromise.reject = reject;
    });

    handlePromise.promise
      .then(handlePromise.onSuccess, handlePromise.onError)     // console.log() returns undefined
      .then(handlePromise.onSuccess, handlePromise.onError)     // so this then is receiving undefined as its argument

    console.log('Promise created');
  }

  document.querySelector('#btn-resolve-promise').onclick = () => handlePromise.resolve('resolveData');
  document.querySelector('#btn-reject-promise').onclick = () => handlePromise.reject('rejectError');

}


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.
{
  const p = new Promise(resolve => setTimeout(resolve('My name is', 1000)));

  const onSuccess = str => `${str} Alex`;

  const print = str => console.log(str);

  p.then(onSuccess).then(print);
}


// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.
{
  const p = new Promise(resolve => setTimeout(resolve('My name is', 1000)));

  const onSuccess = str => {
    throw(new Error('Exception'));   // exception thrown
    return `${str} Alex`;           // never reached
  }

  const onError = err => console.log(err);

  const print = str => console.log(str);

  p.then(onSuccess).then(print).catch(onError);
}


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData
{
  const getPromiseData = promise => promise.then(value => console.log(value));

  const obj = { name: 'Anna' };

  const wrapper = Promise.resolve(obj);

  getPromiseData(wrapper);

}



// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль
{
  const promise1 = new Promise(resolve => setTimeout(() => resolve({ name: "Anna" }), 2000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve({ age: 16 }), 3000));

  const both = Promise.all([
    promise1,
    promise2
  ]);

  both.then(resArr => console.log(`${resArr[0].name} is ${resArr[1].age} years old`));  // Anna is 16 years old

}


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.
{
  const promise1 = new Promise(resolve => setTimeout(() => resolve({ name: "Anna" }), 2000));
  const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('age API down')), 3000));

  const both = Promise.all([
    promise1,
    promise2
  ]);

  both
    .then(resArr => console.log(`${resArr[0].name} is ${resArr[1].age} years old`))
    .catch(err => console.log(err));

}


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку. Добавьте обработчик для кнопки.
// Используя метод race организуйте отмену промиса.
{
  const actualPromise = new Promise(resolve => setTimeout(() => resolve('Promise Data'), 5000));

  console.log('actualPromise', actualPromise);

  let cancel;
  const cancelPromise = new Promise(reject => {
    cancel = () => reject({ canceled: true });
  });

  const cancelablePromise = Object.assign(Promise.race([actualPromise, cancelPromise]), { cancel });

  cancelablePromise.then(res => console.log(res));

  document.querySelector('#btn-cancel-promise').onclick = () => cancelablePromise.cancel();

}
