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
    printAlert("success", "✔️ Done!.");
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
    printAlert("success", "✔️ Done!.");
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
    printAlert("success", "✔️ Done!.");
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
      Enter the three side lengths and press 'Calculate' button
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
      return printAlert("warning", "⚠️ All fields are required.");
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
      str = "Hello, World!.";
    let rotate = str.concat(" ");
    setInterval(function () {
      rotate =
        rotate[rotate.length - 1] + rotate.substring(0, rotate.length - 1);
      $p.textContent = rotate;
    }, 500);
    $sol.innerHTML = null;
    $sol.appendChild($p);
    printAlert("success", "✔️ Done!.");
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
    <legend>Enter a year and press 'Check' button</legend>
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
    if (!validateForm()) return printAlert("warning", "⚠️ Enter a year.");
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
/*
✔️
⚠️
☠️
*/
