const prompt = require("prompt-sync")({ sigint: true });
const userInput = prompt("Enter your height in cm: ");
const height = Number(userInput);
const lastTwoDigitofHeight = height % 100;
const idealWeight = (lastTwoDigitofHeight * 9) / 10;
const maxWeight = lastTwoDigitofHeight;
const minWeight = (lastTwoDigitofHeight * 8) / 10;

if (height > 100) {
  console.log(
    `Cân nặng lý tưởng của bạn là: ${idealWeight}\n
Cân nặng tối đa của bạn là: ${maxWeight}\n
Cân nặng tối thiểu của bạn là: ${minWeight}`,
  );
} else {
  `Your height is too short`;
}
