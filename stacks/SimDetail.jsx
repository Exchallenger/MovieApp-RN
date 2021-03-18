import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';


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

const ScrollView = styled.ScrollView`
background-color:black;`;


const SimDetail = ({route}) => {
    const [color, setColor] = useState('black');
    const [size, setSize] = useState(40);
    const [data, setData] = useState(route.params);
    console.log(data);
    const navigations = useNavigation();

    const ChangeColor = () =>{
        if(color==="red"){
            setColor('black');
            setSize(36);
            AddFavs();
        }
        else{
            setColor('red');
            setSize(40);
            AddFavs();
        }
    }
      const AddFavs = () => {
        const datas = {
            url:data.url,
            title:data.title,
            name:data.names,
        }
        data && navigations.navigate("Favorite",
        {
            title:data.title,
            name:data.name,
            url:data.url
        })
    }
        
    
    return (
        <ScrollView>
            <Container>
            <Image source={{uri:data.bg}}/>
            <Text>{data.title || data.names}</Text>
            <Btn><Ionicons name="heart" size={size} color={color} onPress={ChangeColor}/></Btn>
            <OvContainer>
                <Overview>{data.overview}</Overview>
            </OvContainer>
            </Container>     
        </ScrollView>
        
    );
};

export default SimDetail;