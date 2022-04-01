const lengths = [53.2, 61.12];
let previous = 0;
let lengthPercentages = [];
const length = 258.41;
lengths.forEach((el) => {
  let calculatedPercentage = el / length;
  lengthPercentages.push(calculatedPercentage + previous);
  previous += calculatedPercentage;
});
lengthPercentages = lengthPercentages.map((el) => el * 100);
console.log(lengthPercentages);
