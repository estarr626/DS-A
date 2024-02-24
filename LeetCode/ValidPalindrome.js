/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

var isPalindrome = function(s) {
    let alphanumeric = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let isolated = []

    for(let i = 0; i < s.length; i++){
        if(alphanumeric.includes(s[i].toLowerCase())) isolated.push(s[i].toLowerCase())
    }

    let pointer1 = 0
    let pointer2 = isolated.length - 1

    while(pointer1 < pointer2){
        if(isolated[pointer1] != isolated[pointer2]) return false

        pointer1++
        pointer2--
    }

    return true
};
