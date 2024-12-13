import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const date = document.querySelector('.title');
date.innerHTML = dayjs().format('MMMM D');

// Ulpan

const addButtonUlpan = document.querySelector('.js-add-button-ulpan');
const timeListUlpan = document.querySelector('.js-time-list-ulpan');
const resetButtonUlpan = document.querySelector('.js-reset-button-ulpan');
const halfButtonUlpan = document.querySelector('.js-half-btn-ulpan');
const oneButtonUlpan = document.querySelector('.js-one-btn-ulpan');
const totalWaterUlpan = document.querySelector('.js-ulpan-total');
const foodButtonUlpan = document.querySelector('.js-food-ulpan');
const fruitsButtonUlpan = document.querySelector('.js-fruits-ulpan');

// Function to save times to localStorage
const saveTimesUlpan = (times) => {
  localStorage.setItem('timesArrayUlpan', JSON.stringify(times));
};

// Function to get times from localStorage
const getTimesUlpan = () => {
  const times = localStorage.getItem('timesArrayUlpan');
  return times ? JSON.parse(times) : [];
};

// Function to render times list
const renderTimesUlpan = (times) => {
  timeListUlpan.innerHTML = '';
  times.forEach((time) => {
    const li = document.createElement('li');
    li.textContent = time;
    timeListUlpan.appendChild(li);
  });
};

// Load and render times on page load
let timesArrayUlpan = getTimesUlpan();
renderTimesUlpan(timesArrayUlpan);

// Get the total water count from localStorage
let totalWaterCountUlpan = JSON.parse(localStorage.getItem('totalWaterCountUlpan')) || 0;
totalWaterUlpan.innerHTML = `Ulpan ${totalWaterCountUlpan}`;

function addTotalUlpan(inputValueUlpan) {
  if (!isNaN(inputValueUlpan) && inputValueUlpan.trim() !== '') {
    totalWaterCountUlpan += parseFloat(inputValueUlpan);
  } else {
    console.log('Input value is not a number');
  }
  totalWaterUlpan.innerHTML = `Ulpan ${totalWaterCountUlpan}`;
  localStorage.setItem('totalWaterCountUlpan', JSON.stringify(totalWaterCountUlpan));
}

addButtonUlpan.addEventListener('click', () => {
  const inputElementUlpan = document.querySelector('.js-input-ulpan');
  const inputValueUlpan = inputElementUlpan.value;
  
  const currentTimeUlpan = dayjs().format('HH:mm');
  timesArrayUlpan.push(`${currentTimeUlpan} - ${inputValueUlpan}`);

  saveTimesUlpan(timesArrayUlpan);
  renderTimesUlpan(timesArrayUlpan); 
  addTotalUlpan(inputValueUlpan);

  inputElementUlpan.value = '';
});

halfButtonUlpan.addEventListener('click', () => {
  const halfButtonUlpan = document.querySelector('.js-half-btn-ulpan');
  const halfGlassUlpan = halfButtonUlpan.innerHTML;

  const currentTimeUlpan = dayjs().format('HH:mm');
  timesArrayUlpan.push(`${currentTimeUlpan} - 0.5`);
  
  saveTimesUlpan(timesArrayUlpan);
  renderTimesUlpan(timesArrayUlpan);
  addTotalUlpan(halfGlassUlpan);
});

oneButtonUlpan.addEventListener('click', () => {
  const oneButtonUlpan = document.querySelector('.js-one-btn-ulpan');
  const oneGlassUlpan = oneButtonUlpan.innerHTML;

  const currentTimeUlpan = dayjs().format('HH:mm');
  timesArrayUlpan.push(`${currentTimeUlpan} - 1`);
  
  saveTimesUlpan(timesArrayUlpan);
  renderTimesUlpan(timesArrayUlpan);
  addTotalUlpan(oneGlassUlpan);
});

foodButtonUlpan.addEventListener('click', () => {
  const currentTimeUlpan = dayjs().format('HH:mm');
  timesArrayUlpan.push(`${currentTimeUlpan} - Обед`);
  
  saveTimesUlpan(timesArrayUlpan);
  renderTimesUlpan(timesArrayUlpan);
});

fruitsButtonUlpan.addEventListener('click', () => {
  const currentTimeUlpan = dayjs().format('HH:mm');
  timesArrayUlpan.push(`${currentTimeUlpan} - Фрукты`);
  
  saveTimesUlpan(timesArrayUlpan);
  renderTimesUlpan(timesArrayUlpan);
});

resetButtonUlpan.addEventListener('click', () => {
  localStorage.removeItem('timesArrayUlpan');
  localStorage.removeItem('totalWaterCountUlpan');
  timesArrayUlpan = [];
  totalWaterCountUlpan = 0;
  totalWaterUlpan.innerHTML = 'Ulpan 0';
  renderTimesUlpan(timesArrayUlpan);
});

