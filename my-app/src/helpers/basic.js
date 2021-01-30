import { printAlert, getWeekDays, validateForm } from "./auxiliar";
const d = document;
export function exercise1() {
  try {
    const weekDays = getWeekDays(),
      $sol = d.querySelector(".exercise__solution"),
      $p1 = d.createElement("p"),
      $p2 = d.createElement("p"),
      date = new Date(),
      day = date.getDay(),
      getHours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
    let hours = undefined;
    let period = undefined;
    if (getHours >= 0 && getHours <= 12) {
      hours = getHours;
      period = "AM";
    } else {
      hours = getHours - 12;
      period = "PM";
    }
    $p1.textContent = `Today is: ${weekDays[day]} `;
    $p2.textContent = `${hours < 10 ? "0" + hours : hours} ${period} : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds}`;
    $sol.innerHTML = null;
    $sol.appendChild($p1);
    $sol.appendChild($p2);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise2() {
  try {
    const $sol = d.querySelector(".exercise__solution"),
      $btn = d.createElement("button");
    $btn.textContent = "Print";
    $btn.addEventListener("click", () => window.print());
    $sol.innerHTML = null;
    $sol.appendChild($btn);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise3() {
  try {
    const $sol = d.querySelector(".exercise__solution"),
      $p = d.createElement("p"),
      date = new Date().toLocaleDateString();
    $p.textContent = `${date}`;
    $sol.innerHTML = null;
    $sol.appendChild($p);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise4() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
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
  const $form = $sol.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    try {
      const $inputs = $form.querySelectorAll("input"),
        a = parseInt($inputs[0].value),
        b = parseInt($inputs[1].value),
        c = parseInt($inputs[2].value),
        p = (a + b + c) / 2,
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      if (isNaN(area)) {
        printAlert("warning", "⚠️ Impossible triangle");
      } else {
        printAlert("success", `✔️ Area = ${area.toFixed(2)}`);
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise5() {
  try {
    const $sol = d.querySelector(".exercise__solution"),
      $p = d.createElement("p"),
      str = "Hello, World!";
    let rotate = str.concat(" ");
    setInterval(function () {
      rotate =
        rotate[rotate.length - 1] + rotate.substring(0, rotate.length - 1);
      $p.textContent = rotate;
    }, 500);
    $sol.innerHTML = null;
    $sol.appendChild($p);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise6() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a year and press 'RESULT' button</legend>
    <label>Enter a year</label>
    <input
      type="number"
      name="year"
      placeholder="e.g. 1976"
      required
    />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return printAlert("warning", "⚠️ Enter a year");
    try {
      const year = $form.year.value;
      if (year % 400 === 0) {
        printAlert("success", `✔️ Yes, ${year} is leap year`);
      } else {
        year % 4 === 0 && year % 100 !== 0
          ? printAlert("success", `✔️ Yes, ${year} is leap year`)
          : printAlert("success", `✔️ No, ${year} isn't leap year`);
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise7() {
  try {
    const $sol = d.querySelector(".exercise__solution"),
      $p = d.createElement("p"),
      end = 2050;
    let start = 2014;
    while (start <= end) {
      const date = new Date(start, 0, 1),
        day = date.getDay();
      if (day === 0) {
        const $span = d.createElement("span");
        date.getFullYear() === 2045
          ? ($span.textContent = ` and ${date.getFullYear()}. `)
          : ($span.textContent = ` ${date.getFullYear()}, `);
        $p.appendChild($span);
      }
      start++;
    }
    $sol.innerHTML = null;
    $sol.appendChild($p);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise8() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Guess number</legend>
    <label
      >Enter a number between 1 to 10 and press 'RESULT' button</label
    >
    <input
      type="number"
      name="number"
      min="1" max="10"
      placeholder="e.g. 8"
      required
    />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector("form"),
    r = Math.floor(Math.random() * 10 + 1);
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return printAlert("warning", "⚠️ Enter a number");
    try {
      const n = parseInt($form.number.value);
      if (n < 1 || n > 10) {
        printAlert("warning", "⚠️ Enter a number between 1 to 10");
        return;
      }
      n === r
        ? printAlert("success", "✔️ Good Work")
        : printAlert("warning", `⚠️ ${n} Not matched, enter other number`);
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise9() {
  try {
    const $sol = d.querySelector(".exercise__solution"),
      $p = d.createElement("p"),
      today = new Date().getTime(),
      year = new Date().getFullYear(),
      nextChristmas = new Date(year, 11, 25).getTime(),
      difference = nextChristmas - today,
      remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    $p.textContent = `${remainingDays} days until next Christmas.`;
    $sol.innerHTML = null;
    $sol.appendChild($p);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise10() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
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
  const $form = $sol.querySelector("form"),
    $multiply = $form.btnMul,
    $divide = $form.btnDiv;
  $multiply.addEventListener("click", () => {
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    try {
      const a = parseInt($form.a.value),
        b = parseInt($form.b.value);
      printAlert("success", `✔️ ${a} x ${b} = ${a * b}`);
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
    }
  });
  $divide.addEventListener("click", () => {
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    try {
      const a = parseInt($form.a.value),
        b = parseInt($form.b.value);
      if (b === 0) {
        printAlert("success", `✔️ ${a} / ${b} is undefined.`);
      } else {
        printAlert("success", `✔️ ${a} / ${b} = ${a / b}`);
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise11() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter degrees and select a type convertion</legend>
    <label for="degrees">Enter degrees</label>
    <input
      type="number"
      name="degrees"
      placeholder="e.g. 11"
      required
    />
    <input type="radio" name="to" id="CtoF" />
    <label for="CtoF">Celsius to Fahrenheit</label>
    <input type="radio" name="to" id="FtoC" />
    <label for="FtoC">Fahrenheit to Celsius</label>
  </fieldset>
  <button type="button">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector("form"),
    $CtoF = $form.querySelector("#CtoF"),
    $FtoC = $form.querySelector("#FtoC"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    if ($CtoF.checked === false && $FtoC.checked === false) {
      printAlert(
        "warning",
        "⚠️ ¿Celsius to Fahrenheit or Fahrenheit to Celsius?"
      );
      return;
    }
    try {
      const degrees = parseInt($form.degrees.value);
      if ($CtoF.checked === true) {
        printAlert(
          "success",
          `✔️ ${degrees}° Celsius = ${(degrees * 1.8 + 32).toFixed(
            2
          )}° Fahrenheit.`
        );
      }
      if ($FtoC.checked === true) {
        printAlert(
          "success",
          `✔️ ${degrees}° Fahrenheit = ${((degrees - 32) * 0.5556).toFixed(
            2
          )}° Celsius.`
        );
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise12() {
  try {
    const $sol = d.querySelector(".exercise__solution"),
      $p = d.createElement("p");
    $p.textContent = `URL: ${d.URL}`;
    $sol.innerHTML = null;
    $sol.appendChild($p);
    printAlert("success", "✔️ Done!");
  } catch (error) {
    printAlert("danger", `☠️ Error: ${error}`);
  }
}
export function exercise13() {
  /*
  const $sol = d.querySelector(".exercise__solution"),
    $p = d.createElement("p");
  $p.textContent = "";
  $sol.innerHTML = null;
  $solution.appendChild($p);
*/
  printAlert("info", "🚶 Unsolved");
  console.info("Unsolved");
}
export function exercise14() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a filename and press 'RESULT' button</legend>
    <input type="text" name="filename" placeholder="e.g. readme.txt" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
  `;
  const $form = $sol.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    const filename = $form.filename.value,
      count = [...filename].filter((dot) => dot === ".").length;
    if (count !== 1) return printAlert("warning", "⚠️ Wrong filename");
    try {
      const FILENAME = filename.split("."),
        extension = FILENAME[1];
      printAlert("success", `✔️ The extension of a filename is: ${extension}`);
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
    }
  });
}
export function exercise15() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a number and press 'RESULT' button</legend>
    <input type="number" name="number" placeholder="e.g. 15" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
`;
  const $form = $sol.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    try {
      const number = parseInt($form.number.value);
      if (number <= 13) {
        printAlert(
          "success",
          `✔️ The difference between ${number} and 13 is: ${13 - number}`
        );
      } else {
        printAlert(
          "success",
          `✔️ The double the absolute difference between ${number} and 13 is: ${
            (number - 13) * 2
          }`
        );
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
    }
  });
}
export function exercise16() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
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
  const $form = $sol.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("here...");
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      if (a === b) {
        printAlert(
          "success",
          `✔️ ${a} = ${b} => The triple their sum = ${(a + b) * 3}`
        );
      } else {
        printAlert("success", `✔️ ${a} + ${b} = ${a + b}`);
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
    }
  });
}
export function exercise17() {
  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = `
<form>
  <fieldset>
    <legend>Enter a number and press 'RESULT' button</legend>
    <input type="number" name="number" placeholder="e.g. 17" required />
  </fieldset>
  <button type="submit">RESULT</button>
</form>
    `;
  const $form = $sol.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm())
      return printAlert("warning", "⚠️ All fields are required");
    try {
      const number = parseInt($form.number.value);
      if (number > 19) {
        printAlert("success", `✔️ ${(number - 19) * 3}`);
      } else {
        printAlert("success", `✔️ ${19 - number}`);
      }
    } catch (error) {
      printAlert("danger", `☠️ Error: ${error}`);
    }
  });
}
export function exercise18() {
  const $div = d.getElementById("18"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.n1.value.length === 0 || $form.n2.value.length === 0) {
      printAler("warning", "All fields are required");
      return;
    }
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      a === 50 || b === 50 || a + b === 50
        ? printAler("success", "true")
        : printAler("info", "false");
    } catch (error) {
      printAler("danger", `Error: ${error}`);
    }
  });
}
/*
✔️
printAlert("success", "✔️ Done!");
⚠️
printAlert("warning", "⚠️ ");
☠️
printAlert("danger", `☠️ Error: ${error}`);
🚶
printAlert("info", "🚶 Unsolved");
console.info("Unsolved");

if (!validateForm()) return printAlert("warning", "⚠️ All fields are required");

  const $sol = d.querySelector(".exercise__solution");
  $sol.innerHTML = null;
  $sol.innerHTML = ``;

export function exercise019() {
  const $div = d.getElementById("19"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.number.value.length === 0) {
      printAler("warning", "Enter a number");
      return;
    }
    try {
      const number = parseInt($form.number.value);
      if (Math.abs(100 - number) <= 20) {
        printAler("success", `${number} is within 20 of 100`);
      } else if (Math.abs(400 - number) <= 20) {
        printAler("success", `${number} is within 20 of 400`);
      } else {
        printAler("warning", `${number} is out of both ranges`);
      }
    } catch (error) {
      printAler("danger", `Error: ${error}`);
    }
  });
}
export function exercise020() {
  const $div = d.getElementById("20"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.n1.value.length === 0 || $form.n2.value.length === 0) {
      printAler("warning", "All fields are required");
      return;
    }
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      (a < 0 && b > 0) || (a > 0 && b < 0)
        ? printAler("success", "true")
        : printAler("info", "false");
    } catch (error) {
      printAler("danger", `Error: ${error}`);
    }
  });
}
export function exercise021() {
  const $div = d.getElementById("21"),
    $form = $div.querySelector("form"),
    $input = $form.querySelector("#in21");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($input.value === "")
      return printAler(arning", "Enter a string.");
    if ($input.value.startsWith("Py")) {
      printAler(uccess", $input.value);
    } else {
      printAler(uccess", `Py${$input.value}`);
    }
  });
}
export function exercise022() {
  const $div = d.getElementById("22"),
    $form = $div.querySelector("form"),
    $string = $form.querySelector("#in22a"),
    $position = $form.querySelector("#in22b");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($string.value === "" || $position.value === "")
      return printAler(arning", "All fields are required.");
    if ($position.value > $string.value.length - 1 || $position.value < 0)
      return printAler(arning", "Out of range.");
    try {
      let newStr = "";
      for (let i = 0; i < $string.value.length; i++) {
        if (i != $position.value) newStr += $string.value[i];
      }
      printAler(uccess", `${newStr}`);
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
export function exercise023() {
  const $div = d.getElementById("23"),
    $form = $div.querySelector("form"),
    $string = $form.querySelector("#in23");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($string.value === "")
      return printAler(arning", "Enter a string.");
    if ($string.value.length < 1)
      return printAler(   23,
        "warning",
        "The string length must be greater than or equal to 1."
      );
    if ($string.value.length === 1)
      return printAler(uccess", `${$string.value}`);
    try {
      let newStr = "";
      for (let i = 0; i < $string.value.length; i++) {
        if (i === 0) {
          newStr += $string.value[$string.value.length - 1];
        } else if (i === $string.value.length - 1) {
          newStr += $string.value[0];
        } else {
          newStr += $string.value[i];
        }
      }
      printAler(uccess", `${newStr}`);
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
export function exercise024() {
  const $div = d.getElementById("24"),
    $form = $div.querySelector("form"),
    $string = $form.querySelector("#in24");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($string.value === "")
      return printAler(arning", "Enter a string.");
    try {
      let newStr = $string.value[0];
      for (let i = 0; i < $string.value.length; i++) {
        newStr += $string.value[i];
      }
      newStr += $string.value[0];
      printAler(uccess", `${newStr}`);
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
export function exercise025() {
  const $div = d.getElementById("25"),
    $form = $div.querySelector("form"),
    $number = $form.querySelector("#in25");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($number.value === "")
      return printAler(arning", "Enter a number.");
    if ($number.value === "0")
      return printAler(uccess", "0 isn't multiple of 3, nor of 7.");
    try {
      const number = $number.value;
      if (number % 3 === 0 || number % 7 === 0) {
        if (number % 3 === 0 && number % 7 === 0) {
          printAler(       25,
            "success",
            `${number} is multiple of 3, also is multiple of 7.`
          );
        } else if (number % 3 === 0) {
          printAler(uccess", `${number} is multiple of 3.`);
        } else {
          printAler(uccess", `${number} is multiple of 7.`);
        }
      } else {
        printAler(uccess", `${number} isn't multiple of 3, nor of 7.`);
      }
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
export function exercise026() {
  const $div = d.getElementById("26"),
    $form = $div.querySelector("form"),
    $string = $form.querySelector("#in26");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($string.value === "")
      return printAler(arning", "Enter a string.");
    if ($string.value.length < 3)
      return printAler(arning", "The string length must be 3 or more.");
    try {
      let newStr = $string.value.substring($string.value.length - 3);
      newStr = newStr + $string.value + newStr;
      printAler(uccess", `${newStr}`);
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
export function exercise027() {
  const $div = d.getElementById("27"),
    $form = $div.querySelector("form"),
    $string = $form.querySelector("#in27");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($string.value === "")
      return printAler(arning", "Enter a string.");
    if ($string.value.length < 4) return printAler(arning", false);
    try {
      $string.value.startsWith("Java")
        ? printAler(uccess", `${$string.value.startsWith("Java")}`)
        : printAler(nfo", `${$string.value.startsWith("Java")}`);
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
export function exercise028() {
  const $div = d.getElementById("28"),
    $form = $div.querySelector("form"),
    $n1 = $form.querySelector("#in28a"),
    $n2 = $form.querySelector("#in28b");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      $n1.value === "" ||
      isNaN($n1.value) !== false ||
      $n2.value === "" ||
      isNaN($n2.value) !== false
    )
      return printAler(arning", "Enter two numbers.");
    try {
      console.log($n1.value, $n2.value);
    } catch (error) {
      printAler(anger", `Error: ${error}`);
    }
  });
}
*/
