import React from 'react';
import styled from 'styled-components/native';


const Container  = styled.View`
    padding: 5px 10px 5px 10px;
    margin:5px 0px 5px 12px;
`;

const Text = styled.Text`
    font-size:17px;
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