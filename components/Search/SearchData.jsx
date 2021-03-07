import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Simage } from '../../common';
import {apiImage} from '../../myapi';
import { trimText } from '../../tool';

const Container = styled.View``;

const Text = styled.Text`
    font-size:20px;
    color:white;
    margin:12px 0px;
    text-align:center;
    `;
const RContainer = styled.View``;

const FlexContainer = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
`;
const TitleText = styled.Text`
    color:white;
`;

const SearchData = ({data, datat,keyword}) => {
    return (
       <Container>
           {data.length !==0  ? 
           <Container>
            <Text>Search for {keyword}</Text>
           <FlexContainer>
           {data.map(result => <RContainer key={result.id} id={result.id}>
               <TouchableOpacity>
               <Simage url={apiImage(result.poster_path)} />
               <TitleText>{trimText(result.title,10)}</TitleText></TouchableOpacity>
           </RContainer>)}
           {datat.map(result => <RContainer key={result.id} id={result.id}>
               <TouchableOpacity>
               <Simage url={apiImage(result.poster_path)} />
               <TitleText>{trimText(result.name,10)}</TitleText></TouchableOpacity>
           </RContainer>)}
           </FlexContainer>
           </Container> : <Text>No Results</Text>}
       </Container>
    );
};

export default SearchData;