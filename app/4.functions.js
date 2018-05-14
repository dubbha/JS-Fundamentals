console.log('Functions');

// Task 1. FDS
// RU: Создайте функцию conc, которая должна конкатенировать значения
//     двух параметров a и b и возвращать строку.
//     Используйте Function Declaration Statement (FDS).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.
//     Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
(function() {

  var a = '1';
  var b = '1';

  console.log(conc(a, b));    // '11'

  a = 1;
  b = 1;

  console.log(conc(a, b));    // '11'

  function conc(a, b) {
    return `${a}${b}`;
  }

})();


// Task 2. FDE
// RU: Создайте функцию comp, которая должна сравнивать значения
//     двух параметров a и b и возвращать 1, если они равны и -1, если они не равны.
//     Используйте Function Definition Expression (FDE).
//     Вызовите функцию до ее объявления.
//     Тестовые данные:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
// EN: Create a function comp, which should compare the values
//     of two parameters a and b, and return 1, when they equal and return -1,
//     when they are not equal.
//     UseFunction Definition Expression (FDE).
//     Call a function before it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
(function() {

  var a = 'abc';
  var b = 'abc';
  // comp(a, b);         // TypeError: comp is not a function -- can't call function expression before it is declared
  console.log(comp);     // undefined -- var comp hoisted, but is undefined

  var comp = function name(a, b) {  // named function expression, good for stack tracing and recursion
    //throw('stack trace me!');    // uncomment to see the name in the stack trace
    return a === b ? 1 : -1;
  }

  console.log(comp(a, b));             // 1

  a = 'abc';
  b = 'abC';
  console.log(comp(a, b));             // -1

})();

// Task 3. AF
// RU: Создайте анонимную функцию, которая должна
//     выводить сообщение 'message in console' в коноль.
//     Используйте ее как обработчик события click для кнопки.
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.
(function() {

  var message = function() {  // anonymous function expression
    console.log('message in console - ES5');
  }
  document.getElementById('functions03es5').onclick = message;


})();

{
  let message = () => console.log('message in console - ES6');
  document.querySelector('#functions03es6').addEventListener('click', message);
}

// Task 4. NFE
// RU: Создайте функцию fibo, которая должна вычислять числа Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Создайте функцию factorial, которая должна вычислять факториал числа по формуле
//     Fn = 1 * 2 *..*n.
//     Используйте Named Function Expression (NFE).
// EN: Create a function fibo should calculate Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a number n
//     according to the formula Fn = 1 * 2 *..*n.
//     Use Named Function Expression (NFE).
{
  const fibo = function self(n) {  // named function expression, good for stack tracing and recursion
    if (n === 0 || n === 1) {
      return n;
    }

    return self(n - 1) + self(n - 2);
  }

  console.log(fibo(10)); // 55
}


// Task 5. FC
// RU: Объявите две строчные переменные: params и body и проинициализируйте
//     их строчными значениями, которые представляют список параметров и тело будущей функции.
//     Создайте функцию, используя эту информацию с помощью Function Constructor (FC).
//     Вызовите эту функцию.
// EN: Declare two string variables: params and body and initialize them with string values,
//     which represent the list of parameters and the body of future function.
//     Create function using these variables with help of Function Constructor (FC).
//     Call this function.
{
  const params = 'a,b';
  const body = 'console.log(a + b)';

  const func = new Function(params, body);

  console.log(func(2, 3));    // 5
}

// Task 6. ArF
// RU: Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Используя стрелочные функции создайте новый массив из элементов elem * elem,
//     которые меньше 100 и отсортируйте его по возрастанию.
//     Выведите результат в консоль.
// EN: Declare an array arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Using arrow functions create new array which contains elem * elem.
//     These elements should be less than 100, sort it in ascending order.
//     Display the result in the console.
{
  const arr = [1, 8, 3, 5, 12, 7, 9, 11];

  const mapped = arr.map(e => e * e).filter(e => e < 100).sort((a, b) => a - b);

  console.log(mapped);
}

// Task 7. IIFE
// RU: Создайте конструкцию, с помощью которой выполниться выше реализованная
//     функция conc.
// EN: Create a construction which allows to run the above function conc.
(function conc(a, b) {
  return `${a}${b}`;
})(2, 3);               // '23'

