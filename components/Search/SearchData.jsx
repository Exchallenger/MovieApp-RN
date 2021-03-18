import React from 'react';
import styled from 'styled-components';
import {apiImage} from '../../myapi';
import SearchDatacon from './SearchDatacon';

const Container = styled.View``;

const Text = styled.Text`
    font-size:20px;
    color:white;
    margin:12px 0px;
    text-align:center;
    `;

const FlexContainer = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
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
            poster={result.poster_path}
           />
            )}
           {datat.map(result =><SearchDatacon
            name={result.name} 
            title={result.title}
            result={result} 
            id={result.id}
            url={apiImage(result.poster_path)}
            key={result.id}
            overview={result.overview}
            vote={result.vote_average}
            poster={result.poster_path}
           />)}
           </FlexContainer>
           </Container> : <Text>No Results</Text>}
       </Container>
    );
};

export default SearchData;