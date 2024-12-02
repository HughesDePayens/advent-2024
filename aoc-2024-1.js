import { testInput, realInput } from "./inputs/day1-inputs.js";

const input = realInput;

const splitInput = input.split("\n");
const leftColumn = [];
const rightColumn = [];

const start = performance.now();

for (const line of splitInput) {
  const splitLine = line.split("   ");
  leftColumn.push(splitLine[0]);
  rightColumn.push(splitLine[splitLine.length - 1]);
}

leftColumn.sort();
rightColumn.sort();

const part1 = leftColumn.reduce((total, leftNum, index) => {
  const smaller = Math.min(rightColumn[index], leftNum);
  const larger = Math.max(rightColumn[index], leftNum);
  return total + (larger - smaller);
}, 0);

const leftColumnValues = {};

for (const p2line of leftColumn) {
  typeof leftColumnValues[p2line] !== "object"
    ? (leftColumnValues[p2line] = { count: 1, rightColCount: 0 })
    : leftColumnValues[p2line]["count"]++;
}

for (const p2rightLine of rightColumn) {
  if (typeof leftColumnValues[p2rightLine] !== "object") continue;
  leftColumnValues[p2rightLine]["rightColCount"]++;
}

const part2 = Object.entries(leftColumnValues).reduce((acc, entry) => {
  const [key, value] = [entry[0], entry[1]];
  return acc + key * value["count"] * value["rightColCount"];
}, 0);

const end = performance.now();
const time = end - start;
console.log(`Time: ${time.toFixed(2)}ms`);
console.log({ part1, part2 });
