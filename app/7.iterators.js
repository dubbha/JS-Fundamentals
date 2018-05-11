// Task 1
// RU: Написать функцию keyValueIterable(target),
//     которая на вход получает объект и возвращает итерируемый объект.
//     Итерируемый объект позволяет получить пары ключ/значение.
//     Выведите в консоль цвета из объекта colors.
// EN: Create a function keyValueIterable(target)
//     which takes an objects and returns iterable object.
//     Iterable object allows you to get key/value pairs.
//     Display in a console all colors from the object colors.
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



// Task 2
// RU: Написать функцию take(sequence, amount), которая из бесконечного итерируемого объекта random
//     вернет указаное количество элементов.
// EN: Create a function take(sequence, amount), which returns a specified amount of numbers
//     from iterable object random

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

const a = [...take(random, 3)];
console.log(a);



// Task 3
// RU: Написать итерируемый итератор, который возвращает числа Фибоначи
//     Реализовать метод return для остановки итератора с помощью for-of + break
// EN: Create iterable iterator, which produces Fibonacci numbers
//     Implement method return, which allows you to stop iterator using for-of + break

const Fib = {
  [Symbol.iterator]() {
    let a1 = 1;
    let a2 = 1;
    let cur;

    return {
      next() {
        cur = a1;
        a1 = a2;
        a2 = cur + a1;

        return {
          value: cur,
          done: false,
        }
      }
    }
  }
};

for (let v of Fib) {
  console.log(v);
  if (v > 50) break;
}



// Task 4
// RU: Написать итератор для чисел, который позволит получать массивы последовательных целых элементов.
//     Например, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]
// EN: Create iterator for numbers, which allows you to get arrays of sequential integers.
//     Example, [...-3] => [0, -1, -2, -3], [...3] => [0, 1, 2, 3]

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

