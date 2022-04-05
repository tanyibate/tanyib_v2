const lengths = [59.31, 61.12, 36.54, 55.44];
let previous = 0;
let lengthPercentages = [];
const length = 212.41;
lengths.forEach((el) => {
  let calculatedPercentage = el / length;
  lengthPercentages.push(calculatedPercentage + previous);
  previous += calculatedPercentage;
});
lengthPercentages = lengthPercentages.map((el) => el * 100);
console.log(lengthPercentages);
