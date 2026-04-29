const userInput = prompt("Enter a number:");
const number = Number(userInput);
if (number > 0) {
  console.log("Giá trị bạn nhập là số dương");
} else if (number < 0) {
  console.log("Giá trị bạn nhập là số âm");
} else {
  console.log("Gía trị bạn nhập là số 0");
}
