// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


var sortedSquares = function (nums) {
  let returnArr = [];

  let left = 0;
  let right = nums.length - 1;
  let returnIndex = right;

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      returnArr[returnIndex--] = nums[left++] ** 2;
    } else {
      returnArr[returnIndex--] = nums[right--] ** 2;
    }
  }

  return returnArr;
};
