import React from 'react';
import styled from 'styled-components/native';


const Container  = styled.View`
    /* flex:1; */
    padding: 5px 10px 5px 10px;
    margin:12px 0px 12px 12px;
`;

const Text = styled.Text`
    font-size:18px;
    color:white;
    font-weight:500;
`;

const Title = ({title}) => {
    return (
        <Container>
            <Text>{title}</Text>
        </Container>
    );
};

export default Title;

//title로 사용