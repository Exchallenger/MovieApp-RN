import React from 'react';
import styled from 'styled-components';
import TvPresenter from './TvPresenter';

const ScrollView = styled.ScrollView`
    background-color:black;
`;

const TvContainer = () => {
    return (
        <ScrollView>
        <TvPresenter/>
        </ScrollView>
    );
};

export default TvContainer;