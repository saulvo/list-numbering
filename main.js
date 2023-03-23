function addNumber(element, level) {
  const span = document.createElement('span');
  span.textContent = `${level} `;
  span.classList.add('number');
  element.prepend(span);

  const innerList = element.querySelectorAll('ol > li');
  if (innerList && innerList.length > 0) {
    innerList.forEach((el, idx) => {
      const sp = el.querySelector('span');
      if (!sp) addNumber(el, `${level}.${idx + 1}`);
    });
  }
}

const simpleList = document.querySelectorAll('#simple-list > li');
if (simpleList)
  simpleList.forEach((element, idx) => {
    addNumber(element, idx + 1);
  });

const nestedList = document.querySelectorAll('#nested-list > li');
if (nestedList)
  nestedList.forEach((element, idx) => {
    addNumber(element, idx + 1);
  });
