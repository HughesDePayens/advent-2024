import { testInput, realInput } from "./inputs/day2-inputs.js";

const input = testInput;

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
const partTwoTestResult = runPartTwo(splitTestInput);
const partOneRealResult = runPartOne(splitRealInput);
const partTwoRealResult = runPartTwo(splitRealInput);

const end = performance.now();
const time = end - start;
console.log(`Time: ${time.toFixed(2)}ms`);

console.log({
  test: { partOneTestResult, partTwoTestResult },
  real: { partOneRealResult, partTwoRealResult },
});
