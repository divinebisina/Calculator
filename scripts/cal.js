let cal = localStorage.getItem('cal') || '';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.js-cal').innerHTML = cal;

  let mode = localStorage.getItem('mode');
  let settingsImg = document.querySelector('.settings img');

  if (mode === 'Dark') {
    settingsImg.src = 'images/dark-mode-icon.png';
  } else if (mode === 'Light') {
    settingsImg.src = 'images/light-mode-icon.png';
  }
});

//Updated the text to display most recent input

const calcu = document.querySelector('.calcu');
function updateCalcu(value) {
  calcu.textContent = value;
  calcu.scrollLeft = calcu.scrollWidth;
}

function errorTest(newCal) {
  cal = newCal;

  document.querySelector('.js-cal')
  .innerHTML = cal;
  localStorage.setItem('cal', cal);
}

const saved = localStorage.getItem('mode');
if (saved) {
  changeTheme(saved);
}

function changeTheme(tryIt) {
  const color = document.querySelector('.js-first-part');

  if (tryIt === 'Light') {
    color.classList.add('light-mode');
    addBorder('.border1');
    localStorage.setItem('mode', 'Light');
  } else if (tryIt === 'Dark') {
    color.classList.remove('light-mode');
    addBorder('.border2');
    localStorage.setItem('mode', 'Dark');
  }
}

function addBorder(board) {
  const buttonBorder = document.querySelector(board);

  if (!buttonBorder.classList.contains('border')) {
    removeBorder();
    buttonBorder.classList.add('border');
  }
}

function removeBorder() {
  const theLast = document.querySelector('.border');

    if (theLast) {
      theLast.classList.remove('border');
    }
}

function keyPress() {
  calcu.scrollLeft = calcu.scrollWidth;
  
  if (event.key === '1') {
    cal += '1';
  } else if (event.key === '2') {
    cal += '2';
  } else if (event.key === '3') {
    cal += '3';
  } else if (event.key === '4') {
    cal += '4';
  } else if (event.key === '5') {
    cal += '5';
  } else if (event.key === '6') {
    cal += '6';
  } else if (event.key === '7') {
    cal += '7';
  } else if (event.key === '8') {
    cal += '8';
  } else if (event.key === '9') {
    cal += '9';
  } else if (event.key === '0') {
    cal += '0';
  } else if (event.key === 'Enter' || event.key === '=') {
    try {
      cal = eval(cal);
    } catch (e) {
      cal = 'Error'
    };
  } else if (event.key === '+') {
    cal += ' + ';
  } else if (event.key === '-') {
    cal += ' - ';
  } else if (event.key === '/') {
    cal += ' / ';
  } else if (event.key === '*') {
    cal += ' * ';
  } else if (event.key === '.') {
    cal += '.';
  } else if (event.key === '(') {
    cal += '(';
  } else if (event.key === ')') {
    cal += ')';
  } else if (event.key === 'Escape' || event.key === 'Delete') {
    cal = '';
  } else if (event.key === 'Backspace') {
    cal = cal.slice(0, -1);
  }
}

