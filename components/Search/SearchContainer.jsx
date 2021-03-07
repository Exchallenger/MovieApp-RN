import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import SearchPresenter from './SearchPresenter';

const Container = styled.View`
background-color:black;
height:100%;
`;

const Search = () => {
    return (
        <Container>
        <ScrollView>
        <SearchPresenter/>
        </ScrollView>
        </Container>
    );
};

export default Search;