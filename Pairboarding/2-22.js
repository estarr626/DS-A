

function mergeSortedLL(list1, list2){
    if(!list1){
        return list2
    }
    if(!list2){
        return list1
    }

    if(list1.val >= list2.val){
        let return_val = list1, primary_list = list1, secondary_list = list2
    }
    else{
        let return_val = list2, primary_list = list2, secondary_list = list1
    }

    while(primary_list || secondary_list){
        if(!primary_list.next){
            primary_list.next = secondary_list
            return return_val
        }
        if(!secondary_list){
            return return_val
        }

        if(primary_list.next.val <= secondary_list.val){
            primary_list = primary_list.next
        }

        else{
            temp = secondary_list
            temp.next = primary_list.next
            primary_list.next = temp
            secondary_list = secondary_list.next
            primary_list = primary_list.next
        }
    }
}
