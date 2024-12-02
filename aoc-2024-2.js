import { testInput, realInput } from "./inputs/day2-inputs.js";

const input = testInput;

const splitRealInput = realInput.split("\n");
const splitTestInput = testInput.split("\n");
const start = performance.now();

function runPartOne(input) {
  return getSafetyValue(input);
}

function runPartTwo(input) {
  const safetyLevels = input.map((line) => {
    const possibleLevels = buildPossibleLevels(line.split(" "));

    const safetyValues = possibleLevels.map((levels) => {
      return isItSafe(levels);
    });

    return safetyValues.find((value) => value);
  });

  return safetyLevels.filter((safe) => safe).length;
}

function getSafetyValue(input) {
  return input
    .map((levels) => {
      return isItSafe(levels.split(" "));
    })
    .filter((safe) => safe).length;
}

function isItSafe(levels) {
  let safe = true;
  let direction = null;

  levels.forEach((level, index) => {
    const nextLevel = levels[index + 1];

    if (direction === null) {
      direction = level - nextLevel < 0 ? "increasing" : "decreasing";
    }

    if (compareTwoLevels(level, nextLevel, index, direction) === false) {
      safe = false;
    }
  });

  return safe;
}

function compareTwoLevels(level, nextLevel, index, direction) {
  if (!nextLevel && nextLevel !== 0) return true;
  if (level === nextLevel) return false;
  if (Math.abs(level - nextLevel) > 3) return false;

  if (index !== 0) {
    const newDirection = level - nextLevel < 0 ? "increasing" : "decreasing";

    if (direction !== newDirection) return false;
  }

  return true;
}

function buildPossibleLevels(line) {
  const levels = [line];

  const otherLevels = line.map((val, index) => {
    const newLevels = [];
    line.forEach((newVal, idx) => {
      if (index !== idx) newLevels.push(newVal);
    });

    return newLevels;
  });

  return [...levels, ...otherLevels];
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
