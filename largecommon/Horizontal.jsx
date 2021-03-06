import React from 'react';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import Title from '../components/Title';
import Silder from '../Silder';


const MainContainer = styled.View`
    flex:1;
    /* flex-direction:row; */
    /* margin: 7px 8px 7px 8px; */
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
            d={result.id} key={result.id}/>
            )}
        </Swiper>
        </MainContainer>
    );
};

export default Horizontal;

