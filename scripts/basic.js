"use strict";
const d = document,
  weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
  $spans[0].textContent = `${weekDays[day]}`;
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
  $p.textContent = `Website URL is: ${d.URL}`;
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
export function exercise014() {
  const $div = d.getElementById("14"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.filename.value.length === 0) {
      showResult("14", "warning", "Filename is required");
      return;
    }
    const filename = $form.filename.value,
      count = [...filename].filter((dot) => dot === ".").length;
    if (count !== 1) {
      showResult("14", "warning", "Wrong filename");
      return;
    }
    try {
      const FILENAME = filename.split("."),
        extension = FILENAME[1];
      showResult(
        "14",
        "success",
        `The extension of a filename is: ${extension}`
      );
    } catch (error) {
      showResult("14", "danger", `Error: ${error}`);
    }
  });
}
export function exercise015() {
  const $div = d.getElementById("15"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.number.value.length === 0) {
      showResult("15", "warning", "Number is required");
      return;
    }
    try {
      const number = parseInt($form.number.value);
      if (number <= 13) {
        showResult(
          "15",
          "success",
          `The difference between ${number} and 13 is: ${13 - number}`
        );
      } else {
        showResult(
          "15",
          "success",
          `The double the absolute difference between ${number} and 13 is: ${
            (number - 13) * 2
          }`
        );
      }
    } catch (error) {
      showResult("15", "danger", `Error: ${error}`);
    }
  });
}
export function exercise016() {
  const $div = d.getElementById("16"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.n1.value.length === 0 || $form.n2.value.length === 0) {
      showResult("16", "warning", "All fields are required");
      return;
    }
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      if (a === b) {
        showResult(
          "16",
          "success",
          `${a} = ${b} => The triple their sum = ${(a + b) * 3}`
        );
      } else {
        showResult("16", "success", `${a} + ${b} = ${a + b}`);
      }
    } catch (error) {
      showResult("16", "danger", `Error: ${error}`);
    }
  });
}
export function exercise017() {
  const $div = d.getElementById("17"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.number.value.length === 0) {
      showResult("17", "warning", "Enter a number");
      return;
    }
    try {
      const number = parseInt($form.number.value);
      if (number > 19) {
        showResult("17", "success", `${(number - 19) * 3}`);
      } else {
        showResult("17", "success", `${19 - number}`);
      }
    } catch (error) {
      showResult("17", "danger", `Error: ${error}`);
    }
  });
}
export function exercise018() {
  const $div = d.getElementById("18"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.n1.value.length === 0 || $form.n2.value.length === 0) {
      showResult("18", "warning", "All fields are required");
      return;
    }
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      a === 50 || b === 50 || a + b === 50
        ? showResult("18", "success", "true")
        : showResult("18", "info", "false");
    } catch (error) {
      showResult("18", "danger", `Error: ${error}`);
    }
  });
}
export function exercise019() {
  const $div = d.getElementById("19"),
    $solution = $div.querySelector(".solution"),
    $form = $solution.querySelector("form"),
    $btn = $form.querySelector("button");
  $btn.addEventListener("click", () => {
    if ($form.number.value.length === 0) {
      showResult("19", "warning", "Enter a number");
      return;
    }
    try {
      const number = parseInt($form.number.value);
      if (Math.abs(100 - number) <= 20) {
        showResult("19", "success", `${number} is within 20 of 100`);
      } else if (Math.abs(400 - number) <= 20) {
        showResult("19", "success", `${number} is within 20 of 400`);
      } else {
        showResult("19", "warning", `${number} is out of both ranges`);
      }
    } catch (error) {
      showResult("19", "danger", `Error: ${error}`);
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
      showResult("20", "warning", "All fields are required");
      return;
    }
    try {
      const a = parseInt($form.n1.value),
        b = parseInt($form.n2.value);
      (a < 0 && b > 0) || (a > 0 && b < 0)
        ? showResult("20", "success", "true")
        : showResult("20", "info", "false");
    } catch (error) {
      showResult("20", "danger", `Error: ${error}`);
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
      return showResult(21, "warning", "Enter a string.");
    if ($input.value.startsWith("Py")) {
      showResult(21, "success", $input.value);
    } else {
      showResult(21, "success", `Py${$input.value}`);
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
      return showResult(22, "warning", "All fields are required.");
    if ($position.value > $string.value.length - 1 || $position.value < 0)
      return showResult(22, "warning", "Out of range.");
    try {
      let newStr = "";
      for (let i = 0; i < $string.value.length; i++) {
        if (i != $position.value) newStr += $string.value[i];
      }
      showResult(22, "success", `${newStr}`);
    } catch (error) {
      showResult(22, "danger", `Error: ${error}`);
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
      return showResult(23, "warning", "Enter a string.");
    if ($string.value.length < 1)
      return showResult(
        23,
        "warning",
        "The string length must be greater than or equal to 1."
      );
    if ($string.value.length === 1)
      return showResult(23, "success", `${$string.value}`);
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
      showResult(23, "success", `${newStr}`);
    } catch (error) {
      showResult(23, "danger", `Error: ${error}`);
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
      return showResult(24, "warning", "Enter a string.");
    try {
      let newStr = $string.value[0];
      for (let i = 0; i < $string.value.length; i++) {
        newStr += $string.value[i];
      }
      newStr += $string.value[0];
      showResult(24, "success", `${newStr}`);
    } catch (error) {
      showResult(24, "danger", `Error: ${error}`);
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
      return showResult(25, "warning", "Enter a number.");
    if ($number.value === "0")
      return showResult(25, "success", "0 isn't multiple of 3, nor of 7.");
    try {
      const number = $number.value;
      if (number % 3 === 0 || number % 7 === 0) {
        if (number % 3 === 0 && number % 7 === 0) {
          showResult(
            25,
            "success",
            `${number} is multiple of 3, also is multiple of 7.`
          );
        } else if (number % 3 === 0) {
          showResult(25, "success", `${number} is multiple of 3.`);
        } else {
          showResult(25, "success", `${number} is multiple of 7.`);
        }
      } else {
        showResult(25, "success", `${number} isn't multiple of 3, nor of 7.`);
      }
    } catch (error) {
      showResult(25, "danger", `Error: ${error}`);
    }
  });
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
