import { useNavigation } from '@react-navigation/native';
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
`

const Hordata2 = ({id,overview,result,name,titles,url,vote}) => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Details",
    {
        title:titles,
        name,
        url,
        overview,
        id,
        vote,
        bg:apiImage(result.backdrop_path) 
    }
    );
    return (
        <TouchableOpacity key={id} id={id} onPress={goToDetail}>
        <Container>
        <Image url={url} />
        <Text>{trimText(titles || name, 13)}</Text>
        <Votes average={vote}/>
        </Container>
        </TouchableOpacity>
    );
};

export default Hordata2;