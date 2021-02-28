import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { apiImage } from '../../api';
import { Image } from '../../common';
import { mymovie } from '../../myapi';
import { trimText } from '../../tool';
import Title from '../Title';


const MainContainer = styled.View`
    flex-direction:row;
    margin: 7px 8px 7px 8px;
`;

const Container = styled.View`
    flex-direction:column;
`
const ScrollView = styled.ScrollView`
    flex-direction:row;
`;

const Text = styled.Text`
    color:white;
    text-align:center;
`;



const Popular = (props) => {
    const [pop, setPop] = useState([]);
    const setData = async() =>{
        const data = await mymovie.popular();
        data && setPop(data);
    }
    useEffect(()=>{
        setData();
    },[]);

    return (
        <Container>
            <Title title="Popular Movies"/>
            <ScrollView horizontal={true}>
            <MainContainer>
            {pop.map(result => 
              <Container key={result.id} id={result.id}>
            <Image url={apiImage(result.poster_path)} />
            <Text>{trimText(result.title, 13)}</Text>
            <Text>🌟 {result.vote_average}</Text>
            </Container>
            )}
            </MainContainer>
            </ScrollView>
        </Container>
    );
};

export default Popular;