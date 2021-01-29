export default function getTitle(id) {
  const titles = [
    null,
    "A JavaScript program to display the current day and time.",
    "A JavaScript program to print the contents of the current window.",
    "A JavaScript program to get the current date.",
    "A JavaScript program to find the area of a triangle where lengths of the three of its sides are given.",
    "A JavaScript program to rotate the string 'Hello, World!' in right direction by periodically removing  one letter from the end of the string and attaching it to the front.",
    "A JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.",
    "A JavaScript program to find 1st January is being a Sunday between 2014 and 2050.",
    "A JavaScript program where the program takes a random integer between 1 to 10, the user input a guess  number. If the user input matches with guess number, the program will display a message 'Good Work'  otherwise display a message 'Not matched'.",
  ];
  if (id === 0 || id > titles.length - 1)
    return console.warn("Title don't exist");
  try {
    return titles[id];
  } catch (error) {
    console.warn(error);
  }
}
