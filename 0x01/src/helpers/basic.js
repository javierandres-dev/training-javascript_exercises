import {
  cleanPrevious,
  printAlert,
  getWeekDays,
  validateForm,
} from './auxiliar';
const d = document;
export function exercise1() {
  cleanPrevious();
  try {
    const weekDays = getWeekDays(),
      $sol = d.querySelector('.exercise__solution'),
      $p1 = d.createElement('p'),
      $p2 = d.createElement('p'),
      date = new Date(),
      day = date.getDay(),
      getHours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
    let hours = undefined;
    let period = undefined;
    if (getHours >= 0 && getHours <= 12) {
      hours = getHours;
      period = 'AM';
    } else {
      hours = getHours - 12;
      period = 'PM';
    }
    $p1.textContent = `Today is: ${weekDays[day]} `;
    $p2.textContent = `${hours < 10 ? '0' + hours : hours} ${period} : ${
      minutes < 10 ? '0' + minutes : minutes
    } : ${seconds < 10 ? '0' + seconds : seconds}`;
    $sol.appendChild($p1);
    $sol.appendChild($p2);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise2() {
  cleanPrevious();
  try {
    const $sol = d.querySelector('.exercise__solution'),
      $btn = d.createElement('button');
    $btn.textContent = 'Print';
    $btn.addEventListener('click', () => window.print());
    $sol.appendChild($btn);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise3() {
  cleanPrevious();
  try {
    const $sol = d.querySelector('.exercise__solution'),
      $p = d.createElement('p'),
      date = new Date().toLocaleDateString();
    $p.textContent = `${date}`;
    $sol.appendChild($p);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise4() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>
      Enter the three side lengths and press 'RESULT' button
    </legend>
    <label>Number of the first side</label>
    <input type="number" placeholder="e.g. 2" required/>
    <label>Number of the second side</label>
    <input type="number" placeholder="e.g. 3" required/>
    <label>Number of the third side</label>
    <input type="number" placeholder="e.g. 4" required/>
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const $inputs = $form.querySelectorAll('input'),
        a = parseInt($inputs[0].value),
        b = parseInt($inputs[1].value),
        c = parseInt($inputs[2].value),
        p = (a + b + c) / 2,
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      if (isNaN(area)) {
        printAlert('warning', '⚠️ Impossible triangle');
      } else {
        printAlert('success', `✔️ Area = ${area.toFixed(2)}`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise5() {
  cleanPrevious();
  try {
    const $sol = d.querySelector('.exercise__solution'),
      $p = d.createElement('p'),
      str = 'Hello, World!';
    let rotate = str.concat(' ');
    setInterval(function () {
      rotate =
        rotate[rotate.length - 1] + rotate.substring(0, rotate.length - 1);
      $p.textContent = rotate;
    }, 500);
    $sol.appendChild($p);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise6() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a year and press 'RESULT' button</legend>
    <label>Enter a year</label>
    <input type="number" name="year" placeholder="e.g. 1976" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return printAlert('warning', '⚠️ Enter a year');
    try {
      const year = $form.year.value;
      if (year % 400 === 0) {
        printAlert('success', `✔️ Yes, ${year} is leap year`);
      } else {
        year % 4 === 0 && year % 100 !== 0
          ? printAlert('success', `✔️ Yes, ${year} is leap year`)
          : printAlert('success', `✔️ No, ${year} isn't leap year`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise7() {
  cleanPrevious();
  try {
    const $sol = d.querySelector('.exercise__solution'),
      $p = d.createElement('p'),
      end = 2050;
    let start = 2014;
    while (start <= end) {
      const date = new Date(start, 0, 1),
        day = date.getDay();
      if (day === 0) {
        const $span = d.createElement('span');
        date.getFullYear() === 2045
          ? ($span.textContent = ` and ${date.getFullYear()}. `)
          : ($span.textContent = ` ${date.getFullYear()}, `);
        $p.appendChild($span);
      }
      start++;
    }
    $sol.appendChild($p);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise8() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Guess number</legend>
    <label>Enter a number between 1 to 10 and press 'RESULT' button</label>
    <input type="number" name="number" min="1" max="10" placeholder="e.g. 8" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form'),
    r = Math.floor(Math.random() * 10 + 1);
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return printAlert('warning', '⚠️ Enter a number');
    try {
      const n = parseInt($form.number.value);
      if (n < 1 || n > 10) {
        printAlert('warning', '⚠️ Enter a number between 1 to 10');
        return;
      }
      n === r
        ? printAlert('success', '✔️ Good Work')
        : printAlert('warning', `⚠️ ${n} Not matched, enter other number`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise9() {
  cleanPrevious();
  try {
    const $sol = d.querySelector('.exercise__solution'),
      $p = d.createElement('p'),
      today = new Date().getTime(),
      year = new Date().getFullYear(),
      nextChristmas = new Date(year, 11, 25).getTime(),
      difference = nextChristmas - today,
      remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    $p.textContent = `${remainingDays} days until next Christmas.`;
    $sol.appendChild($p);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise10() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and select an operation</legend>
    <label for="a">Enter first number</label>
    <input type="number" name="a" placeholder="e.g. 20" required />
    <label for="b">Enter second number</label>
    <input type="number" name="b" placeholder="e.g. 10" required />
  </fieldset>
  <div class="btn-group">
    <button type="button" name="btnMul">Multiply</button>
    <button type="button" name="btnDiv">Divide</button>
  </div>
</form>
`;
  const $form = $sol.querySelector('form'),
    $multiply = $form.btnMul,
    $divide = $form.btnDiv;
  $multiply.addEventListener('click', () => {
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const a = parseInt($form.a.value),
        b = parseInt($form.b.value);
      printAlert('success', `✔️ ${a} x ${b} = ${a * b}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
  $divide.addEventListener('click', () => {
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const a = parseInt($form.a.value),
        b = parseInt($form.b.value);
      if (b === 0) {
        printAlert('success', `✔️ ${a} / ${b} is undefined.`);
      } else {
        printAlert('success', `✔️ ${a} / ${b} = ${a / b}`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise11() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter degrees and select a type convertion</legend>
    <label for="degrees">Enter degrees</label>
    <input type="number" name="degrees" placeholder="e.g. 11" required />
    <input type="radio" name="to" id="CtoF" />
    <label for="CtoF">Celsius to Fahrenheit</label>
    <input type="radio" name="to" id="FtoC" />
    <label for="FtoC">Fahrenheit to Celsius</label>
  </fieldset>
  <button type="button">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form'),
    $CtoF = $form.querySelector('#CtoF'),
    $FtoC = $form.querySelector('#FtoC'),
    $btn = $form.querySelector('button');
  $btn.addEventListener('click', () => {
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($CtoF.checked === false && $FtoC.checked === false) {
      printAlert(
        'warning',
        '⚠️ ¿Celsius to Fahrenheit or Fahrenheit to Celsius?'
      );
      return;
    }
    try {
      const degrees = parseInt($form.degrees.value);
      if ($CtoF.checked === true) {
        printAlert(
          'success',
          `✔️ ${degrees}° Celsius = ${(degrees * 1.8 + 32).toFixed(
            2
          )}° Fahrenheit.`
        );
      }
      if ($FtoC.checked === true) {
        printAlert(
          'success',
          `✔️ ${degrees}° Fahrenheit = ${((degrees - 32) * 0.5556).toFixed(
            2
          )}° Celsius.`
        );
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise12() {
  cleanPrevious();
  try {
    const $sol = d.querySelector('.exercise__solution'),
      $p = d.createElement('p');
    $p.textContent = `URL: ${d.URL}`;
    $sol.appendChild($p);
    printAlert('success', '✔️ Done!');
  } catch (error) {
    printAlert('danger', `☠️ Error: ${error}`);
  }
}
export function exercise13() {
  cleanPrevious();
  /*
  const $sol = d.querySelector(".exercise__solution"),
    $p = d.createElement("p");
  $p.textContent = ""
  $solution.appendChild($p);
*/
  printAlert('info', '🔜 Coming soon');
  console.info('Pending');
}
export function exercise14() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a filename and press 'RESULT' button</legend>
    <input type="text" name="filename" placeholder="e.g. readme.txt" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    const filename = $form.filename.value,
      count = [...filename].filter((dot) => dot === '.').length;
    if (count !== 1) return printAlert('warning', '⚠️ Wrong filename');
    try {
      const FILENAME = filename.split('.'),
        extension = FILENAME[1];
      printAlert('success', `✔️ The extension of a filename is: ${extension}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise15() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a number and press 'RESULT' button</legend>
    <input type="number" name="number" placeholder="e.g. 15" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const number = parseInt($form.number.value);
      if (number <= 13) {
        printAlert(
          'success',
          `✔️ The difference between ${number} and 13 is: ${13 - number}`
        );
      } else {
        printAlert(
          'success',
          `✔️ The double the absolute difference between ${number} and 13 is: ${
            (number - 13) * 2
          }`
        );
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise16() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and press 'RESULT' button</legend>
    <label for="n1">Enter first number</label>
    <input type="number" name="n1" placeholder="e.g. 8" required />
    <label for="n2">Enter second number</label>
    <input type="number" name="n2" placeholder="e.g. 16" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('here...');
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      if (a === b) {
        printAlert(
          'success',
          `✔️ ${a} = ${b} => The triple their sum = ${(a + b) * 3}`
        );
      } else {
        printAlert('success', `✔️ ${a} + ${b} = ${a + b}`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise17() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a number and press 'RESULT' button</legend>
    <input type="number" name="number" placeholder="e.g. 17" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
    `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const number = parseInt($form.number.value);
      if (number > 19) {
        printAlert(
          'success',
          `✔️ Triple absolute difference: ${(number - 19) * 3}`
        );
      } else {
        printAlert('success', `✔️ Absolute difference: ${19 - number}`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise18() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and press 'RESULT' button</legend>
    <label for="n1">Enter first number</label>
    <input type="number" name="n1" placeholder="e.g. 9" required />
    <label for="n2">Enter second number</label>
    <input type="number" name="n2" placeholder="e.g. 18" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      a === 50 || b === 50 || a + b === 50
        ? printAlert('success', '✔️ true')
        : printAlert('info', '✔️ false');
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise19() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a number and press 'RESULT' button</legend>
    <input type="number" name="number" placeholder="e.g. 19" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
    `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const number = parseInt($form.number.value);
      if (Math.abs(100 - number) <= 20) {
        printAlert('success', `✔️ ${number} is within 20 of 100`);
      } else if (Math.abs(400 - number) <= 20) {
        printAlert('success', `✔️ ${number} is within 20 of 400`);
      } else {
        printAlert('warning', `⚠️ ${number} is out of both ranges`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise20() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and press 'RESULT' button</legend>
    <label for="n1">Enter first number</label>
    <input type="number" name="n1" placeholder="e.g. -20" required />
    <label for="n2">Enter second number</label>
    <input type="number" name="n2" placeholder="e.g. 20" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      (a < 0 && b > 0) || (a > 0 && b < 0)
        ? printAlert('success', '✔️ true')
        : printAlert('info', '✔️ false');
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise21() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a string and press 'RESULT' button</legend>
    <label for="str">Enter a string</label>
    <input type="text" name="str" id="str" placeholder="e.g. twenty-one" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      if ($form.str.value.startsWith('Py')) {
        printAlert('success', `✔️ ${$form.str.value}`);
      } else {
        printAlert('success', `✔️ Py${$form.str.value}`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise22() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>
      Enter a string and enter a position, then press 'RESULT' button
    </legend>
    <label for="str">Enter a string</label>
    <input type="text" id="str" name="str" placeholder="e.g. twenty-two" required />
    <label for="idx">Enter a position</label>
    <input type="number" id="idx" name="idx" placeholder="e.g. 22" required min="0"/>
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($form.idx.value > $form.str.value.length - 1 || $form.idx.value < 0)
      return printAlert('warning', '⚠️ Out of range');
    try {
      let newStr = '';
      for (let i = 0; i < $form.str.value.length; i++) {
        if (i !== parseInt($form.idx.value)) newStr += $form.str.value[i];
      }
      printAlert('success', `✔️ ${newStr}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise23() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a string and press 'RESULT' button</legend>
    <label for="str">Enter a string</label>
    <input type="text" id="str" name="str" placeholder="e.g. twenty-three" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($form.str.value.length < 1)
      return printAlert(
        'warning',
        '⚠️ The string length must be greater than or equal to 1.'
      );
    if ($form.str.value.length === 1)
      return printAlert('success', `✔️ ${$form.str.value}`);
    try {
      let newStr = '';
      for (let i = 0; i < $form.str.value.length; i++) {
        if (i === 0) {
          newStr += $form.str.value[$form.str.value.length - 1];
        } else if (i === $form.str.value.length - 1) {
          newStr += $form.str.value[0];
        } else {
          newStr += $form.str.value[i];
        }
      }
      printAlert('success', `✔️ ${newStr}`);
    } catch (error) {
      printAlert('danger', `Error: ${error}`);
    }
  });
}
export function exercise24() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a string and press 'RESULT' button</legend>
    <label for="str">Enter a string</label>
    <input type="text" id="str" name="str" placeholder="e.g. twenty-four" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
    `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    try {
      let newStr = $form.str.value[0];
      for (let i = 0; i < $form.str.value.length; i++) {
        newStr += $form.str.value[i];
      }
      newStr += $form.str.value[0];
      printAlert('success', `✔️ ${newStr}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise25() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a number and press 'RESULT' button</legend>
    <label for="num">Enter a number</label>
    <input type="number" id="num" name="num" placeholder="e.g. 25" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($form.num.value === '0')
      return printAlert('success', "0 isn't multiple of 3, nor of 7.");
    try {
      const number = $form.num.value;
      if (number % 3 === 0 || number % 7 === 0) {
        if (number % 3 === 0 && number % 7 === 0) {
          printAlert(
            'success',
            `✔️ ${number} is multiple of 3, also is multiple of 7.`
          );
        } else if (number % 3 === 0) {
          printAlert('success', `✔️ ${number} is multiple of 3.`);
        } else {
          printAlert('success', `✔️ ${number} is multiple of 7.`);
        }
      } else {
        printAlert('success', `✔️ ${number} isn't multiple of 3, nor of 7.`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise26() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a string and press 'RESULT' button</legend>
    <label for="str">Enter a string</label>
    <input type="text" id="str" name="str" placeholder="e.g. twenty-six" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($form.str.value.length < 3)
      return printAlert('warning', '⚠️ The string length must be 3 or more.');
    try {
      let newStr = $form.str.value.substring($form.str.value.length - 3);
      newStr = newStr + $form.str.value + newStr;
      printAlert('success', `✔️ ${newStr}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise27() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a string and press 'RESULT' button</legend>
    <label for="str">Enter a string</label>
    <input type="text" id="str" name="str" placeholder="e.g. twenty-seven" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($form.str.value.length < 4) return printAlert('warning', false);
    try {
      $form.str.value.startsWith('Java')
        ? printAlert('success', `✔️ ${$form.str.value.startsWith('Java')}`)
        : printAlert('info', `✔️ ${$form.str.value.startsWith('Java')}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise28() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and press 'RESULT' button</legend>
    <label for="num1">Enter first number</label>
    <input type="number" id="num1" name="num1" placeholder="e.g. 14" required />
    <label for="num2">Enter second number</label>
    <input type="number" id="num2" name="num2" placeholder="e.g. 28" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if (isNaN($form.num1.value) !== false || isNaN($form.num2.value) !== false)
      return printAlert('warning', '⚠️ Enter two numbers.');
    try {
      if (
        ($form.num1.value >= 50 && $form.num1.value <= 99) ||
        ($form.num2.value >= 50 && $form.num2.value <= 99)
      ) {
        printAlert('success', '✔️ True');
      } else {
        printAlert('info', 'False');
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise29() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter three numbers and press 'RESULT' button</legend>
    <label for="num1">Enter first number</label>
    <input type="number" id="num1" name="num1" placeholder="e.g. 8" required />
    <label for="num2">Enter second number</label>
    <input type="number" id="num2" name="num2" placeholder="e.g. 16" required />
    <label for="num3">Enter third number</label>
    <input type="number" id="num3" name="num3" placeholder="e.g. 29" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if (
      isNaN($form.num1.value) !== false ||
      isNaN($form.num2.value) !== false ||
      isNaN($form.num3.value) !== false
    )
      return printAlert('warning', '⚠️ Enter three numbers.');
    try {
      if (
        ($form.num1.value >= 50 && $form.num1.value <= 99) ||
        ($form.num2.value >= 50 && $form.num2.value <= 99) ||
        ($form.num3.value >= 50 && $form.num3.value <= 99)
      ) {
        printAlert('success', '✔️ True');
      } else {
        printAlert('info', 'False');
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise30() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a string and press 'RESULT' button</legend>
    <label for="str">Enter a string</label>
    <input type="text" id="str" name="str" placeholder="e.g. This is the word Script in a string" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if ($form.str.value.length < 10)
      return printAlert('success', `✔️ ${$form.str.value}`);
    try {
      const word = $form.str.value.substring(10, 4);
      if (word === 'Script') {
        if ($form.str.value.length === 10)
          return printAlert('success', `✔️ ${$form.str.value.substring(0, 4)}`);
        const str =
          $form.str.value.substring(4, 0) +
          $form.str.value.substring(10, $form.str.value.length);
        printAlert('success', `✔️ ${str}`);
      } else {
        printAlert('success', `✔️ ${$form.str.value}`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise31() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter three numbers and press 'RESULT' button</legend>
    <label for="num1">Enter first number</label>
    <input type="number" id="num1" name="num1" placeholder="e.g. 29" required />
    <label for="num2">Enter second number</label>
    <input type="number" id="num2" name="num2" placeholder="e.g. 30" required />
    <label for="num3">Enter third number</label>
    <input type="number" id="num3" name="num3" placeholder="e.g. 31" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if (
      isNaN($form.num1.value) !== false ||
      isNaN($form.num2.value) !== false ||
      isNaN($form.num3.value) !== false
    )
      return printAlert('warning', '⚠️ Enter three numbers.');
    try {
      const largest = Math.max(
        $form.num1.value,
        $form.num2.value,
        $form.num3.value
      );
      printAlert('success', `✔️ The largest number is: ${largest}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise32() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and press 'RESULT' button</legend>
    <label for="num1">Enter first number</label>
    <input type="number" id="num1" name="num1" placeholder="e.g. 31" required />
    <label for="num2">Enter second number</label>
    <input type="number" id="num2" name="num2" placeholder="e.g. 32" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if (isNaN($form.num1.value) !== false || isNaN($form.num2.value) !== false)
      return printAlert('warning', '⚠️ Enter two numbers.');
    try {
      let nearest = undefined;
      const n1 = parseInt($form.num1.value);
      const n2 = parseInt($form.num2.value);
      if (n1 === 100 && n2 === 100) {
        nearest = '100';
      } else if (n1 === 100 || n2 === 100) {
        if (n1 === 100) {
          nearest = 'first';
        } else {
          nearest = 'second';
        }
      } else if (n1 === n2) {
        nearest = 'same';
      } else {
        const a = Math.abs(100 - n1);
        const b = Math.abs(100 - n2);
        if (a < b) {
          nearest = n1;
        } else {
          nearest = n2;
        }
      }
      if (nearest === '100') {
        printAlert('success', '✔️ Both numbers are 100');
      } else if (nearest === 'first') {
        printAlert('success', '✔️ the first number is 100');
      } else if (nearest === 'second') {
        printAlert('success', '✔️ the second number is 100');
      } else if (nearest === 'same') {
        printAlert('success', '✔️ Both numbers are same distance of 100');
      } else {
        printAlert('success', `✔️ ${nearest} is nearest to 100`);
      }
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
export function exercise33() {
  cleanPrevious();
  const $sol = d.querySelector('.exercise__solution');
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter two numbers and press 'RESULT' button</legend>
    <label for="num1">Enter first number</label>
    <input type="number" id="num1" name="num1" placeholder="e.g. 32" required />
    <label for="num2">Enter second number</label>
    <input type="number" id="num2" name="num2" placeholder="e.g. 33" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert('warning', '⚠️ All fields are required');
    if (isNaN($form.num1.value) !== false || isNaN($form.num2.value) !== false)
      return printAlert('warning', '⚠️ Enter two numbers.');
    try {
      let a = undefined,
        b = undefined;
      const n1 = parseInt($form.num1.value);
      const n2 = parseInt($form.num2.value);
      if ((n1 >= 40 && n1 <= 60) || (n1 >= 70 && n1 <= 100)) {
        if (n1 >= 40 && n1 <= 60) {
          a = 'is within the range 40..60';
        } else {
          a = 'is within the range 70..100';
        }
      } else {
        a = 'is outside the established ranges';
      }
      if ((n2 >= 40 && n2 <= 60) || (n2 >= 70 && n2 <= 100)) {
        if (n2 >= 70 && n2 <= 100) {
          b = 'is within the range 70..100';
        } else {
          b = 'is within the range 40..60';
        }
      } else {
        b = 'is outside the established ranges';
      }
      printAlert('success', `✔️ The first number ${a}, the second number ${b}`);
    } catch (error) {
      printAlert('danger', `☠️ Error: ${error}`);
    }
  });
}
/*
printAlert("success", "✔️ Done!");
printAlert("warning", "⚠️ ");
printAlert("danger", `☠️ Error: ${error}`);
printAlert("info", "False");
printAlert("info", "🔜 Coming soon");
console.info("Unsolved");
const $sol = d.querySelector(".exercise__solution"
$sol.innerHTML = ``;
if (!validateForm()) return printAlert("warning", "⚠️ All fields are required");
*/
