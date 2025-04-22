import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const date = document.querySelector('.title');
date.innerHTML = dayjs().format('MMMM D');

// Universal function for initializing logic for each person
function initializePerson(personName, selectors) {
  const {
    addButton,
    timeList,
    resetButton,
    halfButton,
    oneButton,
    totalWater,
    foodButton,
    fruitsButton,
    inputField,
  } = selectors;

  const saveTimes = (times) => {
    localStorage.setItem(`timesArray${personName}`, JSON.stringify(times));
  };

  const getTimes = () => {
    const times = localStorage.getItem(`timesArray${personName}`);
    return times ? JSON.parse(times) : [];
  };

  const renderTimes = (times) => {
    timeList.innerHTML = '';
    times.forEach((time) => {
      const li = document.createElement('li');
      li.textContent = time;
      timeList.appendChild(li);
    });
  };

  let timesArray = getTimes();
  renderTimes(timesArray);

  let totalWaterCount = JSON.parse(localStorage.getItem(`totalWaterCount${personName}`)) || 0;
  totalWater.innerHTML = `${personName} ${totalWaterCount}`;

  function addTotal(inputValue) {
    if (!isNaN(inputValue) && inputValue.trim() !== '') {
      totalWaterCount += parseFloat(inputValue);
    } else {
      console.log('Input value is not a number');
    }
    totalWater.innerHTML = `${personName} ${totalWaterCount}`;
    localStorage.setItem(`totalWaterCount${personName}`, JSON.stringify(totalWaterCount));
  }

  addButton.addEventListener('click', () => {
    const inputValue = inputField.value;
    const currentTime = dayjs().format('HH:mm');
    timesArray.push(`${currentTime} - ${inputValue}`);

    saveTimes(timesArray);
    renderTimes(timesArray);
    addTotal(inputValue);

    inputField.value = '';
  });

  halfButton.addEventListener('click', () => {
    const currentTime = dayjs().format('HH:mm');
    timesArray.push(`${currentTime} - 0.5`);

    saveTimes(timesArray);
    renderTimes(timesArray);
    addTotal('0.5');
  });

  oneButton.addEventListener('click', () => {
    const currentTime = dayjs().format('HH:mm');
    timesArray.push(`${currentTime} - 1`);

    saveTimes(timesArray);
    renderTimes(timesArray);
    addTotal('1');
  });

  foodButton.addEventListener('click', () => {
    const currentTime = dayjs().format('HH:mm');
    timesArray.push(`${currentTime} - Обед`);

    saveTimes(timesArray);
    renderTimes(timesArray);
  });

  fruitsButton.addEventListener('click', () => {
    const currentTime = dayjs().format('HH:mm');
    timesArray.push(`${currentTime} - Фрукты`);

    saveTimes(timesArray);
    renderTimes(timesArray);
  });

  resetButton.addEventListener('click', () => {
    localStorage.removeItem(`timesArray${personName}`);
    localStorage.removeItem(`totalWaterCount${personName}`);
    timesArray = [];
    totalWaterCount = 0;
    totalWater.innerHTML = `${personName} 0`;
    renderTimes(timesArray);
  });
}

// Initialization for each person
initializePerson('Ulpan', {
  addButton: document.querySelector('.js-add-button-person-1'),
  timeList: document.querySelector('.js-time-list-person-1'),
  resetButton: document.querySelector('.js-reset-button-person-1'),
  halfButton: document.querySelector('.js-half-btn-person-1'),
  oneButton: document.querySelector('.js-one-btn-person-1'),
  totalWater: document.querySelector('.js-person-1-total'),
  foodButton: document.querySelector('.js-food-person-1'),
  fruitsButton: document.querySelector('.js-fruits-person-1'),
  inputField: document.querySelector('.js-input-person-1'),
});

initializePerson('Ruslan', {
  addButton: document.querySelector('.js-add-button-person-2'),
  timeList: document.querySelector('.js-time-list-person-2'),
  resetButton: document.querySelector('.js-reset-button-person-2'),
  halfButton: document.querySelector('.js-half-btn-person-2'),
  oneButton: document.querySelector('.js-one-btn-person-2'),
  totalWater: document.querySelector('.js-person-2-total'),
  foodButton: document.querySelector('.js-food-person-2'),
  fruitsButton: document.querySelector('.js-fruits-person-2'),
  inputField: document.querySelector('.js-input-person-2'),
});