console.log('Objects');

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

# Object.prototype methods

Object.prototype.hasOwnProperty()           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Object.prototype.isPrototypeOf()            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
Object.prototype.propertyIsEnumerable()     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
Object.prototype.toString()                 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Object.prototype.valueOf()                  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf


# Object constructor methods (not on prototype or instances)

Object.assign()                     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Object.create()                     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
Object.defineProperty()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperties()           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
Object.freeze()                     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
Object.seal()                       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
Object.preventExtensions()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

Object.getOwnPropertyDescriptor()   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
Object.getOwnPropertyDescriptors()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
Object.getOwnPropertyNames()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
Object.getOwnPropertySymbols()      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

Object.getPrototypeOf()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
Object.setPrototypeOf()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

Object.is()                         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
Object.isExtensible()               https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
Object.isFrozen()                   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
Object.isSealed()                   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed

Object.keys()                       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Object.values()                     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Object.entries()                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

*/

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// ES5
(function() {   // IIFE to imitate block in ES5, so that we can use same var names multiple times

  function Tune(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  Tune.prototype.concat = function() {
      return this.title + ' by ' + this.artist;
  }

  var tune1 = new Tune('title1', 'artist1');
  var tune2 = new Tune('title2', 'artist2');

  console.log(tune1.concat());
  console.log(tune2.concat());

  console.log(tune1.title);   // props are public
  console.log(tune2.artist);

})();

// ES6
{
  class Tune {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
    }

    concat() {
      return `${this.title} by ${this.artist}`;
    }
  }

  const tune1 = new Tune('title1es6', 'artist1es6');
  const tune2 = new Tune('title2es6', 'artist2es6');

  console.log(tune1.concat());
  console.log(tune2.concat());

  console.log(tune1.title);     // props are public
  console.log(tune2.artist);
}

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с привытными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Mathod should return the concatenation of values of propeties title and artist.
//     Create a few objects. Call their method concat().

// ES5 - using this in the constructor
(function() {

  function Tune(title, artist) {
    this.concat = function() {
      return title + ' by ' + artist;    // title and artist are taken from closure, kind of private
    }
  }

  var tune1 = new Tune('title1', 'artist1');
  var tune2 = new Tune('title2', 'artist2');

  console.log(tune1.concat());    // title1 by artist1
  console.log(tune2.concat());    // title1 by artist1

  console.log(tune1.title);        // undefined
  console.log(tune2.artist);       // undefined

})();

// ES5 - replacing this in the constructor
(function() {

  function Tune(title, artist) {
    return {                              // constructor returning an object replaces initial this
      concat: function() {
        return title + ' by ' + artist;    // title and artist are taken from closure, kind of private
      }
    }
  }

  var tune1 = new Tune('title1', 'artist1');
  var tune2 = new Tune('title2', 'artist2');

  console.log(tune1.concat());    // title1 by artist1
  console.log(tune2.concat());    // title1 by artist1

  console.log(tune1.title);        // undefined
  console.log(tune2.artist);       // undefined

})();

// ES6
{
  class Tune {
    constructor(title, artist) {
      this.concat = () => `${title} by ${artist}`     // private props - only exist in the closure
    }
  }

  const tune1 = new Tune('title1es6', 'artist1es6');
  const tune2 = new Tune('title2es6', 'artist2es6');

  console.log(tune1.concat());
  console.log(tune2.concat());

  console.log(tune1.title);     // undefined, props are private
  console.log(tune2.artist);
}

// Task 03
// RU: Расширить прототип объекта String методом exclaim() если его нет в прототипе.
//     Метод должен добавлять знак восклицания к строке и выводить ее в консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and disply it in the console.
{
  String.prototype.exclaim = String.prototype.exclaim || function() { return `${this}!` };    // use existing if any
                                                                                              // we could check if it's a function too
  console.log('hey'.exclaim());    // 'hey!'

  String.prototype.exclaim = String.prototype.exclaim || function() { return `${this}???` };  // won't be overwritten

  console.log('hey'.exclaim());    // 'hey!' - not 'hey???'
}

// Task 04
// RU: Создать функцию-конструктор Book(title, author).
//     Добавить два метода: getTitle, getAuthor.
//     Создать функцию-конструктор TechBook(title, author, category).
//     Передать значения title, author функции-конструктору Book.
//     Добавить два метода: getCategory, getBook – возвращает строку со значениями параметров.
//     Для реализации наследования используйте:
//     1. Object.create()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add two methods: getTitle, getAuthor.
//     Create function-constructor TechBook(title, author, category).
//     Pass the value of title, author to the function-constructor Book.
//     Add two methods: getCategory, getBook - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create()
//     2. Class

