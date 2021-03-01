import React from 'react';
import styled from 'styled-components/native';
import NowPlaying from './NowPlaying';
import Popular from './Popular';

const Container = styled.View`
    flex:1;
`;

const MoviePresenter = (props) => {
    return (
        <Container>
            <NowPlaying/>
            <Popular/>
        </Container>
    );
};

export default MoviePresenter;