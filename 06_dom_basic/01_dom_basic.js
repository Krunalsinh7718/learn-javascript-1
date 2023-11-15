//html log
console.log(document);
//methods log
console.dir(document);

//get h1 tag by tag name
console.log("h1 tag by tag => ",document.getElementsByTagName('h1')[0]);

//get h1 tag by class name
console.log("h1 tag by class => ",document.getElementsByClassName('main-title')[0]);

//get h1 tag by id
console.log("h1 tag by id => ",document.getElementById('title_1'));

//get h1 tag query selector
console.log("h1 tag by query selector => ",document.querySelector('#title_1'));

//get sub title textContent
console.log("sub title textContent => ",document.querySelector('.sub-title').textContent);

//get sub title innerText 
console.log("sub title innerText => ",document.querySelector('.sub-title').innerText);

//get sub title innerHtml 
console.log("sub title innerHtml => ",document.querySelector('.sub-title').innerHTML);

//get h1 tag title class attribute 
console.log("h1 class => ",document.querySelector('.main-title').getAttribute('class'));

//get h1 set title attribute
document.querySelector('.main-title').setAttribute('title', "Page main title");

//get li node list and change list text
const list = document.querySelector('ul');
const listItems = list.querySelectorAll('li');

listItems.forEach( (e,i) => e.innerText = `text ${i}` )



