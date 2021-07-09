import React from 'react';
import ListInput from '../Features/ListInput/ListInput';
import ListView from '../Features/ListView/ListView';
import ResetBtn from '../Features/ResetBtn/ResetBtn';
import styled from 'styled-components'

const BodyStyle = styled.div` 
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

function Container() {
    return (
        <BodyStyle>
            <h1>Hello World</h1>
            <ListView />
            <ListInput />
            <ResetBtn />
        </BodyStyle>
    );
}
export default Container