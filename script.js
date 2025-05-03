import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
const getCurrentTime = () => dayjs().format('HH:mm');

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
    timeList.innerHTML = times.map(time => `<li>${time}</li>`).join('');
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
    localStorage.setItem(`interval${personName}`, JSON.stringify(interval));
  };

  const getInterval = () => {
    const interval = localStorage.getItem(`interval${personName}`);
    return interval ? JSON.parse(interval) : "";
  };

  const renderInterval = (interval) => {
    intervalElement.innerHTML = interval;
  };
  
  if (totalWaterCount > 0) {
    const interval = getInterval();
    renderInterval(interval);
  } else {
    renderInterval('');
  }

  function calculateInterval(glassNumber) {
    const currentTime = getCurrentTime();
    const numberOfGlasses = 11;
    const [hours, minutes] = currentTime.split(':');
    const currentTimeInMinutes = parseInt(hours) * 60 + parseInt(minutes);
    const currentDayLengthInMinutes = 1440 - currentTimeInMinutes;
    const remainingNumOfGlasses = numberOfGlasses - glassNumber;

    const intervalInMinutes = remainingNumOfGlasses >= 2
      ? Math.round(currentDayLengthInMinutes / remainingNumOfGlasses)
      : 0;

      if (remainingNumOfGlasses < 0) {
        alert("You've already drunk your daily water intake!");
        renderInterval('Over limit!');
        saveInterval('Over limit!');
        return;  
      } else if (remainingNumOfGlasses === 0) {
        renderInterval('✔ Done for today!');
        saveInterval('✔ Done for today!');
        return;
      } else if (remainingNumOfGlasses < 2 && remainingNumOfGlasses >= 0.1) {
        renderInterval('Almost...');
        saveInterval('Almost...');
        return;
      }      
      
    const intervalHours = Math.floor(intervalInMinutes / 60);
    const intervalMinutes = String(intervalInMinutes % 60).padStart(2, '0');
    const interval = `Interval ${intervalHours}:${intervalMinutes}`;
    saveInterval(interval);
    renderInterval(interval);

    const nextGlassTimeInMinutes = currentTimeInMinutes + intervalInMinutes;
    const nextGlassHour = String(Math.floor(nextGlassTimeInMinutes / 60)).padStart(2, '0');
    const nextGlassMinutes = String(nextGlassTimeInMinutes % 60).padStart(2, '0');
    const nextGlassTime = `${nextGlassHour}:${nextGlassMinutes} - Next glass`;
    
    const li = document.createElement('li');
    li.className = 'next-glass-time';
    li.textContent = nextGlassTime;
    timeList.appendChild(li);
  }  

  function addTotal(inputValue) {
    if (!isNaN(inputValue) && inputValue.trim() !== '') {
      totalWaterCount += parseFloat(inputValue);
    }

    totalWater.innerHTML = `${personName} ${totalWaterCount}`;
    saveTotalWaterCount(totalWaterCount);
    calculateInterval(totalWaterCount);
  }

  addButton.addEventListener('click', () => {
    const currentTime = getCurrentTime();
    const inputValue = inputField.value;
    timesArray.push(`${currentTime} - ${inputValue}`);
    saveTimes(timesArray);
    renderTimes(timesArray);
    addTotal(inputValue);
    inputField.value = '';
  });

  halfButton.addEventListener('click', () => {
    const currentTime = getCurrentTime();
    timesArray.push(`${currentTime} - 0.5`);
    saveTimes(timesArray);
    renderTimes(timesArray);
    addTotal('0.5');
  });

  oneButton.addEventListener('click', () => {
    const currentTime = getCurrentTime();
    timesArray.push(`${currentTime} - 1`);
    saveTimes(timesArray);
    renderTimes(timesArray);
    addTotal('1');
  });

  foodButton.addEventListener('click', () => {
    const currentTime = getCurrentTime();
    timesArray.push(`${currentTime} - Food`);
    saveTimes(timesArray);
    renderTimes(timesArray);
    calculateInterval(totalWaterCount);
  });

  fruitsButton.addEventListener('click', () => {
    const currentTime = getCurrentTime();
    timesArray.push(`${currentTime} - Fruits`);
    saveTimes(timesArray);
    renderTimes(timesArray);
    calculateInterval(totalWaterCount);
  });

  resetButton.addEventListener('click', () => {
    localStorage.removeItem(`timesArray${personName}`);
    localStorage.removeItem(`totalWaterCount${personName}`);
    timesArray = [];
    totalWaterCount = 0;
    totalWater.innerHTML = `${personName} 0`;
    renderInterval('');
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