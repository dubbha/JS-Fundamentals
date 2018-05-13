console.log('Object Date');

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
http://learn.javascript.ru/datetime

*/

// Task 1
// RU: Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy и dd Month yyyy
{
  const now = new Date();

  const dd = (now.getDate() + '').padStart(2, '0');
  const mm = ((now.getMonth() + 1) + '').padStart(2, '0');
  const yyyy = now.getFullYear();

  console.log(`${dd}.${mm}.${yyyy}`);
}


// Task 2
// RU: Создать объект Date из строки '15.03.2025'.
// EN: Create an object Date from the string '15.03.2025'.
{
  const parts = '15.03.2025'.split('.').map(e => +e);       // explicitly converting to numbers
  const date = new Date(parts[2], parts[1] - 1, parts[0]);  // though Date would survive the numeric strings

  console.log(date);
}

// Task 3
// RU: Создать объект Date, который содержит:
//     1. завтрашнюю дату,
//     2. первое число текущего месяца,
//     3. последнее число текущего месяца
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month
{
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const tomorrow = new Date(year, month, day + 1);
  const curMonthFirstDay = new Date(year, month, 1);
  const curMonthLastDay = new Date(year, month + 1, 0);   // zeroth day next month == last day of current month

  console.log(`${'tomorrow'.padEnd(18)} ${tomorrow}`);
  console.log(`${'curMonthFirstDay'.padEnd(18)} ${curMonthFirstDay}`);
  console.log(`${'curMonthLastDay'.padEnd(18)} ${curMonthLastDay}`);
}

// Task 4
// RU: Подсчитать время суммирования чисел от 1 до 1000.
// EN: Calculate the time of summing numbers from 1 to 1000.

// Using Date.now()
{
  let forLoopTime;
  let arrayFillReduceTime;
  let arrayFillMapReduceTime;

  let start;
  
  start = Date.now();       // unix epoch milliseconds, same as +new Date()

  let sum = 0;
  for(let i = 1; i <= 1000000; i++) {
      sum += i;
  }

  forLoopTime = Date.now() - start;
  

  start = Date.now();

  const sum2 = Array(1000000).fill().reduce((acc, e, i) => acc + i + 1, 0);

  arrayFillReduceTime = Date.now() - start;


  start = Date.now();

  const sum3 = Array(1000000).fill().map((e, i) => +i + 1).reduce((acc, e) => acc + e, 0);

  arrayFillMapReduceTime = Date.now() - start;


  console.log(`for loop took ${forLoopTime} ms`);
  console.log(`Array().fill().reduce() used ${arrayFillReduceTime} ms`);
  console.log(`Array().fill().map().reduce() used ${arrayFillMapReduceTime} ms`);

}

// Using performance.now()
// exists in browsers, much more accurate due to higher precision [preferred]
{
  let start;
  
  start = performance.now();       // unix epoch milliseconds, same as +new Date()

  let sum = 0;
  for(let i = 1; i <= 1000000; i++) {
      sum += i;
  }

  forLoopTime = performance.now() - start;

  
  start = performance.now();

  const sum2 = Array(1000000).fill().reduce((acc, e, i) => acc + i + 1, 0);

  arrayFillReduceTime = performance.now() - start;


  start = performance.now();

  const sum3 = Array(1000000).fill().map((e, i) => +i + 1).reduce((acc, e) => acc + e, 0);

  arrayFillMapReduceTime = performance.now() - start;


  console.log(`for loop took ${forLoopTime} ms`);
  console.log(`Array(n).fill().reduce() used ${arrayFillReduceTime} ms`);
  console.log(`Array().fill().map().reduce() used ${arrayFillMapReduceTime} ms`);
}

// Benchmarking
// A better benchmarking is to run the functions many times,
// switching between them to avoid current CPU load from affecting the performance
{
  const forLoop = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
  }

  const arrayFillReduce = (num) =>
    Array(num).fill().reduce((acc, e, i) => acc + i + 1, 0);

  const arrayFillMapReduce = (num) =>
    Array(num).fill().map((e, i) => +i + 1).reduce((acc, e) => acc + e, 0);

  const times = 15;                   // time to run the benchmark, the higher the better
  const num = 1000000;                // each function should sum up to this number

  let forLoopTotalTime = 0;           // total time all the runs took
  let arrayFillReduceTotalTime = 0;
  let arrayFillMapReduceTotalTime = 0;

  let start;                            // var used to store starting times
  for (let i = 0; i < times; i++) {
    start = performance.now();
    forLoop(num);
    forLoopTotalTime += performance.now() - start;

    start = performance.now();
    arrayFillReduce(num);
    arrayFillReduceTotalTime += performance.now() - start;

    start = performance.now();
    arrayFillMapReduce(num);
    arrayFillMapReduceTotalTime += performance.now() - start;
  }

  const forLoopAvgTime = forLoopTotalTime / times;
  const arrayFillReduceAvgTime = arrayFillReduceTotalTime / times;
  const arrayFillMapReduceAvgTime = arrayFillMapReduceTotalTime / times;

  console.log(`forLoop on average took ${forLoopAvgTime} msecs`);
  console.log(`arrayFillReduce on average took ${arrayFillReduceAvgTime} msecs`);
  console.log(`arrayFillMapReduce on average took ${arrayFillMapReduceAvgTime} msecs`);

}

// Task 5
// RU: Подсчитать количество дней с текущей даты до Нового года.
// EN: Calculate the number of days from the current date to the New Year.

// Pass two arguments to Date()
{
    const now = new Date();
    const ny = new Date(now.getFullYear() + 1, 0);      // Must pass at least two params, otherwise
                                                        // single param will be considered epoch msecs.
                                                        // Or you could explicitly convert it to string:
                                                        // new Date(`${now.getFullYear()}`);

    const msecsLeft = ny.getTime() - now.getTime();
    
    console.log(`Days left till New Year: ${Math.floor(msecsLeft / (1000 * 60 * 60* 24))}`)
}

// Explicitly convert a single argument to string
// If a single argument is a string, Date() uses Date.parse to parse it
{
  const now = new Date();
  const ny = new Date(`${now.getFullYear() + 1}`);     // explicitly convert argument to string

  const msecsLeft = ny.getTime() - now.getTime();
  
  console.log(`Days left till New Year: ${Math.floor(msecsLeft / (1000 * 60 * 60* 24))}`)
}