// Task 8. Arguments Object, Rest
// RU: Создайте функцию parts, которая принимает неизвестное количество параметров.
//     Каждый параметр – это группа предложений.
//     Функция должна вырезать из параметра подстроку, начиная с символа двоеточие (:)
//     и заканчивая символом точка (.).
//     Функция должна возвращать массив подстрок.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
// EN: Create a function parts, which takes unknown quantity of parameters.
//     Each parameter is a group of sentances.
//     The function should cut out the substring from the parameter, starting with the colon (:)
//     and ending with a period (.) character.
//     The function should return an array of substrings.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].

// ES5
(function() {

  var parts = function name() {   // named function expression
    var args = Array.prototype.slice.call(arguments);

    var res = [];
    args.forEach(str => res.push((/:\s*(.*)\./).exec(str)[1]));

    return res;
  }

  var arg1 = `This is the first sentence. This is a sentence with a list of items:
              cherries, oranges, apples, bananas.`;
  var arg2 = `This is the second sentence. This is a sentence with a list of items:
              red, blue, yellow, black.`

  console.log(parts(arg1, arg2));   // ["cherries, oranges, apples, bananas", "red, blue, yellow, black"]

})();

// ES6
{
  const parts = (...args) => args.map(str => (/:\s*(.*)\./g).exec(str)[1]);

  const arg1 = `This is the first sentence. This is a sentence with a list of items:
                cherries, oranges, apples, bananas.`;
  const arg2 = `This is the second sentence. This is a sentence with a list of items:
                red, blue, yellow, black.`

  console.log(parts(arg1, arg2));   // ["cherries, oranges, apples, bananas", "red, blue, yellow, black"]
}


// Task 9. Optional Arguments
// RU: Создайте функцию find(testString, test), которая должна возвращать позицию
//     строки test в строке testString. 
//     Если второй параметр не задан, используйте test = testString. 
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
// EN: Create a function find(testString, test), which should return the position 
//     of test string within testString.
//     If the second parameter is omitted, use default value  test = testString.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0

// ES5
(function() {

  var find = function (testString, test) {
    var test = test || testString;    // ES5 default param

    return testString.indexOf(test);
  }

  console.log(find('abc', 'b'));            // 1
  console.log(find('abc'));                 // 0
  console.log(find('abc', 'd'));            // -1
  console.log(find('abc', 'a', 'b'));       // -1  -- third argument ignored

})();

{
  const find = (testString, test = testString) => testString.indexOf(test);

  console.log(find('abc', 'b'));            // 1
  console.log(find('abc'));                 // 0
  console.log(find('abc', 'd'));            // -1
  console.log(find('abc', 'a', 'b'));       // -1  -- third argument ignored
}

// Task 10. Function as an Object
// RU: Создайте функцию str(), которая принимает один строчный параметр и
//     выводит в консоль 'String is non empty', если параметр - непустая строка и
//     'String is empty', если параметр – пустая строка.
//     Создайте функцию str.isNonEmptyStr(), как свойство функции str. Эта функция должна
//     принимать один параметр и возвращать true, если параметр непустая строка,
//     иначе false. Используйте эту функцию для реализации условия в основной функции.
//     Тестовые данные:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
// EN: Create a function str(), which takes one string parameter and display in the console 
//     string 'String is non empty' if the paramer is not empty string, otherwise it 
//     should display 'String is empty'.
//     Create a function str.isNonEmptyStr() as a property of function str. This function
//     should take one parameter and return true, when the value of parameter is not empty 
//     string, otherwise it should return false. Use this function to implement if statement
//     in the str() funtion.
//     Test Data:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
{
  function str(s) {
    console.log(!s ? 'String is empty' : 'String is non empty');
  }
  str.isNonEmptyStr = s => (!s || typeof s !== 'string') ? false : true;

  str();                   // console.log('String is empty')
  str('');                 // console.log('String is empty')
  str('a');                // console.log('String is non empty')

  console.log(str.isNonEmptyStr());     // false
  console.log(str.isNonEmptyStr(''));   // false
  console.log(str.isNonEmptyStr('a'));  // true
  console.log(str.isNonEmptyStr(1));    // false
}

