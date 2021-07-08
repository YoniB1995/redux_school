import React from 'react';
import { List, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
// import {studentsList} from '../../redux/reduxStore'



const mapStateToProps = (state) => {
 return { ...state, items: state.list.items }

}

function ListView(props) {
 const listItems = props.items  ;
 const listItemsJSX = listItems.map(index=><ListItemText >{index}</ListItemText>)
 return (
 <List>
 {listItemsJSX}
 </List>
 );
}
export default connect(
 mapStateToProps,
 null
)(ListView);