// Ruslan

const addButtonRuslan = document.querySelector('.js-add-button-ruslan');
const timeListRuslan = document.querySelector('.js-time-list-ruslan');
const resetButtonRuslan = document.querySelector('.js-reset-button-ruslan');
const halfButtonRuslan = document.querySelector('.js-half-btn-ruslan');
const oneButtonRuslan = document.querySelector('.js-one-btn-ruslan');
const totalWaterRuslan = document.querySelector('.js-ruslan-total');
const foodButtonRuslan = document.querySelector('.js-food-ruslan');
const fruitsButtonRuslan = document.querySelector('.js-fruits-ruslan');

// Function to save times to localStorage
const saveTimesRuslan = (times) => {
  localStorage.setItem('timesArrayRuslan', JSON.stringify(times));
};

// Function to get times from localStorage
const getTimesRuslan = () => {
  const times = localStorage.getItem('timesArrayRuslan');
  return times ? JSON.parse(times) : [];
};

// Function to render times list
const renderTimesRuslan = (times) => {
  timeListRuslan.innerHTML = '';
  times.forEach((time) => {
    const li = document.createElement('li');
    li.textContent = time;
    timeListRuslan.appendChild(li);
  });
};

// Load and render times on page load
let timesArrayRuslan = getTimesRuslan();
renderTimesRuslan(timesArrayRuslan);

// Get the total water count from localStorage
let totalWaterCountRuslan = JSON.parse(localStorage.getItem('totalWaterCountRuslan')) || 0;
totalWaterRuslan.innerHTML = `Ruslan ${totalWaterCountRuslan}`;

function addTotalRuslan(inputValueRuslan) {
  if (!isNaN(inputValueRuslan) && inputValueRuslan.trim() !== '') {
    totalWaterCountRuslan += parseFloat(inputValueRuslan);
  } else {
    console.log('Input value is not a number');
  }
  totalWaterRuslan.innerHTML = `Ruslan ${totalWaterCountRuslan}`;
  localStorage.setItem('totalWaterCountRuslan', JSON.stringify(totalWaterCountRuslan));
}

addButtonRuslan.addEventListener('click', () => {
  const inputElementRuslan = document.querySelector('.js-input-ruslan');
  const inputValueRuslan = inputElementRuslan.value;
  
  const currentTimeRuslan = dayjs().format('HH:mm');
  timesArrayRuslan.push(`${currentTimeRuslan} - ${inputValueRuslan}`);

  saveTimesRuslan(timesArrayRuslan);
  renderTimesRuslan(timesArrayRuslan); 
  addTotalRuslan(inputValueRuslan);

  inputElementRuslan.value = '';
});

halfButtonRuslan.addEventListener('click', () => {
  const halfButtonRuslan = document.querySelector('.js-half-btn-ruslan');
  const halfGlassRuslan = halfButtonRuslan.innerHTML;

  const currentTimeRuslan = dayjs().format('HH:mm');
  timesArrayRuslan.push(`${currentTimeRuslan} - 0.5`);
  
  saveTimesRuslan(timesArrayRuslan);
  renderTimesRuslan(timesArrayRuslan);
  addTotalRuslan(halfGlassRuslan);
});

oneButtonRuslan.addEventListener('click', () => {
  const oneButtonRuslan = document.querySelector('.js-one-btn-ruslan');
  const oneGlassRuslan = oneButtonRuslan.innerHTML;

  const currentTimeRuslan = dayjs().format('HH:mm');
  timesArrayRuslan.push(`${currentTimeRuslan} - 1`);
  
  saveTimesRuslan(timesArrayRuslan);
  renderTimesRuslan(timesArrayRuslan);
  addTotalRuslan(oneGlassRuslan);
});

foodButtonRuslan.addEventListener('click', () => {
  const currentTimeRuslan = dayjs().format('HH:mm');
  timesArrayRuslan.push(`${currentTimeRuslan} - Обед`);
  
  saveTimesRuslan(timesArrayRuslan);
  renderTimesRuslan(timesArrayRuslan);
});

fruitsButtonRuslan.addEventListener('click', () => {
  const currentTimeRuslan = dayjs().format('HH:mm');
  timesArrayRuslan.push(`${currentTimeRuslan} - Фрукты`);
  
  saveTimesRuslan(timesArrayRuslan);
  renderTimesRuslan(timesArrayRuslan);
});

resetButtonRuslan.addEventListener('click', () => {
  localStorage.removeItem('timesArrayRuslan');
  localStorage.removeItem('totalWaterCountRuslan');
  timesArrayRuslan = [];
  totalWaterCountRuslan = 0;
  totalWaterRuslan.innerHTML = 'Ruslan 0';
  renderTimesRuslan(timesArrayRuslan);
});