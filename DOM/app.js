'use strict';

// DOM Manipulation
/* **** HOW TO SELECT ELEMENTS  *** */

// // GetElementById()

// const title = document.getElementById('main-heding');
// console.log(title);



// // GetElementByClassName()
// // const lists = document.getElementsByClassName('list-items');

// // for(let i = 0; i < lists.length; i++){
// //     console.log(lists[i]);
// // }


// // getelementByTagName()

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);


// // querySelector() : Selects, tags and attributes like id, classes. Selects on the first item

// // const container = document.querySelector('div');
// // console.log(container);


// // querySelectorAll() : Same as above but selects all the items of same name.
// const allDivs = document.querySelectorAll('div');
// console.log(allDivs);
 
/* **** HOW TO CHANGE STYLE OF A DOCUMENT *** */

// const t = document.querySelector('#main-heding');
// t.style.color = 'green';
// t.style.fontSize = '30px';

// const lists = document.querySelectorAll('.list-items');

// for(let i = 0; i < lists.length; i++){

//     lists[i].style.color = 'yellow';
// }

/* **** CREATEING ELEMENTS *** */
// we can create elements from our JavaScript file 

// const ulEl = document.querySelector('ul');
// console.log(ulEl);

// const liEl = document.createElement('li');
// liEl.innerText = 'Lord rings';
// ulEl.append(liEl);


// // Difference between the modifying properties 
// const firstItem = document.querySelector('.list-items');
// console.log(firstItem.innerText);
// console.log(firstItem.innerHTML);
// console.log(firstItem.textContent);

/* ****** MODIFYING ATTRIBUTES & CLASSES  *******/

// liEl.setAttribute('class', 'list-items');
// liEl.removeAttribute('class');

// using classList

// liEl.classList.add('list-items');
// liEl.classList.remove('list-items');

// check if list element contains a class of 'list-items'

// console.log(liEl.classList.contains('list-items'));

// How to remove elements
// liEl.remove();


// const tryEl = document.getElementsByClassName('list-items');

// tryEl[1].remove();
// console.log(tryEl);


/****   TRANVERSE THE DOM ******* */

// Parent Node Traversal
let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// -- Child Node Traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

//
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//-- Sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling)

