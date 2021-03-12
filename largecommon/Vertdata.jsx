import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { Image, OverView } from '../common';
import { apiImage } from '../myapi';
import { trimText } from '../tool';

const Text = styled.Text`
    color:white;
    font-size:18px;
    margin: 3px 0px 6px 8px;
    text-align:center;
`;

const Date = styled.Text`
    color:white;
    text-align:center;
`;

const DateContainer = styled.View`
margin-bottom:7px;
border: 2px solid white;
border-radius:6px;
`;


const Container = styled.View`
`;

const TextContainer = styled.View`
margin-left:12px;`;

const View = styled.View`
flex-direction:row;
width:60%;
margin:0px 0px 12px 8px;
`;
const TouchableOpacity = styled.TouchableOpacity`
flex-direction:row;
width:95%;
`;

const Vertdata = ({id,url,title,name,result}) => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Details",{
        title,
        name,
        url,
        overview:result.overview,
        id,
        vote:result.vote_average,
        bg:apiImage(result.backdrop_path)
    });
    return (
        <View id={id} key={id}>
            <TouchableOpacity onPress={goToDetail}>
            <Image url={url}/>
            <TextContainer>
                {result.release_date && <DateContainer>
                <Date>{result.release_date}</Date>
                </DateContainer>}
                <Text>{trimText(title || name,25)}</Text>
                <OverView overview={result.overview} len={150}/>
            </TextContainer>
            </TouchableOpacity>
        </View>
    );
};

export default Vertdata;