// Task 11. Function as a Parameter
// RU: Создайте функцию toConsole с одним параметром. Функция должна выводить 
//     значение параметра в консоль.
//     Создайте функцию toAlert с одним параметром. Функция должна выводить значение
//     параметра используя alert().
//     Создайте функцию splitToWords с двумя параметрами: msg и callback.
//     Функция должна разделять строку на слова и использовать колбек для отображения слов. 
//     Если второй параметр не задан, функция должна возвращать массив слов.
// EN: Create a function toConsole with one parameter. The function should display 
//     the value of the parameter in the console.
//     Create a function toAlert with one parameter. The function should display 
//     the value of the parameter using alert.
//     Create a function splitToWords, which takes two parameters: msg и callback.
//     The function should split the value of parameter msg by the words and use callback
//     to display these words.
//     If the second parameter is omitted, the function should return array of words.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']
{
  const toConsole = str => console.log(str);
  const toAlert = str => alert(str);

  const splitToWords = (msg, callback) => {
    const words = msg.split(' ');
    if (callback) {
      callback(words);
    }
    return words;
  }

  toConsole('console log me');
  // toAlert('alert me');

  splitToWords('use callback on me', console.log);     // ["use", "callback", "on", "me"]
  console.log(splitToWords('return me as array')[3]);   // 'array'
}

// Task 12. Function as a Result
// RU: Создайте функцию copyright, которая должна возвращать другую функцию с
//     одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
//     вначале своего параметра и возвращать результат. Объявите этот знак в функции copyright.
//     Тестовые данные:
//     console.log( copyright()('EPAM') ); result = © EPAM.
// EN: Create a function copyright, which ahould return anther function with one parameter.
//     This returned function should prepend sign © ('\u00A9') to its parameter and
//     return the result. Declare the sign © ('\u00A9') inside copyright function.
//     Test Data:
//     console.log( copyright()('EPAM') ); result = © EPAM.
{
  const copyright = () => str => `© ${str}`;
  console.log(copyright()('EPAM'));
}

// Task 13. Function as a Result
// RU: Задание аналогично предыдущему, но в этот раз функция copyright получает знак
//     как свой параметр.
// EN: This task is similar to the previous one, but in this case the function copyright takes 
//     one parameter - sign (© ('\u00A9')).
{
  const copyright = sign => str => `${sign} ${str}`;
  console.log(copyright('©')('EPAM'));
}

// Task 14. Function as a Method
// RU: Создайте литерал объекта employee со следующими свойствами:
//     name: 'Ann', 
//     work – функция, которая выводит в консоль сообщение "I am Ann. I am working..."
//     Тестовые данные
//     employee.work()  результат в консоле "I am Ann. I am working..."
// EN: Create an object literal employee with the following properties:
//     name: 'Ann', 
//     work – function, which display in the console the following string 
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."
{
  const employee = {
    name: 'Ann',
    work() {
      console.log(`I am ${this.name}. I am working...`);
    }
  };
  employee.work();    // I am Ann. I am working...
}

// Task 15. Borrow Method
// RU: Создайте литерал объекта person со свойством name. 
//     Вызовите метод work объекта employee из предыдущего задания.
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.
{
  const employee = {
    name: 'Ann',
    work() {
      console.log(`I am ${this.name}. I am working...`);
    }
  };

  const person = { name: 'Boris' };

  const borrowedMethod = employee.work;
  borrowedMethod.call(person);    // I am Boris. I am working...

}

// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле 
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
//     Using methods console.time(), console.timeEnd() calculate the time for function fibo 
//     and fiboMemo.

// Function Declaration
{
  function fiboMemo(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    if (!fiboMemo.cache[n]) {
      fiboMemo.cache[n] = fiboMemo(n - 2) + fiboMemo(n - 1);
    }

    return fiboMemo.cache[n];
  }
  fiboMemo.cache = {};

  fiboMemo(10);   // 55
}

// Named Function Expression
{
  const fiboMemo = function self(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    if (!self.cache[n]) {
      self.cache[n] = self(n - 2) + self(n - 1);
    }

    return self.cache[n];
  }
  fiboMemo.cache = {};

  const fibo = function self(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    return self(n - 1) + self(n - 2);
  }

  console.time('without memoization');
  console.log(fibo(35));
  console.timeEnd('without memoization');    // ~ 205.073974609375ms

  console.time('with memoization');
  console.log(fiboMemo(35));  
  console.timeEnd('with memoization');       // ~ 0.251953125ms
}
