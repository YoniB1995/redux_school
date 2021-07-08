import {ADD_ITEM,RESET_LIST} from '../constants'

function reducer(state = {list:{ items: [] }}, action) {
 switch (action.type) {
 case ADD_ITEM:
 return  { list: {...state,items: state.list.items}};
 case RESET_LIST:
 return state = { list:{items:[]}};
 default:
 return state ;
}
}
export default reducer;
