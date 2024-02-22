# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

"""

Compare the heads, start with whichever head is lower. That becomes PrimaryList
Keep track of where we are in SecondaryList.
If SecondaryList.current, is lower than PrimaryList.next: PrimaryList.next = Secondarylist.current, SecondaryList.next = old PrimaryList.next


"""

from math import max



def merge_sorted_linked_lists(list1, list2):
    if not list1:
        return list2
    if not list2:
        return list1

    if list1.val >= list2.val:
        return_val = list1
        primary_list = list1
        secondary_list = list2
    else:
        return_val = list2
        primary_list = list2
        secondary_list = list1

    while primary_list.next or secondary_list:

        if primary_list.next == None:
            primary_list.next = secondary_list
            return return_val

        if secondary_list == None:
            return return_val

        if primary_list.next.val <= secondary_list.val:
            primary_list = primary_list.next

        else:
            temp = secondary_list
            temp.next = primary_list.next
            primary_list.next = temp

            secondary_list = secondary_list.next
            primary_list = primary_list.next

    return return_val
