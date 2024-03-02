/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

var isAnagram = function(s, t) {
    let split1 = s.split("")
    let split2 = t.split("")

    split1.sort()
    split2.sort()

   return split1.join() == split2.join()

};
