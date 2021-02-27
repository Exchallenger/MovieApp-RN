import React from 'react';
import styled from 'styled-components';
import MoviePresenter from './MoviePresenter';

const Container = styled.View`
background-color:black;
height:100%;
`

const MovieContainer = () => {
    return (
        <Container>
            <MoviePresenter/>
        </Container>
    );
};

export default MovieContainer;