// ES5 - Object.create
(function() {

  function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  Book.prototype.getTitle = function() { return this.title }
  Book.prototype.getAuthor = function() { return this.author }

  function TechBook(title, author, category) {
    Book.call(this, title, author);                       // call super constructor

    this.category = category;
  }
  TechBook.prototype = Object.create(Book.prototype);     // copy prototype for inheritance
  TechBook.prototype.constructor = TechBook;              // restore the constructor property

  TechBook.prototype.getCategory = function() { return this.category }    // add method to constructor

  var tb = new TechBook('title', 'author', 'category');

  console.log(tb.getTitle());               // 'title'
  console.log(tb.getAuthor());              // 'author'
  console.log(tb.getCategory());            // 'category'

  console.log(tb);                          // { title: 'title', author: 'author', category: 'category' }

  console.log(tb.constructor);              // function TechBook() {...}
  console.log(Object.getPrototypeOf(tb));   // TechBook.prototype { constructor: f TechBook(), getCategory: f() }

  console.log(tb instanceof TechBook);      // true
  console.log(tb instanceof Book);          // true
  console.log(tb instanceof Object);        // true

})();

// ES6
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return this.title;
    }

    getAuthor() {
      return this.author;
    }
  }

  class TechBook extends Book {
    constructor(title, author, category) {
      super(title, author);     // call super constructor

      this.category = category;
    }

    getCategory() {
      return this.category;
    }
  }

  var tb = new TechBook('title', 'author', 'category');

  console.log(tb.getTitle());               // 'title'
  console.log(tb.getAuthor());              // 'author'
  console.log(tb.getCategory());            // 'category'

  console.log(tb);                          // { title: 'title', author: 'author', category: 'category' }

  console.log(tb.constructor);              // class TechBook extends Book {...}
  console.log(Object.getPrototypeOf(tb));   // TechBook.prototype { constructor: f TechBook(), getCategory: f() }

  console.log(tb instanceof TechBook);      // true
  console.log(tb instanceof Book);          // true
  console.log(tb instanceof Object);        // true

}


// Task 05
// RU: Создайте класс Shape со статическим свойством count.
//     Проинициализируйте это свойство 0.
//     В конструкторе класса увеличивайте count на 1.
//     Создайте производный класс Rectangle. Добавьте метод для подсчета площади.
//     Создайте несколько объектов. Выведите в консоль количество созданных объектов.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     Create a few objects. Display the number of created objects in the console.

// ES5
(function() {

  function Shape() {
    Shape.count += 1;
  }
  Shape.count = 0;    // static property is the property on the class itself

  function Rectangle(width, height) {
    Shape.call(this);   // call super constructor

    this.width = width;
    this.height = height;
  }
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;

  Rectangle.prototype.getArea = function() { return this.width * this.height }

  var r1 = new Rectangle(1, 1);
  console.log(r1.getArea());      // 1

  var r2 = new Rectangle(2, 3);
  console.log(r2.getArea());      // 6

  var r3 = new Rectangle(3, 5);
  console.log(r3.getArea());      // 15

  console.log(Shape.count);       // 3

})();

// ES6
{
  class Shape {
    constructor() {
      Shape.count += 1;
    }
  }
  Shape.count = 0;    // static property is the property on the class itself

  class Rectangle extends Shape {
    constructor(width, height) {
      super();

      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }
  }

  var r1 = new Rectangle(1, 1);
  console.log(r1.getArea());      // 1

  var r2 = new Rectangle(2, 3);
  console.log(r2.getArea());      // 6

  var r3 = new Rectangle(3, 5);
  console.log(r3.getArea());      // 15

  console.log(Shape.count);       // 3

}


// Task 06
// RU: Создать функцию-конструктор Person() для конструирования объектов.
//     Добавить два метода: setFirstName() и setLastName().
//     Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() и setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)

// ES5
(function() {

  function Person() {
    this.firstName = '';
    this.lastName = '';
  }
  Person.prototype.setFirstName = function(firstName) {
    this.firstName = firstName;
    return this;    // make chainable
  }
  Person.prototype.setLastName = function(lastName) {
    this.lastName = lastName;
    return this;    // make chainable
  }
  Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  }

  var person = new Person();
  console.log(person.getFullName());                    // ''

  person.setFirstName('John').setLastName('Doe');
  console.log(person.getFullName());                                 // 'John Doe'

})();

