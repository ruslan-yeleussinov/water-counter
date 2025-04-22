import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const date = document.querySelector('.title');
date.innerHTML = dayjs().format('MMMM D');

const personOne = "Ulpan";
const personTwo = "Ruslan";

// personOne

const addButtonPersonOne = document.querySelector('.js-add-button-person-1');
const timeListPersonOne = document.querySelector('.js-time-list-person-1');
const resetButtonPersonOne = document.querySelector('.js-reset-button-person-1');
const halfButtonPersonOne = document.querySelector('.js-half-btn-person-1');
const oneButtonPersonOne = document.querySelector('.js-one-btn-person-1');
const totalWaterPersonOne = document.querySelector('.js-person-1-total');
const foodButtonPersonOne = document.querySelector('.js-food-person-1');
const fruitsButtonPersonOne = document.querySelector('.js-fruits-person-1');

// Function to save times to localStorage
const saveTimesPersonOne = (times) => {
  localStorage.setItem('timesArrayPersonOne', JSON.stringify(times));
};

// Function to get times from localStorage
const getTimesPersonOne = () => {
  const times = localStorage.getItem('timesArrayPersonOne');
  return times ? JSON.parse(times) : [];
};

// Function to render times list
const renderTimesPersonOne = (times) => {
  timeListPersonOne.innerHTML = '';
  times.forEach((time) => {
    const li = document.createElement('li');
    li.textContent = time;
    timeListPersonOne.appendChild(li);
  });
};

// Load and render times on page load
let timesArrayPersonOne = getTimesPersonOne();
renderTimesPersonOne(timesArrayPersonOne);

// Get the total water count from localStorage
let totalWaterCountPersonOne = JSON.parse(localStorage.getItem('totalWaterCountPersonOne')) || 0;
totalWaterPersonOne.innerHTML = `${personOne} ${totalWaterCountPersonOne}`;

function addTotalPersonOne(inputValuePersonOne) {
  if (!isNaN(inputValuePersonOne) && inputValuePersonOne.trim() !== '') {
    totalWaterCountPersonOne += parseFloat(inputValuePersonOne);
  } else {
    console.log('Input value is not a number');
  }
  totalWaterPersonOne.innerHTML = `${personOne} ${totalWaterCountPersonOne}`;
  localStorage.setItem('totalWaterCountPersonOne', JSON.stringify(totalWaterCountPersonOne));
}

addButtonPersonOne.addEventListener('click', () => {
  const inputElementPersonOne = document.querySelector('.js-input-person-1');
  const inputValuePersonOne = inputElementPersonOne.value;
  
  const currentTimePersonOne = dayjs().format('HH:mm');
  timesArrayPersonOne.push(`${currentTimePersonOne} - ${inputValuePersonOne}`);

  saveTimesPersonOne(timesArrayPersonOne);
  renderTimesPersonOne(timesArrayPersonOne); 
  addTotalPersonOne(inputValuePersonOne);

  inputElementPersonOne.value = '';
});

halfButtonPersonOne.addEventListener('click', () => {
  const halfButtonPersonOne = document.querySelector('.js-half-btn-person-1');
  const halfGlassPersonOne = halfButtonPersonOne.innerHTML;

  const currentTimePersonOne = dayjs().format('HH:mm');
  timesArrayPersonOne.push(`${currentTimePersonOne} - 0.5`);
  
  saveTimesPersonOne(timesArrayPersonOne);
  renderTimesPersonOne(timesArrayPersonOne);
  addTotalPersonOne(halfGlassPersonOne);
});

oneButtonPersonOne.addEventListener('click', () => {
  const oneButtonPersonOne = document.querySelector('.js-one-btn-person-1');
  const oneGlassPersonOne = oneButtonPersonOne.innerHTML;

  const currentTimePersonOne = dayjs().format('HH:mm');
  timesArrayPersonOne.push(`${currentTimePersonOne} - 1`);
  
  saveTimesPersonOne(timesArrayPersonOne);
  renderTimesPersonOne(timesArrayPersonOne);
  addTotalPersonOne(oneGlassPersonOne);
});

foodButtonPersonOne.addEventListener('click', () => {
  const currentTimePersonOne = dayjs().format('HH:mm');
  timesArrayPersonOne.push(`${currentTimePersonOne} - Обед`);
  
  saveTimesPersonOne(timesArrayPersonOne);
  renderTimesPersonOne(timesArrayPersonOne);
});

fruitsButtonPersonOne.addEventListener('click', () => {
  const currentTimePersonOne = dayjs().format('HH:mm');
  timesArrayPersonOne.push(`${currentTimePersonOne} - Фрукты`);
  
  saveTimesPersonOne(timesArrayPersonOne);
  renderTimesPersonOne(timesArrayPersonOne);
});

resetButtonPersonOne.addEventListener('click', () => {
  localStorage.removeItem('timesArrayPersonOne');
  localStorage.removeItem('totalWaterCountPersonOne');
  timesArrayPersonOne = [];
  totalWaterCountPersonOne = 0;
  totalWaterPersonOne.innerHTML = `${personOne} 0`;
  renderTimesPersonOne(timesArrayPersonOne);
});

// personTwo

