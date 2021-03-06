import React from 'react';
import {ScrollView } from 'react-native';
import styled from 'styled-components/native';
import NowPlaying from './NowPlaying';
import Popular from './Popular';
import UpComing from './UpComing';

const Container = styled.View`
    flex:1;
    margin:auto;
    flex-direction:row;
    align-items:center;
`;


const MoviePresenter = (props) => {
  
    return (
        <Container>
        <ScrollView>
                <NowPlaying/>
                <Popular/>
                <UpComing/>
        </ScrollView>
        </Container>
    );
};

export default MoviePresenter;