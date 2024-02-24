var isAnagram = function(s, t) {
    let split1 = s.split("")
    let split2 = t.split("")

    split1.sort()
    split2.sort()

   return split1.join() == split2.join()

};
