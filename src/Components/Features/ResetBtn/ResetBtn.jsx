import React from 'react';
import { Button } from '@material-ui/core';
import { resetList } from '../../redux/actions/actions'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
 resetList: () => dispatch(resetList()),
});

function ResetButton(props) {
 function clearPost() {
 props.resetList(); 
 
 };
 return (
 <div>
 <Button onClick={clearPost}>תאפס רשימה</Button>
 </div>
 );
}
export default connect(
 null,
 mapDispatchToProps
)(ResetButton);
