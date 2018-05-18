console.log('DOM');

// Task 01
// Найти элемент с id= "t01". Вывести в консоль.
// Найти родительский элемент и вывести в консоль.
// Найти дочерние ноды, если они есть, и вывести в консоль
// названия и тип нод.
{
  const el = document.querySelector('#t01');      // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
                                                  // document.getElementById() could also be used

  const parent = el.parentElement;                // https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement

  if (el.childElementCount) {                           // https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount
    for (let i = 0; i < el.childElementCount; i++) {
      const { tagName, nodeType } = el.children[i];
      console.log(tagName);      // tag name
      console.log(nodeType);     // node type number
      console.log(nodeTypesMap(nodeType));     // node type number

    }
  } else {
    console.log('no children');
  }

  function nodeTypesMap(nodeTypeCode) {   // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
    switch (nodeTypeCode) {
      case Node.ELEMENT_NODE:                   // 1
        return 'ELEMENT_NODE: An Element node such as <p> or <div>.';
      case Node.TEXT_NODE:                      // 3
        return 'TEXT_NODE: The actual Text of Element or Attr.';
      case Node.PROCESSING_INSTRUCTION_NODE:    // 7
        return 'PROCESSING_INSTRUCTION_NODE: A ProcessingInstruction of an XML document such as <?xml-stylesheet ... ?> declaration.';
      case Node.COMMENT_NODE:                   // 8
        return 'COMMENT_NODE: A Comment node.';
      case Node.DOCUMENT_NODE:                  // 9
        return 'DOCUMENT_NODE: A Document node.';
      case Node.DOCUMENT_TYPE_NODE:             // 10
        return 'DOCUMENT_TYPE_NODE: A DocumentType node e.g. <!DOCTYPE html> for HTML5 documents.';
      case Node.DOCUMENT_FRAGMENT_NODE:         // 11
        return 'DOCUMENT_FRAGMENT_NODE: A DocumentFragment node.';
    }
  }
}


// Task 02
// Подсчитать количество <li> элементов на странице. Для поиска элементов использовать
// getElementsByTagName(). Вывести в консоль.
// Добавить еще один элемент в список и вывести снова их количество.
{
  const lis = document.getElementsByTagName('li');              // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
  console.log('number of <li>s', lis.length);                   // 9

  const ul = document.getElementById('u01');

  const element = document.createElement('li');                 // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  const textNode = document.createTextNode('new li text');      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
  element.appendChild(textNode);                                // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  ul.appendChild(element);

  console.log('number of <li>s after addition', lis.length);    // 10 -- getElementsByTagName returns a live collection
  console.log(' ... getElementsByTagName is a live collection');
}


// Task 03
// Получить элементы <li> используя метод querySelectorAll() и вывети их в консоль
// Добавить новый <li> и снова вывести в консоль
{
  const lis = document.querySelectorAll('li');
  console.log('number of <li>s', lis.length);                   // 10

  const ul = document.getElementById('u01');

  const element = document.createElement('li');
  const textNode = document.createTextNode('another li text');
  element.appendChild(textNode);
  ul.appendChild(element);

  console.log('number of <li>s after addition', lis.length);    // still 10 -- querySelectorAll returned collection is not live
  console.log(' ... querySelectorAll is not a live collection');
}


// Task 04
// Найти все первые параграфы в каждом диве и установить цвет фона #ffff00
{
  const divs = document.getElementsByTagName('div');

  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // Covert HTMLCollection (actually a DOM collection, called HTMLCollection for historical reasons)
  // into an array, so that don't have to use a for loop on it
  const divsArr = Array.prototype.slice.call(divs);
  divsArr.forEach(div => {
    const firstP = div.getElementsByTagName('p')[0];
    if (firstP) {
      firstP.style.backgroundColor = '#ffff00';
    }
  });
}


// Task 05
// Подсчитать сумму строки в таблице и вывести ее в последнюю ячейку
{
  const table = document.querySelector('table');
  const row = table.querySelector('tr');
  const cells = row.querySelectorAll('td');               // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  const cellsArr = Array.prototype.slice.call(cells);     // make HTMLCollection a real array

  const sum = cellsArr.reduce((agg, { innerText }) =>     // cell.innerText
    agg + (isNaN(parseFloat(innerText)) ? 0 : parseFloat(innerText)), 0);

  cellsArr[cellsArr.length - 1].innerText = sum.toFixed(1);
}


// Task 06
// Вывести значения всех атрибутов элемента с идентификатором t06
{
  const el = document.querySelector('#t06');
  const attrs = el.attributes;                  // live attributes collection: https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
  console.log('attrs', attrs);

  for (let i = 0; i < attrs.length; i++) {
    console.log(`${attrs[i].name} = ${attrs[i].value}`);
  }
}


// Task 07
// Получить объект, который описывает стили, которые применены к элементу на странице
// Вывести объект в консоль. Использовать window.getComputedStyle().
{
  const el = document.getElementById('t06');
  console.log(window.getComputedStyle(el));   // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
                                              // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration

}


// Task 08
// Установите в качестве контента элемента с идентификатором t08 следующий параграф
// <p>This is a paragraph</>
{
  const el = document.querySelector('#t08');                                              // no need for live collection
  console.log(el.innerHTML);                                                              // 'Click me to add new div'
  el.innerHTML = '<p>This is a paragraph. Click me to add new div before this one</>';    // for the next task
  console.log(el.innerHTML);                                                              // <p>This is a paragraph</>
}

// Task 09
// Создайте элемент <div class='c09' data-class='c09'> с некоторым текстовым контентом, который получить от пользователя,
// с помощью prompt, перед элементом с идентификатором t08,
// когда пользователь кликает на нем
{
  const el = document.querySelector('#t08');

  el.addEventListener('click', () => {
    const newEl = document.createElement('div');      // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    newEl.setAttribute('class', 'c09');               // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    newEl.setAttribute('data-class', 'c09');

    const text = prompt('Please enter text content');

    const textNode = document.createTextNode(text);
    newEl.appendChild(textNode);

    el.parentNode.insertBefore(newEl, el);            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  });

}


// Task 10
// Удалите у элемента с идентификатором t06 атрибут role
// Удалите кнопку с идентификатором btn, когда пользователь кликает по ней
{
  const el = document.querySelector('#t06');

  console.log('with role:', el.getAttribute('role'));     // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
  el.removeAttribute('role');                             // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
  console.log('without role:', el.getAttribute('role'));
}
