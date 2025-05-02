import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

// Universal function for initializing logic for each person
function initializePerson(personName, selectors) {
  const {
    intervalElement,
    totalWater,
    inputField,
    addButton,
    halfButton,
    oneButton,
    foodButton,
    fruitsButton,
    timeList,
    resetButton,
  } = selectors;

  // === TIMES ===
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

  // === TOTAL WATER COUNT ===
  const saveTotalWaterCount = (count) => {
    localStorage.setItem(`totalWaterCount${personName}`, JSON.stringify(count));
  };

  const getTotalWaterCount = () => {
    const count = localStorage.getItem(`totalWaterCount${personName}`);
    return count ? JSON.parse(count) : 0;
  };

  const renderTotalWaterCount = (count) => {
    totalWater.innerHTML = `${personName} ${count}`;
  };

  let totalWaterCount = getTotalWaterCount();
  renderTotalWaterCount(totalWaterCount);

  // === INTERVAL ===
  const saveInterval = (interval) => {
    localStorage.setItem(`intervalValue${personName}`, JSON.stringify(interval));
  };

  const getInterval = () => {
    const interval = localStorage.getItem(`intervalValue${personName}`);
    return interval ? JSON.parse(interval) : "";
  };

  const renderInterval = (interval) => {
    intervalElement.innerHTML = interval;
  };

  if (totalWaterCount > 0) {
    const currentInterval = getInterval();
    renderInterval(currentInterval);
  } else {
    renderInterval('');
  }

  function calculateInterval() {
    const numberOfGlasses = 11;
    const currentTime = dayjs().format('HH:mm');
    const [hours, minutes] = currentTime.split(':');
    const currentTimeInMinutes = parseInt(hours) * 60 + parseInt(minutes);
    const currentDayLength = 1440 - currentTimeInMinutes;
    const intervalInMinutes = Math.floor(currentDayLength / (numberOfGlasses - 1));
    const intervalHours = Math.floor(intervalInMinutes / 60);
    const intervalMinutes = String(intervalInMinutes % 60).padStart(2, '0');
    const recommendedInterval = `Interval ${intervalHours}:${intervalMinutes}`;
    intervalElement.innerHTML = recommendedInterval;
    saveInterval(recommendedInterval);
  }  

  function addTotal(inputValue) {
    if (!isNaN(inputValue) && inputValue.trim() !== '') {
      totalWaterCount += parseFloat(inputValue);
    }
    
    if (totalWaterCount === 1) {
      calculateInterval();
    }

    totalWater.innerHTML = `${personName} ${totalWaterCount}`;
    saveTotalWaterCount(totalWaterCount);
  }

  function getMealTimeLabel(currentTime) {
    const [hours, minutes] = currentTime.split(':');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);

    if (totalMinutes >= 0 && totalMinutes < 600) {
      return 'Breakfast';
    } else if (totalMinutes >= 600 && totalMinutes < 1020) {
      return 'Lunch';
    } else if (totalMinutes >= 1020 && totalMinutes < 1440) {
      return 'Dinner';
    } else {
      return 'Unknown';
    }
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
    const mealTimeLabel = getMealTimeLabel(currentTime);
    timesArray.push(`${currentTime} - ${mealTimeLabel}`);

    saveTimes(timesArray);
    renderTimes(timesArray);
  });

  fruitsButton.addEventListener('click', () => {
    const currentTime = dayjs().format('HH:mm');
    timesArray.push(`${currentTime} - Fruits`);

    saveTimes(timesArray);
    renderTimes(timesArray);
  });

  resetButton.addEventListener('click', () => {
    localStorage.removeItem(`timesArray${personName}`);
    localStorage.removeItem(`totalWaterCount${personName}`);
    timesArray = [];
    totalWaterCount = 0;
    totalWater.innerHTML = `${personName} 0`;
    intervalElement.innerHTML = '';
    renderTimes(timesArray);
  });
}

// Initialization for each person
initializePerson('Ulpan', {
  intervalElement: document.querySelector('.js-interval-person-1'),
  totalWater: document.querySelector('.js-name-total-person-1'),
  inputField: document.querySelector('.js-input-person-1'),
  addButton: document.querySelector('.js-add-button-person-1'),
  halfButton: document.querySelector('.js-half-btn-person-1'),
  oneButton: document.querySelector('.js-one-btn-person-1'),
  foodButton: document.querySelector('.js-food-person-1'),
  fruitsButton: document.querySelector('.js-fruits-person-1'),
  timeList: document.querySelector('.js-time-list-person-1'),
  resetButton: document.querySelector('.js-reset-button-person-1'),
});

initializePerson('Ruslan', {
  intervalElement: document.querySelector('.js-interval-person-2'),
  totalWater: document.querySelector('.js-name-total-person-2'),
  inputField: document.querySelector('.js-input-person-2'),
  addButton: document.querySelector('.js-add-button-person-2'), 
  halfButton: document.querySelector('.js-half-btn-person-2'),
  oneButton: document.querySelector('.js-one-btn-person-2'),
  foodButton: document.querySelector('.js-food-person-2'),
  fruitsButton: document.querySelector('.js-fruits-person-2'),
  timeList: document.querySelector('.js-time-list-person-2'),
  resetButton: document.querySelector('.js-reset-button-person-2'),
});