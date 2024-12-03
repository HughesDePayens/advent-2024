import { testInput, realInput } from "./inputs/day3-inputs.js";

const splitRealInput = realInput;
const splitTestInput = testInput;
const start = performance.now();

function runPartOne(input) {
  console.log(input);
  return doMultiplications(findMultMatches(input));
}

function runPartTwo(input) {
  return doMultiplications(findMultMatches([findOperationsToDo(input)]));
}

function findMultMatches(input) {
  return input
    .map((line) => {
      const regex = new RegExp(/mul\(\d+,\d+\)/g);
      return line.match(regex);
    })
    .reduce((acc, current) => {
      return [...acc, ...current];
    }, []);
}

function findOperationsToDo(input) {
  return input
    .map((line) => line.split("do()"))
    .map((operation) => {
      return operation.map((line) => line.split("don't()")[0]);
    })
    .join("");
}

function doMultiplications(matches) {
  return matches.reduce((acc, current) => {
    const splitMatch = current.slice(4, -1).split(",");
    return acc + splitMatch[0] * splitMatch[1];
  }, 0);
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
