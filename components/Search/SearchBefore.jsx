import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Simage } from '../../common';
import { apiImage, mymovie, myTv } from '../../myapi';

const Container = styled.View`
padding: 12px 0 0 0;
`;

const FlexContainer = styled.View`
flex-direction:row;
width:100%;
flex-wrap:wrap;
`;

const ImgContainer = styled.View`
    flex-direction:row;
`;

const Text = styled.Text`
text-align:center;
margin-bottom:6px;
font-size:20px;
color:white;
`;

const SearchBefore = () => {
    const [data,setData] = useState({
        movie:[],
        tv:[]
    })
    
    const getData = async() =>{
        const movie = await mymovie.nowPlaying();
        const tv = await myTv.today();
        movie && tv && setData({
            movie,
            tv,
        });
    }

    useEffect(() =>{
        getData();
    })

    return (
        <Container>
            <Text>Recommand for you</Text>
            <FlexContainer>
            {data.movie.map(result => 
                <ImgContainer key={result.id} id={result.id}>
                <TouchableOpacity>
                    <Simage url={apiImage(result.poster_path)}/>
                </TouchableOpacity>
                </ImgContainer>
                )}
            {data.tv.map(result => 
                <ImgContainer key={result.id} id={result.id}>
                <TouchableOpacity>
                    <Simage url={apiImage(result.poster_path)}/>
                </TouchableOpacity>
                </ImgContainer>
                )}
                </FlexContainer>


        </Container>
    );
};

export default SearchBefore;