import React, { useState,useRef } from 'react';
import { TextField, Button } from '@material-ui/core';
import { addItem } from '../../redux/actions/actions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => ({
 addItem: (item) => dispatch(addItem(item))
})

function ListInput(props) {
    const arr = []
 const [item, setItem] = useState(arr);
 const inputRef = useRef()
 
 function changeHandler(e) {
 setItem(e.target.value)
 
}

 function addToListItem() {
    //  arr.push(item)
 props.addItem(item);
 };

 return (
 <div>
 <TextField onChange={changeHandler} ref={inputRef} />
 <Button onClick={addToListItem}>הוסף פריט לרשימה</Button>
 </div>
 );
}

export default connect(
 null,
 mapDispatchToProps
)(ListInput)