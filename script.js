document.addEventListener('DOMContentLoaded', () => {
  const numberInput = document.querySelector('.number-input');
  const startTimerButton = document.querySelector('.start-timer-button');
  const countdownBlock = document.querySelector('.countdown-block');
  let intervalID;

  numberInput.addEventListener('input', () => {
    numberInput.classList.remove('error');
  })

  function transformNumber() {
    const countdownNumber = parseInt(countdownBlock.textContent);
    let countdownNumberMinus = countdownNumber - 1;

    if (countdownNumberMinus >= 0) {
      countdownBlock.textContent = countdownNumberMinus;
    } else {
      clearInterval(intervalID);
    }

    return countdownNumberMinus;
  }

  function startTimer() {
    clearInterval(intervalID);
    countdownBlock.textContent = numberInput.value;

    intervalID = setInterval(transformNumber, 1000);

    numberInput.value = '';
  };

  startTimerButton.addEventListener('click', () => {
    if (numberInput.value === '') {
      numberInput.classList.add('error');
    } else {
      startTimer();
    }
  });
});