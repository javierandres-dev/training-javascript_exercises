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
    $sol = d.querySelector(".exercise__solution"),
    $p1 = d.createElement("p"),
    $p2 = d.createElement("p"),
    date = new Date(),
    day = date.getDay(),
    getHours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  $sol.innerHTML = null;
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
  $sol.appendChild($p1);
  $sol.appendChild($p2);
}
