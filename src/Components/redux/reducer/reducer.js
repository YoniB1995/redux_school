import {ADD_ITEM,RESET_LIST} from '../constants'

function reducer(state = { items: [] }, action) {
 switch (action.type) {
 case ADD_ITEM:
 return  {...state,items:action.payload};
 case RESET_LIST:
 return state = {items:""};
 default:
 return state ;
}
}
export default reducer;
