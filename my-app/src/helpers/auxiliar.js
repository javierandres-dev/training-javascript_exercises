const d = document;

export const validateForm = () => {
  const $inputs = d.querySelectorAll("input");
  let i = 0;
  do {
    if ($inputs[i].value.length === 0) return false;
    i++;
  } while (i < $inputs.length);
  return true;
};

export const getWeekDays = () => {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
};

export const printAlert = (type, content) => {
  const $alert = d.querySelector(".alert"),
    $p = d.createElement("p");
  $p.classList.add(type);
  $p.textContent = content;
  $alert.innerHTML = null;
  $alert.appendChild($p);
  if (type !== "success") {
    setTimeout(() => {
      $alert.innerHTML = null;
    }, 4000);
  }
};

export const cleanPrevious = () => {
  const $a = d.querySelector(".exercise__solution"),
    $b = d.querySelector(".alert");
  $a.innerHTML = null;
  $b.innerHTML = null;
};
