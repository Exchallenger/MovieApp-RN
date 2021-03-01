import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
import { BgImage, Image, OverView, Votes } from '../../common';
import { apiImage, mymovie } from '../../myapi';
import { trimText } from '../../tool';
import Title from '../Title';

const View = styled.View`
    flex:1;
    width:${Dimensions.get('window').width}px;
    height:${Dimensions.get('window').height/4}px;
    justify-content:center;
    /* max-height:${Dimensions.get('window').height/3.6}px; */
`;

const Container = styled.View`
    flex:1;
    max-height:${Dimensions.get('window').height/4}px;
`;

const ScrollView = styled.ScrollView`
flex:1;
`

const FlexContainer = styled.View`
`;

const FlexContainer2 = styled.View`
    max-width:60%;
    /* padding:0px 0px 0px 0px; */
    flex-direction:row;
    `;


const MainContainer = styled.View`
    flex:1;
    flex-direction:row;
    margin: 7px 8px 7px 8px;
`;

const Text = styled.Text`
    color:white;
    text-align:center;
`;

const NowPlaying = () => {
    const [now, setNow] = useState([]);
    const setData = async() =>{
        const data = await mymovie.nowPlaying();
        data && setNow(data);
    } 
    useEffect(() =>{
        setData();
    },[])

    return (
        <Container>
            <Title title="Now Playing"/>
            <MainContainer>
                <Swiper  controlsEnabled={false} loop timeout={3}>
                {now.map(result => 
                    <ScrollView>
                    <View id={result.id} key={result.id}>
                        <BgImage url={apiImage(result.backdrop_path)}/>
                        <FlexContainer2>
                            <FlexContainer>
                                <Image url={apiImage(result.poster_path)}/>
                                <Text>{trimText(result.title,13)}</Text>
                                <Votes average={result.vote_average}/>
                            </FlexContainer>
                            <OverView overview={result.overview}/>
                        </FlexContainer2>
                    </View>
                    </ScrollView>
                    )}
                    </Swiper>
            </MainContainer>
        </Container>
    );
};

export default NowPlaying;