import { ADD_ITEM,RESET_LIST , EDIT_LIST } from "../constants"

export function addItem(item) {
 return { type: ADD_ITEM, payload:item }
}

export function resetList(reset) {
 return { type: RESET_LIST,payload: reset }
}

export function editList(edit) {
 return { type: EDIT_LIST,payload: edit }
}



