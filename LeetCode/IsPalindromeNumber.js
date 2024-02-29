// Given an integer x, return true if x is a palindrome and false otherwise.

var isPalindrome = function(x) {

    let stringX = String(x)

    let leftPoint = 0
    let rightPoint = stringX.length - 1

    while(leftPoint < rightPoint){
        if(stringX[leftPoint] != stringX[rightPoint]){
            return false
        }

        leftPoint++
        rightPoint--
    }

    return true
};
