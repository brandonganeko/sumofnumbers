/**
 * Solving Experience E26.
 * Created by Brandon on 2/5/17.
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i += 1) {
    total += nums[i];
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i += 1;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }

  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function memoizer(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));

