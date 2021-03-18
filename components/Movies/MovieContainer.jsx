import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Favicons } from '../../common';
import { mymovie } from '../../myapi';
import MoviePresenter from './MoviePresenter';

const Container = styled.View`
background-color:black;
height:100%;
`


const MovieContainer = () => {
    return (
        <Container>
            {/* <Favicons/> */}
            <MoviePresenter/>          
        </Container>
    );
};

export default MovieContainer;