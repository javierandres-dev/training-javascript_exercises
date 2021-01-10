"use strict";
const d = document,
  weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
let flag = 0,
  caller = undefined;
export function exercise001() {
  const $div = d.getElementById("1"),
    $solution = $div.querySelector(".solution"),
    $spans = $solution.querySelectorAll("span"),
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
  $spans[0].textContent = `${weekDays[day - 1]}`;
  $spans[1].textContent = `${hours < 10 ? "0" + hours : hours} ${period} : ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${seconds < 10 ? "0" + seconds : seconds}`;
}
export function exercise002() {
  const $div = d.getElementById("2"),
    $btn = $div.querySelector("button");
  $btn.addEventListener("click", () => window.print());
}
export function exercise003() {
  const $div = d.getElementById("3"),
    $solution = $div.querySelector(".solution"),
    $span = $solution.querySelector("span"),
    date = new Date().toLocaleDateString();
  $span.textContent = `${date}`;
}
export function exercise004() {
  const $div = d.getElementById("4"),
    $form = $div.querySelector("form"),
    $inputs = $div.querySelectorAll("input"),
    $btn = $div.querySelector("button");
  $btn.addEventListener("click", () => {
    if (
      $inputs[0].value.length === 0 ||
      $inputs[1].value.length === 0 ||
      $inputs[2].value.length === 0
    ) {
      showResult("4", "warning", "All fields are required.");
      return;
    }
    try {
      const a = parseInt($inputs[0].value),
        b = parseInt($inputs[1].value),
        c = parseInt($inputs[2].value),
        p = (a + b + c) / 2,
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
      if (isNaN(area)) {
        showResult("4", "warning", "Impossible triangle");
      } else {
        showResult("4", "success", `Area = ${area.toFixed(2)}`);
      }
    } catch (error) {
      showResult("4", "danger", `Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise005() {
  const $div = d.getElementById("5"),
    $solution = $div.querySelector(".solution"),
    $p = $solution.querySelector("p");
  const fn = (a) => {
    let text = a.concat(" ");
    setInterval(function () {
      text = text[text.length - 1] + text.substring(0, text.length - 1);
      $p.textContent = text;
    }, 500);
  };
  fn("Hello, World!.");
}
export function exercise006() {
  const $div = d.getElementById("6"),
    $form = $div.querySelector("form"),
    $btn = $div.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.year.value.length === 0) {
      showResult("6", "warning", "Enter a year.");
      return;
    }
    try {
      const year = $form.year.value;
      if (year % 400 === 0) {
        showResult("6", "success", `Yes, ${year} is leap year`);
      } else {
        year % 4 === 0 && year % 100 !== 0
          ? showResult("6", "success", `Yes, ${year} is leap year`)
          : showResult("6", "success", `No, ${year} isn't leap year`);
      }
    } catch (error) {
      showResult("6", "danger", `Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise007() {
  const $div = d.getElementById("7"),
    $p = $div.querySelector("p");
  let start = 2014;
  const end = 2050;
  while (start <= end) {
    const date = new Date(start, 0, 1);
    const day = date.getDay();
    if (day === 0) {
      const $span = d.createElement("span");
      date.getFullYear() === 2045
        ? ($span.textContent = ` and ${date.getFullYear()}. `)
        : ($span.textContent = ` ${date.getFullYear()}, `);
      $p.appendChild($span);
    }
    start++;
  }
}
export function exercise008() {
  const r = Math.floor(Math.random() * 10 + 1),
    $div = d.getElementById("8"),
    $form = $div.querySelector("form"),
    $btn = $div.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.number.value.length === 0) {
      showResult("8", "warning", "Enter a number.");
      return;
    }
    try {
      const n = parseInt($form.number.value);
      if (n < 1 || n > 10) {
        showResult("8", "warning", "Enter a number between 1 to 10");
        return;
      }
      n === r
        ? showResult("8", "success", "Good Work")
        : showResult("8", "warning", `${n} Not matched`);
    } catch (error) {
      showResult("8", "danger", `Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise009() {
  const $div = d.getElementById("9"),
    $solution = $div.querySelector(".solution"),
    $span = $solution.querySelector("span"),
    today = new Date().getTime(),
    year = new Date().getFullYear(),
    nextChristmas = new Date(year, 11, 25).getTime(),
    difference = nextChristmas - today,
    remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  $span.textContent = `${remainingDays} `;
}
export function exercise010() {
  const $div = d.getElementById("10"),
    $form = $div.querySelector("form"),
    $multiply = $form.btnMul,
    $divide = $form.btnDiv;
  $multiply.addEventListener("click", () => {
    if ($form.a.value.length === 0 || $form.b.value === 0) {
      showResult("10", "warning", "All fields are required.");
      return;
    }
    try {
      const a = parseInt($form.a.value),
        b = parseInt($form.b.value);
      showResult("10", "success", `${a} x ${b} = ${a * b}`);
    } catch (error) {
      showResult("10", "danger", `Error: ${error}`);
    }
  });
  $divide.addEventListener("click", () => {
    if ($form.a.value.length === 0 || $form.b.value === 0) {
      showResult("10", "warning", "All fields are required.");
      return;
    }
    try {
      const a = parseInt($form.a.value),
        b = parseInt($form.b.value);
      if (b === 0) {
        showResult("10", "success", `${a} / ${b} is undefined.`);
      } else {
        showResult("10", "success", `${a} / ${b} = ${a / b}`);
      }
    } catch (error) {
      showResult("10", "danger", `Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise011() {
  const $div = d.getElementById("11"),
    $form = $div.querySelector("form"),
    $CtoF = $form.querySelector("#CtoF"),
    $FtoC = $form.querySelector("#FtoC"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.degrees.value.length === 0) {
      showResult("11", "warning", "Please enter degrees.");
      return;
    }
    if ($CtoF.checked === false && $FtoC.checked === false) {
      showResult(
        "11",
        "warning",
        "¿Celsius to Fahrenheit or Fahrenheit to Celsius?"
      );
      return;
    }
    try {
      const degrees = parseInt($form.degrees.value);
      if ($CtoF.checked === true) {
        showResult(
          "11",
          "success",
          `${degrees}° Celsius = ${(degrees * 1.8 + 32).toFixed(
            2
          )}° Fahrenheit.`
        );
      }
      if ($FtoC.checked === true) {
        showResult(
          "11",
          "success",
          `${degrees}° Fahrenheit = ${((degrees - 32) * 0.5556).toFixed(
            2
          )}° Celsius.`
        );
      }
    } catch (error) {
      showResult("11", "danger", `Error: ${error}`);
      $form.reset();
    }
  });
}
export function exercise012() {
  const $div = d.getElementById("12"),
    $solution = $div.querySelector(".solution"),
    $p = d.createElement("p");
  $p.textContent = `The website URL is: ${d.URL}`;
  $solution.appendChild($p);
}
export function exercise013() {
  /*
  const $div = d.getElementById("13"),
    $solution = $div.querySelector(".solution"),
    $p = d.createElement("p");
  $p.textContent = "";
  $solution.appendChild($p);
  */
}
const showResult = (id, type, message) => {
  const $div = d.getElementById(id),
    $solution = $div.querySelector(".solution");
  if (caller !== id) {
    flag = 0;
  }
  if (flag === 1) {
    const $p = $solution.querySelector("p");
    $solution.removeChild($p);
    flag = 0;
  }
  if (flag === 0) {
    flag = 1;
    caller = id;
    const $p = d.createElement("p");
    $p.classList.add("result", type);
    $p.textContent = message;
    $solution.appendChild($p);
    if (type !== "success") {
      setTimeout(() => {
        $solution.removeChild($p);
        flag = 0;
      }, 3000);
    }
  }
};
