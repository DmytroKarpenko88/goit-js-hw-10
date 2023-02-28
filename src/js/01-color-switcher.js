const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.btnStart.addEventListener('click', startBtnGenerator);
refs.btnStop.addEventListener('click', stopBtnGenerator);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bodyColorChange() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function startBtnGenerator(event) {
  event.currentTarget.disabled = true;
  //setInterval for 1s
  timerId = setInterval(bodyColorChange, 1000);
}

function stopBtnGenerator() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
}
