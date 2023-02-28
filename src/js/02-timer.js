// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  inputDate: document.querySelector('input#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

isBtnStartActive(false);
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    inputCheckupDates();
  },
};
flatpickr(refs.inputDate, options);

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaDateTime = selectedDate - currentTime;
      const timeComponents = convertMs(deltaDateTime);

      if (deltaDateTime < 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
        isBtnStartActive(false);
        Notiflix.Notify.info('Time is over!');
        return;
      }
      updateTimer(timeComponents);
    }, 1000);
  },
};

refs.btnStart.addEventListener('click', timer.start);

function isBtnStartActive(active) {
  refs.btnStart.disabled = !active;
}

function inputCheckupDates() {
  if (Date.now() > selectedDate) {
    Notiflix.Notify.failure('Please choose a date in the future');

    isBtnStartActive(false);
    return;
  }
  Notiflix.Notify.success('Valid date');
  isBtnStartActive(true);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
