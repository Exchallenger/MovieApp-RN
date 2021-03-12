import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import {myTv} from '../../myapi';
import Popular from './Popular';
import Today from './Today';
import TopRated from './TopRated';


const Container = styled.View`
background-color:black;
height:100%;
`;


const TvPresenter = () => {
    const [Datas, setDatas] = useState({
        loding:true,
        today:[],
        topRate:[],
        popular:[],
    }) 
    const getData = async() =>{
        const today = await myTv.today();
        const topRate = await myTv.topRated();
        const popular = await myTv.popular();
        today && topRate && popular && setDatas({
            loding:false,
            today,
            topRate,
            popular,
        })
    }

    const View = styled.View``;

    useEffect(() =>{
        getData();
    },[])

    return (
        <View>
            {Datas.loding ? <ActivityIndicator/> : <Container>
        <Today data={Datas.today}/>
        <Popular data={Datas.popular}/>     
        <TopRated data={Datas.topRate}/>
        </Container>}
        </View>
        
    );
};

export default TvPresenter;