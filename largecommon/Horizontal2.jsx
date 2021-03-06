import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Image, Votes } from '../common';
import Title from '../components/Title';
import { apiImage } from '../myapi';
import { trimText } from '../tool';



const MainContainer = styled.View`
    flex-direction:row;
    margin: 7px 8px 7px 8px;
`;

const Container = styled.View`
    flex:1;
`
const ScrollView = styled.ScrollView`
    flex-direction:row;
`;

const Text = styled.Text`
    color:white;
    text-align:center;
`;


const Horizontal2 = ({data,titles,title}) => {
    return (
        <Container>
            <Title title={titles}/>
            <ScrollView horizontal={true}>
            <MainContainer>
            {data.map(result => 
            <TouchableOpacity key={result.id} id={result.id}>
            <Container>
            <Image url={apiImage(result.poster_path)} />
            <Text>{trimText(result.title ? result.title: result.name, 13)}</Text>
            <Votes average={result.vote_average}/>
            </Container>
            </TouchableOpacity>
            )}
            </MainContainer>
            </ScrollView>
        </Container>
    );
};

export default Horizontal2;