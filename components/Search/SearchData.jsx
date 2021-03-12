import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Simage } from '../../common';
import {apiImage} from '../../myapi';
import { trimText } from '../../tool';
import SearchDatacon from './SearchDatacon';

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

const SearchData = ({data, datat,keyword,state}) => {
    return (
       <Container>
           {data.length !==0  ? 
           <Container>
            <Text>{state} {keyword}</Text>
           <FlexContainer>
           {data.map(result => <SearchDatacon
            name={result.name} 
            title={result.title}
            result={result} 
            id={result.id}
            url={apiImage(result.poster_path)}
            key={result.id}
            overview={result.overview}
            vote={result.vote_average}
           />
            )}
           {datat.map(result =><SearchDatacon
            name={result.name} 
            title={result.title}
            result={result} 
            id={result.id}
            url={apiImage(result.apiImage)}
            key={result.id}
            overview={result.overview}
            vote={result.vote_average}
           />)}
           </FlexContainer>
           </Container> : <Text>No Results</Text>}
       </Container>
    );
};

export default SearchData;