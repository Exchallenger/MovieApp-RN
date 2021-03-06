import React from 'react';
import styled from 'styled-components/native';
import Horizontal from '../../largecommon/Horizontal';


const Container = styled.View`
flex:1;`;
const Today = ({data}) => {

    return (
        <Container>
            <Horizontal now={data} title="Airing Today"/>
        </Container>
    );
};

export default Today;