console.log('Arrays');

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# Array.prototype methods (available on instances)

Array.prototype.forEach()    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Array.prototype.filter()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Array.prototype.map()           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Array.prototype.reduce()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Array.prototype.reduceRight()   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

Array.prototype.some()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.every()         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

Array.prototype.keys()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
Array.prototype.values()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
Array.prototype.entries()       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

Array.prototype.push()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Array.prototype.pop()           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Array.prototype.shift()         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Array.prototype.unshift()       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

Array.prototype.slice()         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Array.prototype.splice()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Array.prototype.includes()      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Array.prototype.indexOf()       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.lastIndexOf()   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

Array.prototype.find()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Array.prototype.findIndex()     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Array.prototype.sort()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Array.prototype.reverse()       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Array.prototype.join()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Array.prototype.concat()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Array.prototype.fill()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Array.prototype.copyWithin()    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin


#  Array constructor methods (not on prototype or instances)

Array.of()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
Array.from()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Array.isArray()     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

*/

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.
{
  const arr = [1, 2, 3, 4];
    
  const last1 = arr[arr.length - 1];
  console.log(last1);                 // 4
  console.log(arr);                   // [1, 2, 3, 4]

  const last2 = arr.pop();
  console.log(last2);                 // 4
  console.log(arr);                   // [1, 2, 3]

}

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицироват текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
{
  const arr = [1, 2, 3];
  
  arr.push(4);
  console.log(arr);               // [1, 2, 3, 4]

  const copyES6 = [...arr, 5];       // ES6 - array spread operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  console.log(arr);                  // [1, 2, 3, 4]
  console.log(copyES6);              // [1, 2, 3, 4, 5]

  const copyES5 = arr.concat(5);     // ES5
  console.log(arr);                  // [1, 2, 3, 4]
  console.log(copyES5);              // [1, 2, 3, 4, 5]
}


// Task 03
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.
{
  const arr = [1, 2, 3];
  arr.forEach(e => console.log(e));
}


// Task 04
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.
{
  const arr = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  arr.filter(e => e > 50).reduce((acc, cur) => acc + cur, 0);     // 3775
}

{
  const arr = Array(101).fill().map((e, i) => i);                 // Array(n).fill() - https://stackoverflow.com/a/35013890/8861667
  arr.filter(e => e > 50).reduce((acc, cur) => acc + cur, 0);     // 3775

  Array(101).fill().map((e, i) => i).filter(e => e > 50).reduce((acc, cur) => acc + cur);   // same, one-liner
}



// Task 05
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.
{
  const arr = ['a', 'b', 'c'];
  arr.join(',');                  // 'a,b,c'
}


// Task 06
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.
{
  const randArr = Array(20).fill().map((e, i) => i + 1).sort((a, b) => Math.random() > 0.5 ? 1 : -1);
  console.log(randArr);                     // random

  // Using sort() default comparison won't work - it compares numbers as strings:
  const wrongIncArr = randArr.sort();
  console.log(wrongIncArr);                         // [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 3, 4, 5, 6, 7, 8, 9]

  // We should explicitly use the comparing function
  const incArr = randArr.sort((a, b) => a - b);     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  console.log(incArr);

  const decArr = randArr.sort((a, b) => b - a);     // [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  console.log(incArr);
}

// Task 07
// EU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.
{
  const arr = [3, 0, -1, 12, -2, -4, 0, 7, 2];

  // ES6
  [...arr.filter(e => e < 0), ...arr.filter(e => e === 0), ...arr.filter(e => e > 0)];    // [-1, -2, -4, 0, 0, 3, 12, 7, 2]

  // ES5
  [].concat(arr.filter(e => e < 0), arr.filter(e => e === 0), arr.filter(e => e > 0));    // [-1, -2, -4, 0, 0, 3, 12, 7, 2]
}


// Task 08
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента значения "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.
{
  // Using splice only
  const arr = ['Jazz', 'Blues'];
  
  arr.splice(arr.length, 0, 'Rock-n-Roll');
  console.log(arr);                               // ['Jazz', 'Blues', 'Rock-n-Roll']
  
  arr.splice(-2, 1, 'Classics');
  console.log(arr);                               // ['Jazz', 'Classics', 'Rock-n-Roll']

  const remArr = arr.splice(0, 1);                // returns an array containing the removed elements
  console.log(remArr[0]);                         // 'Jazz'
  console.log(arr);                               // ['Classics', 'Rock-n-Roll']

  arr.splice(0, 0, 'Rap', 'Reggae');
  console.log(arr);                               // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']
}

{
  // Using alternatives, no splice at all
  const arr = ['Jazz', 'Blues'];
  
  arr.push('Rock-n-Roll');                        // return the new length or th array
  console.log(arr);                               // ['Jazz', 'Blues', 'Rock-n-Roll']
  
  arr.fill('Classics', 1, 2);
  console.log(arr);                               // ['Jazz', 'Classics', 'Rock-n-Roll']

  const rem = arr.shift();                        //  returns the removed element
  console.log(rem);                               // 'Jazz'
  console.log(arr);                               // ['Classics', 'Rock-n-Roll']

  arr.unshift('Rap', 'Reggae');                   // note: the sequence is preserved
  console.log(arr);                               // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']
}

