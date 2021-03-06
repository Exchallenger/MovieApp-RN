import React from 'react';
import styled from 'styled-components';
import Vertical from '../../largecommon/Vertical';
import Title from '../Title';

const Container = styled.View`
flex:1;
`;

const TopRated = ({data}) => {
    return (
        <Container>
        <Title title="Top Rated"/>
        <Vertical data={data}/>
        </Container>
    );
};

export default TopRated;