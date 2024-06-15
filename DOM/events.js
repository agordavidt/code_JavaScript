'use strict';

// DOM Manipulation

// Event Listeners allows us to add interactive functionalities to different html elements
// listens to event, like press a key, user clicks button, or element loads

// Direct into the html as an attribute
// JavaScript addeventListerner method

// element.addEVentListerner("click, function");

const butttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('I also love JavaScript');
};

butttonTwo.addEventListener('click', alertBtn);


// Mouseover || move mouse around an element
const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'yellow';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);

