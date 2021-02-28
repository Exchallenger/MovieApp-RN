import React from 'react';
import styled from 'styled-components/native';
import Popular from './Popular';

const Container = styled.View`
flex:1;
`;

const MoviePresenter = (props) => {
    return (
        <Container>
            <Popular/>
        </Container>
    );
};

export default MoviePresenter;