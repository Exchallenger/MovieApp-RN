import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import { apiImage, similar } from '../myapi';
import {  Simimage } from '../common';
import { trimText } from '../tool';

const Container = styled.View`
    background-color:black;
    height:100%;
`;
const Text = styled.Text`
    color:white;
    font-size:24px;
    font-weight:500;
    margin: 16px 12px;
`;
const OvContainer = styled.View`
    padding: 12px 14px;
    background-color:gray;
    border: 2px solid white;
`;

const Btn = styled.TouchableOpacity`
    background-color:white;
    position:absolute;
    border-radius:12px;
    right:0px;
`;

const Image = styled.Image`
    height:${Dimensions.get('window').height/3};
    border-radius:6px;
`;
const Overview = styled.Text`
    font-size: 17px;
    color:white;
    text-align:center;
`;

const SimContainer = styled.View`
width: ${Dimensions.get('window').width/4}px;
`;

const MapContainer = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
`;

const ScrollView = styled.ScrollView`
background-color:black;`;

const Titles = styled.Text`
    position:absolute;
    top:70px;
    left:10px;
    color:white;
`


const Detail = ({navigation,route}) => {
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(40);
    const [data, setData] = useState(route.params);
    const [sil, setSil] = useState([]);

    const ChangeColor = () =>{
        if(color==="red"){
            setColor('black');
            setSize(36);
        }
        else{
            setColor('red');
            setSize(40);
        }
    }
    const getData = async(kind,id) =>{
        const sdata = await similar(kind,id);
        setSil(sdata);
    }

    useEffect(() =>{
        data.title ? getData('movie',data.id) : getData('tv',data.id);
    },[]);
    return (
        <ScrollView>
        <Container>
            <Image source={{uri:data.bg}}/>
            <Text>{data.title || data.name}</Text>
            <Btn><Ionicons name="heart" size={size} color={color} onPress={ChangeColor}/></Btn>
            <OvContainer>
                <Overview>{data.overview}</Overview>
            </OvContainer>
            <Text>Similar {data.title ? 'Movies' : "Tv shows"}</Text>
            <MapContainer>
            {sil.map(result =>
                <SimContainer key={result.id} id={result.id}>
                    <TouchableOpacity onPress={() => navigation.navigate("Detail",
                    {id:result.id,
                    kk:data.backdrop_path,
                    title:result.title,
                    names:result.name,
                    overview:result.overview,
                    bg:apiImage(result.backdrop_path),
                    }
                    )}>
                    <Simimage url={apiImage(result.backdrop_path)}/>
                    <Titles>{trimText(result.title || result.name,8)}</Titles>
                    </TouchableOpacity>
                </SimContainer>
                )}
            </MapContainer>
        </Container>
        </ScrollView>
    );
};

export default Detail;