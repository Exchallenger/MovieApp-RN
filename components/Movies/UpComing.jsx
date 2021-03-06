import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Vertical from '../../largecommon/Vertical';
import { mymovie } from '../../myapi';
import Title from '../Title';


const Container = styled.View`
    /* flex:1; */
`;

const UpComing = () => {
    const [up ,setUp] = useState([]);

    const getData = async() =>{
        const data = await mymovie.upcoming();
        data && setUp(data);
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <Container>
            <Title title='Up Coming'/>
            <Vertical data={up}/>
        </Container>
    );
};

export default UpComing;