// ES6
{
  class Person {
    constructor() {
      this.firstName = '';
      this.lastName = '';
    }

    setFirstName(firstName) {
      this.firstName = firstName;
      return this;
    }

    setLastName(lastName) {
      this.lastName = lastName;
      return this;
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  var person = new Person();
  console.log(person.getFullName());                    // ''

  person.setFirstName('John').setLastName('Doe');
  console.log(person.getFullName());                                 // 'John Doe'
}

// Task 07
// RU: Cоздать объект data и сконфигурирвать его свойства:
//     1. id: значение = 1, изменяемое.
//     2. type: значение = 'primary', перечисляемое
//     3. category: getter возвращает значение поля _category,
//                  setter устанавливает значение поля _category, перечисляемое, конфигурируемое.
//     Используя for-in вывести свойства объекта в консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display property of an object in the console.

// Using Object.defineProperty()
{
  const data = {};

  Object.defineProperty(data, 'id', { value: 1, writable: true });
  Object.defineProperty(data, 'type', { value: 'primary', enumerable: true });
  Object.defineProperty(data, 'category', {
    get() { return _category; },                // get: function() { return _category; },
    set(category) { _category = category; },    // set: function(category) { _category = category; }
  });

  for (let key in data) {
    console.log(`${key}: ${data[key]}`);        // type = primary -- only enumerables are looped over
  }

  data.category = 'accessories';                // served by setter
  data.category;                                // 'accessories' - returned by getter
}

// Using Object.defineProperties()
{
  const data = {};

  Object.defineProperties(data, {
    id: { value: 1, writable: true },
    type: { value: 'primary', enumerable: true },
    category: {
      get() { return _category; },
      set(category) { _category = category }
    }
  });

  for (let key in data) {
    console.log(`${key}: ${data[key]}`);        // type: primary -- only enumerables are looped over
  }

  data.category = 'stock';                      // served by setter
  console.log(data.category);                   // 'stock' - served by getter
}

// Task 08
// RU: Создать литерал объекта с двумя свойствами. Запретить расширять объект.
// EN: Create object literal with two properties. Deny extend the object.
{
  const obj = { a: 1, b: 2 };

  Object.preventExtensions(obj);

  obj.c = 3;                        // Fails silently
  console.log(obj);                 // { a: 1, b: 2 }

  obj.a = 111;                      // But we may still modify it
  obj.b = 222;
  console.log(obj);                 // { a: 111, b: 222 }

  Object.isExtensible(obj);         // false
}

// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.
{
  class Task {
    constructor(description) {
      this.description = description;
      this.completed = false;
    }

    complete() {
      this.completed = true;
    }
  }

  class TaskList {
    constructor(name) {
      this.name = name;
      this.list = [];
    }
    
    add(task) {
      this.list.push(task);
    }

    remove(task) {
      this.list = this.list.filter(t => t !== task);
    }

    sort(direction = 'asc') {
      switch (direction) {
        case 'asc':
          this.list.sort((a, b) => a.description > b.description ? 1 : -1);
          break;
        case 'desc':
          this.list.sort((a, b) => a.description > b.description ? -1 : 1);
      }
    }

    clear() {
      this.list = [];
    }

    display() {
      return this.list.map(t => `[${t.completed ? 'completed' : 'new'}] ${t.description}`);
    }
  }

  const t1 = new Task('wake up');
  const t2 = new Task('brush teeth');
  const t3 = new Task('develop');
  const t4 = new Task('have fun');
  const t5 = new Task('sleep');

  const l1 = new TaskList('first list');
  l1.add(t1);
  l1.add(t3);
  l1.add(t4);

  console.log({ ...l1.list });   // [{ d: 'wake up', ... }, { d: 'develop', ... }, { d: 'have fun', ... }]

  l1.sort();
  console.log({ ...l1.list });   // [{ d: 'develop', ... }, { d: 'have fun', ... }, { d: 'wake up', ... }]

  l1.sort('desc');
  console.log({ ...l1.list });   // [{ d: 'wake up', ... }, { d: 'have fun', ... }, { d: 'develop', ... }]

  t4.complete();
  console.log(l1.display());     // ["[new] wake up", "[completed] have fun", "[new] develop"]

  l1.remove(t3);
  console.log(l1.display());     // ["[new] wake up", "[completed] have fun"]

  l1.clear();
  console.log(l1.display());     // []
}
