import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { apiImage, mymovie, myTv } from '../../myapi';
import Mvdata from './Mvdata';

const Container = styled.View`
padding: 12px 0 0 0;
`;

const FlexContainer = styled.View`
flex-direction:row;
width:100%;
flex-wrap:wrap;
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
    },[]);


    return (
        <Container>
            <Text>Recommand for you</Text>
            <FlexContainer>
            {data.movie.map(result => 
                <Mvdata 
                key={result.id}
                id={result.id}
                url={apiImage(result.poster_path)}
                title={result.title}
                result={result}
                />
                )}
            {data.tv.map(result => 
                <Mvdata 
                key={result.id}
                id={result.id}
                url={apiImage(result.poster_path)}
                title={result.name}
                result={result}
                />
                )}
                </FlexContainer>


        </Container>
    );
};

export default SearchBefore;