console.log('Object Date');

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
{

  const start = Date.now();       // unix epoch milliseconds

  let sum = 0;
  for(let i = 1; i <= 1000000; i++) {
      sum += i;
  }

  console.log(`for loop used ${Date.now() - start} msecs`);      // ~60 msec
  console.log(`sum: ${sum}`);     // 500000500000

  
  const start2 = Date.now();

  const sum2 = Array(1000000).fill().reduce((acc, e, i) => acc + i + 1, 0);

  console.log(`Array(n).fill().reduce() used ${Date.now() - start2} msecs`);  // ~90 msec
  console.log(`sum: ${sum2}`);     // 500000500000


  const start3 = Date.now();

  const sum3 = Array(1000000).fill().map((e, i) => +i + 1).reduce((acc, e) => acc + e, 0);

  console.log(`Array().fill().map().reduce() used ${Date.now() - start3} msecs`);    // 300 msec
  console.log(`sum: ${sum3}`);     // 500000500000

}

// Task 5
// RU: Подсчитать количество дней с текущей даты до Нового года.
// EN: Calculate the number of days from the current date to the New Year.
{
    const now = new Date();
    const ny = new Date(now.getFullYear() + 1, 0);      // must pass at least two params, otherwise a single param will be considered epoch msecs

    console.log(ny);

    console.log(now.getTime());
    console.log('ny.getTime()', ny.getTime());
    const msecsLeft = ny.getTime() - now.getTime();
    console.log(msecsLeft);
    
    console.log(`Days left till New Year: ${Math.floor(msecsLeft / (1000 * 60 * 60* 24))}`)
}