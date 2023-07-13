/*
Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

Example :
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]
*/

const removeOccurence = (arr, n) => {
  let i = 0;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] != n) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
    j++;
  }

  return i;
};

let arr = new Array(3, 2, 2, 3);
let val = 3;
console.log(removeOccurence(arr, val));
console.log(...arr);
