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

const ScrollView = styled.ScrollView``;

const Container = styled.View`
`;

const TextContainer = styled.View`
margin-left:12px;`;

const View = styled.View`
flex-direction:row;
width:60%;
margin:0px 0px 12px 8px;
`;


const Vertical = ({data}) => {
    return (
        <Container>
            {data.map(result => 
                    <View id={result.id} key={result.id}>
                        <Image url={apiImage(result.backdrop_path)}/>
                        <TextContainer>
                            {result.release_date && <DateContainer>
                            <Date>{result.release_date}</Date>
                            </DateContainer>}
                            <Text>{trimText(result.title ? result.title: result.name,25)}</Text>
                            <OverView overview={result.overview} len={150}/>
                        </TextContainer>
                    </View>
                )}
        </Container>
    );
};

export default Vertical;