var containsDuplicate = function(nums) {
    let dict = {}

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]

        if(dict[num]){
            return true
        }
        dict[num] = 1
    }

    return false

};
