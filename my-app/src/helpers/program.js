import { printAlert } from "./auxiliar";
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
} from "./basic";
export default function program(id) {
  switch (id) {
    case 1:
      exercise1();
      break;
    case 2:
      exercise2();
      break;
    case 3:
      exercise3();
      break;
    case 4:
      exercise4();
      break;
    case 5:
      exercise5();
      break;
    case 6:
      exercise6();
      break;
    default:
      printAlert("danger", `☠️ Error: The exercise${id} doesn't exist!`);
      break;
  }
}