// Task 09
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.
{
  const str = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';
  const rs = [...str].filter(e => e === 'r').length;
  const ks = Array.from(str).filter(e => e === 'k').length;
  const ts = str.split('').filter(e => e === 't').length;         // strings alternative to Array.from()
  const ds = str.split('d').length - 1;                           // also works if d is first or last
  console.log(`Rs: ${rs}, Ks: ${ks}, Ts: ${ts}, Ds: ${ds}`);


}

// Task 10
// RU: Создать массив любых элментов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.
{
  const arr = Array(10).fill().map((e, i) => i);                // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(arr[Math.floor(Math.random() * arr.length)]);     // random element
}

// Task 11
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.
{
  const size = 3;
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i].push(j + 1 + size * i);
    }
  }
  console.log(arr);   // [[1,2,3], [4,5,6], [7,8,9]]
}


// Task 12
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.
{
  const size = 3;
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i].push(j + 1 + size * i);
    }
  }
  console.log(arr);                                                 // [[1,2,3], [4,5,6], [7,8,9]]

  const flatES6 = arr.reduce((agg, cur) => [...agg, ...cur], []);
  console.log(flatES6);                                             // [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const flatES5 = arr.reduce((agg, cur) => agg.concat(cur), []);
  console.log(flatES5);                                             // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}


// Task 13
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.
{
  const arr = Array(10).fill().map((e, i) => i);        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const partial = arr.slice(2, 5);
  console.log(partial);                                 // [2, 3, 4]
}

// Task 14
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in tha array and disply it in the console.
{
  const arr = Array(10).fill().map((e, i) => i);    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const idx = arr.indexOf(4);
  console.log(idx);                                 // 4

  const badIdx = arr.indexOf(42);
  console.log(badIdx);                              // -1
}

// Task 15
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.
{
  const arr = [1, 3, 7, 3, 8, 2, 3, 2, 6, 5];     // 3s and 2s are multiple

  // Using set constructor or array spread
  const unique = [...new Set(arr)];               // new Set() constructor receives an iterable and removes duplicates, then we spread the set back into array
  console.log(unique);                            // [1, 3, 7, 8, 2, 6, 5]

  // Using filter and indexOf
  const unique2 = arr.filter((e, i) => arr.indexOf(e) === i);
  console.log(unique2);

  // Using reduce and includes
  const unique3 = arr.reduce((agg, e) => agg.includes(e) ? agg : [...agg, e], []);
  console.log(unique3);
}

// Task 16
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.
{
  const arr = 'hello world'.split('');    // 'l's, 'o's are multiple

  const marked = arr.reduce((agg, e, i) => arr.indexOf(e) === arr.lastIndexOf(e) ? [...agg, e] : [...agg, '*'], []);

  console.log(marked);                    // ["h", "e", "*", "*", "*", " ", "w", "*", "r", "*", "d"]
}



// Task 17
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.
{
  const arr = [0, 2, 5, 8, 16, 42, 254];

  // Number.prototype.toString()
  // numObj.toString([radix])
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  const bin = arr.map(e => e.toString(2));      // ["0", "10", "101", "1000", "10000", "101010", "11111110"]       
  const oct = arr.map(e => e.toString(8));      // ["0", "2", "5", "10", "20", "52", "376"]      
  const hex = arr.map(e => e.toString(16));     // ["0", "2", "5", "8", "10", "2a", "fe"]

  console.log(bin);
  console.log(oct);
  console.log(hex);
}

// Task 18
// RU: Получить из строки «a big brown fox jumps over the lazy dog» массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string «a big brown fox jumps over the lazy dog».
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.
{
  const str = 'a big brown fox jumps over the lazy dog';
  const arr = str.split(' ').filter(e => e.length < 4);
  console.log(arr);                                        // ["a", "big", "fox", "the", "dog"]
}

// Task 19
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.
{
  const mixed = ['a', 1, 'b', 2, 'c'];
  const numbers = [1, 2, 3, 4, 5];
  const strings = ['a', 'b', 'c', 'd'];

  const stringsOnly = (arr) => arr.every(e => typeof e === 'string');

  console.log(stringsOnly(mixed));      // false
  console.log(stringsOnly(numbers));    // false
  console.log(stringsOnly(strings));    // true
}

// Task 20
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.
{
  const arr = Array(20).fill().map((e, i) => i);      // [0, 1, 2, ..., 19]

  const binarySearch = (arr, value) => {
    if (!arr.length || value < arr[0] || value > arr[arr.length - 1]) {
      return -1;
    }

    let curIdx = 0;
    let curVal = arr[curIdx];

    if (curVal === value) {
      return curIdx;
    }

    let subArr = [...arr];                                // arr.slice()
    let baseIdx = curIdx;                                 // base index of the current slice

    while (subArr.length > 1 && curVal !== value) {
      curIdx = Math.floor(subArr.length / 2);
      curVal = subArr[curIdx];

      if (curVal === value) {
        return baseIdx + curIdx;
      }
    
      subArr = value < curVal ? subArr.slice(0, curIdx) : subArr.slice(curIdx);
      baseIdx = value < curVal ? baseIdx : baseIdx + curIdx;
    }
    return -1;
  }

  console.log(binarySearch(arr, 17));     // 17
}
