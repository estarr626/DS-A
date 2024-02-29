"""
Giving a string S, containing only words and spaces, return the length of the last word
"""


"""
Isolate the last word
len(last word)

reverse the string
find the index of the first space after reversed
return that index

"""




def lastWordLength(s):
    reversed = s[::-1]

    while(reversed[0] == " "):
        reversed = reversed[1:]

    if reversed.find(" ") == -1:
        return len(reversed)

    return reversed.find(" ")


print(lastWordLength("a "))
