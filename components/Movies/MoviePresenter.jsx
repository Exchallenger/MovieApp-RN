import React from 'react';
import styled from 'styled-components';
import Horizontal from '../Horizontal';
import Title from '../Title';

const Container = styled.View`
flex:1;
`;

const MoviePresenter = (props) => {
    return (
        <Container>
            <Title title="Popular Movies"/>
            <Horizontal/>
        </Container>
    );
};

export default MoviePresenter;