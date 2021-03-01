import React, { useState } from 'react';
import styled from 'styled-components/native';
import { mymovie } from '../../myapi';
import MoviePresenter from './MoviePresenter';

const Container = styled.View`
flex:1;
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