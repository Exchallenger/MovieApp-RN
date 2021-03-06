import React, { useEffect, useState } from 'react';
import { Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Horizontal from '../../largecommon/Horizontal';
import { mymovie } from '../../myapi';
import Title from '../Title';

const Container = styled.View`
    flex:1;
    /* max-height:${Dimensions.get('window').height/4}px; */
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
            <Horizontal now={now} title="Now Playing"/>
        </Container>
    );
};

export default NowPlaying;