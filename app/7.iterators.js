// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.
{
  const colors = {
    green: '#0e0',
    orange: '#f50',
    pink: '#e07'
  };
  
  const keyValueIterable = (target) => {
    const entries = Object.entries(target);
    
    return {
      [Symbol.iterator]() {
        return {
          next() {
            const done = !entries.length;
            const value = done ? undefined : entries.shift();
            return { value, done };
          }
        }
      }
    }
  }
  
  const itColors = keyValueIterable(colors);
  for (const [, color] of itColors) {
    console.log(color);
  }  
}



// Task 2
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random
{
  const random = {
    [Symbol.iterator]: () => ({
      next: () => ({
        value: Math.random()
      })
    })
  };
  
  const take = (sequence, amount) => {
    const iterable = sequence[Symbol.iterator]();
    const arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push(iterable.next().value);
    }
    return arr;
  }
  
  const subsequence = [...take(random, 3)];
  console.log(subsequence);  
}


// Task 3
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

// http://exploringjs.com/es6/ch_iteration.html#_iterators-that-are-iterable
// http://jsrocks.org/2015/09/javascript-iterables-and-iterators
{
  const Fib = {
    a1: 1,
    a2: 1,
  
    next() {              // iterator - The Iterator interface requires the implementation of a next() method.
      cur = this.a1;
      this.a1 = this.a2;
      this.a2 = cur + this.a1;
  
      return {
        value: cur,
        done: false,
      }
    },
  
    [Symbol.iterator]() { // iterable - The Iterable interface requires the implementation of a [Symbol.iterator]() method;
      return this;
    },
  
    return() {  // http://exploringjs.com/es6/ch_iteration.html#_optional-iterator-methods-return-and-throw
      // you could clean up some external resources here
      return { done: true };
    }
  };
  
  Fib[Symbol.iterator]() === Fib;   // true -- an iterable iterator pattern
  
  for (let v of Fib) {      // 3 ... 8
    console.log(v);
    if (v > 5) break;      // break method resets the counter
  }
  
  console.log('because iterator is iterable, you can continue an iteration in another loop');
  
  for (let v of Fib) {      // 13 ... 55
    console.log(v);
    if (v > 50) break;      // break method resets the counter
  }
}


// Task 4
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
{
  Number.prototype[Symbol.iterator] = function() {
    const initNumber = this;
    let curNumber = 0;
  
    return {
      next() {
        const done = Math.abs(curNumber) > Math.abs(initNumber);
        const value = done ? undefined : (initNumber > 0 ? curNumber++ : curNumber--);
        return { value, done };
      }
    }
  }
  
  console.log([...-5]);
  console.log([...5]);  
}
