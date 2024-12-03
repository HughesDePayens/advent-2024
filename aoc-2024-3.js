import { testInput, realInput } from "./inputs/day3-inputs.js";

const start = performance.now();

const runPartOne = (input) => doMultiplications(findMultMatches(input));

const runPartTwo = (input) =>
  doMultiplications(findMultMatches([findOperationsToDo(input)]));

function findMultMatches(input) {
  return input
    .map((line) => line.match(new RegExp(/mul\(\d+,\d+\)/g)))
    .reduce((acc, current) => {
      return [...acc, ...current];
    }, []);
}

function findOperationsToDo(input) {
  return input
    .map((line) => line.split("do()").map((line) => line.split("don't()")[0]))
    .join("");
}

function doMultiplications(matches) {
  return matches.reduce((acc, current) => {
    const splitMatch = current.slice(4, -1).split(",");
    return acc + splitMatch[0] * splitMatch[1];
  }, 0);
}

const partOneTestResult = runPartOne(testInput);
// const partOneTestResult = null;
const partTwoTestResult = runPartTwo(testInput);
// const partTwoTestResult = null;
const partOneRealResult = runPartOne(realInput);
// const partOneRealResult = null;
const partTwoRealResult = runPartTwo(realInput);
// const partTwoRealResult = null;

const end = performance.now();
const time = end - start;
console.log(`Time: ${time.toFixed(2)}ms`);

console.log({
  test: { partOneTestResult, partTwoTestResult },
  real: { partOneRealResult, partTwoRealResult },
});