const addButtonPersonTwo = document.querySelector('.js-add-button-person-2');
const timeListPersonTwo = document.querySelector('.js-time-list-person-2');
const resetButtonPersonTwo = document.querySelector('.js-reset-button-person-2');
const halfButtonPersonTwo = document.querySelector('.js-half-btn-person-2');
const oneButtonPersonTwo = document.querySelector('.js-one-btn-person-2');
const totalWaterPersonTwo = document.querySelector('.js-person-2-total');
const foodButtonPersonTwo = document.querySelector('.js-food-person-2');
const fruitsButtonPersonTwo = document.querySelector('.js-fruits-person-2');

// Function to save times to localStorage
const saveTimesPersonTwo = (times) => {
  localStorage.setItem('timesArrayPersonTwo', JSON.stringify(times));
};

// Function to get times from localStorage
const getTimesPersonTwo = () => {
  const times = localStorage.getItem('timesArrayPersonTwo');
  return times ? JSON.parse(times) : [];
};

// Function to render times list
const renderTimesPersonTwo = (times) => {
  timeListPersonTwo.innerHTML = '';
  times.forEach((time) => {
    const li = document.createElement('li');
    li.textContent = time;
    timeListPersonTwo.appendChild(li);
  });
};

// Load and render times on page load
let timesArrayPersonTwo = getTimesPersonTwo();
renderTimesPersonTwo(timesArrayPersonTwo);

// Get the total water count from localStorage
let totalWaterCountPersonTwo = JSON.parse(localStorage.getItem('totalWaterCountPersonTwo')) || 0;
totalWaterPersonTwo.innerHTML = `${personTwo} ${totalWaterCountPersonTwo}`;

function addTotalPersonTwo(inputValuePersonTwo) {
  if (!isNaN(inputValuePersonTwo) && inputValuePersonTwo.trim() !== '') {
    totalWaterCountPersonTwo += parseFloat(inputValuePersonTwo);
  } else {
    console.log('Input value is not a number');
  }
  totalWaterPersonTwo.innerHTML = `${personTwo} ${totalWaterCountPersonTwo}`;
  localStorage.setItem('totalWaterCountPersonTwo', JSON.stringify(totalWaterCountPersonTwo));
}

addButtonPersonTwo.addEventListener('click', () => {
  const inputElementPersonTwo = document.querySelector('.js-input-person-2');
  const inputValuePersonTwo = inputElementPersonTwo.value;
  
  const currentTimePersonTwo = dayjs().format('HH:mm');
  timesArrayPersonTwo.push(`${currentTimePersonTwo} - ${inputValuePersonTwo}`);

  saveTimesPersonTwo(timesArrayPersonTwo);
  renderTimesPersonTwo(timesArrayPersonTwo); 
  addTotalPersonTwo(inputValuePersonTwo);

  inputElementPersonTwo.value = '';
});

halfButtonPersonTwo.addEventListener('click', () => {
  const halfButtonPersonTwo = document.querySelector('.js-half-btn-person-2');
  const halfGlassPersonTwo = halfButtonPersonTwo.innerHTML;

  const currentTimePersonTwo = dayjs().format('HH:mm');
  timesArrayPersonTwo.push(`${currentTimePersonTwo} - 0.5`);
  
  saveTimesPersonTwo(timesArrayPersonTwo);
  renderTimesPersonTwo(timesArrayPersonTwo);
  addTotalPersonTwo(halfGlassPersonTwo);
});

oneButtonPersonTwo.addEventListener('click', () => {
  const oneButtonPersonTwo = document.querySelector('.js-one-btn-person-2');
  const oneGlassPersonTwo = oneButtonPersonTwo.innerHTML;

  const currentTimePersonTwo = dayjs().format('HH:mm');
  timesArrayPersonTwo.push(`${currentTimePersonTwo} - 1`);
  
  saveTimesPersonTwo(timesArrayPersonTwo);
  renderTimesPersonTwo(timesArrayPersonTwo);
  addTotalPersonTwo(oneGlassPersonTwo);
});

foodButtonPersonTwo.addEventListener('click', () => {
  const currentTimePersonTwo = dayjs().format('HH:mm');
  timesArrayPersonTwo.push(`${currentTimePersonTwo} - Обед`);
  
  saveTimesPersonTwo(timesArrayPersonTwo);
  renderTimesPersonTwo(timesArrayPersonTwo);
});

fruitsButtonPersonTwo.addEventListener('click', () => {
  const currentTimePersonTwo = dayjs().format('HH:mm');
  timesArrayPersonTwo.push(`${currentTimePersonTwo} - Фрукты`);
  
  saveTimesPersonTwo(timesArrayPersonTwo);
  renderTimesPersonTwo(timesArrayPersonTwo);
});

resetButtonPersonTwo.addEventListener('click', () => {
  localStorage.removeItem('timesArrayPersonTwo');
  localStorage.removeItem('totalWaterCountPersonTwo');
  timesArrayPersonTwo = [];
  totalWaterCountPersonTwo = 0;
  totalWaterPersonTwo.innerHTML = `${personTwo} 0`;
  renderTimesPersonTwo(timesArrayPersonTwo);
});