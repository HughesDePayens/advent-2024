import { testInput, realInput } from "./inputs/day2-inputs.js";

const splitRealInput = realInput.split("\n");
const splitTestInput = testInput.split("\n");
const start = performance.now();

function runPartOne(input) {
  return 0;
}

function runPartTwo(input) {
  return 0;
}

const partOneTestResult = runPartOne(splitTestInput);
// const partOneTestResult = null;
const partTwoTestResult = runPartTwo(splitTestInput);
// const partTwoTestResult = null;
const partOneRealResult = runPartOne(splitRealInput);
// const partOneRealResult = null;
const partTwoRealResult = runPartTwo(splitRealInput);
// const partTwoRealResult = null;

const end = performance.now();
const time = end - start;
console.log(`Time: ${time.toFixed(2)}ms`);

console.log({
  test: { partOneTestResult, partTwoTestResult },
  real: { partOneRealResult, partTwoRealResult },
});
