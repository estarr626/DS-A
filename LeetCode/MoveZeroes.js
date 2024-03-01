/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/


var moveZeroes = function(nums) {
    //start a count of 0s
    let count = 0

    // loop through the array
    for(let i = 0; i < nums.length - count; i++){
        // if its a 0:
        if(nums[i] === 0){
            //splice the 0 out, and increment the count of 0s
            nums.splice(i, 1)
            count++
            // decrement i to make sure you hit every number
            i--
            // add a 0 to the end
            nums.push(0)
        }
    }
}
