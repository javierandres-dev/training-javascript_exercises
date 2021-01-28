export function exercise1() {
  const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    d = document,
    $main = d.querySelector("main"),
    $aside = d.querySelector("aside");
  $main.innerHTML = `
  <h4>
    <span>1.&nbsp;</span>A JavaScript program to display the current day
    and time.
  </h4>
  <div class="solution">
    <strong>Solution</strong>
    <p>Today is: <span></span></p>
    <p>Current time is: <span></span></p>
  </div>
`;

  /*
      $div = d.getElementById("1"),
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
*/
}
