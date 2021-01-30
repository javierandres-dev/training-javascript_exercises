import { printAlert } from "./auxiliar";
import {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
  exercise8,
  exercise9,
  exercise10,
  exercise11,
  exercise12,
  exercise13,
  exercise14,
  exercise15,
  exercise16,
  exercise17,
} from "./basic";
export default function program(id) {
  try {
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
      case 7:
        exercise7();
        break;
      case 8:
        exercise8();
        break;
      case 9:
        exercise9();
        break;
      case 10:
        exercise10();
        break;
      case 11:
        exercise11();
        break;
      case 12:
        exercise12();
        break;
      case 13:
        exercise13();
        break;
      case 14:
        exercise14();
        break;
      case 15:
        exercise15();
        break;
      case 16:
        exercise16();
        break;
      case 17:
        exercise17();
        break;
      default:
        printAlert("danger", `☠️ Error: The exercise${id} doesn't exist!`);
        break;
    }
  } catch (error) {
    console.warn(error);
  }
}
