import React from 'react';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import Title from '../components/Title';
import Silder from '../Silder';


const MainContainer = styled.View`
    flex:1;
    `;



const Horizontal = ({now,title}) => {
    return (
        <MainContainer>
        <Title title={title}/> 
        <Swiper 
        showsPagination={false}
        autoplay={true}
        autoplayTimeout={4}
        style={{height:Dimensions.get('window').height/3.6}}>
        {now.map(result => 
            <Silder 
            name={result.name} 
            titles={result.title}
            result={result} 
            id={result.id}
            url={result.poster_path}
            key={result.id}
            overview={result.overview}
            vote={result.vote_average}
            />
            )}
        </Swiper>
        </MainContainer>
    );
};

export default Horizontal;

