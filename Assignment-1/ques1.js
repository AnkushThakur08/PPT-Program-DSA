/* Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example:
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]
*/

const targetSum = (arr, target) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let val = target - arr[i];

    if (map.hasOwnProperty(val)) {
      if (i !== map[val]) {
        return [i, map[val]];
      }
    }
  }
};

let arr = [1, 2, 4, 3, 5];
let target = 8;

console.log(targetSum(arr, target));
