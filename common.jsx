import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { trimText } from './tool';




const Images = styled.Image`
    width:80px;
    height:130px;
    margin: 0px 7px 12px 7px;
    border-radius:5px;
`;

const HContainer = styled.View`
    flex-direction:row;
    margin: 7px 8px 7px 8px;
`;

const ScrollView = styled.ScrollView`
    flex-direction:row;
`;

const Text = styled.Text`
    color:white;
    text-align:center;
    margin: 3px 0px 0px 0px;
`;

const BG = styled.Image`
    position:absolute;
    width: 100%;
    height: 100%;
    opacity:0.5;
`;

const OvText = styled.Text`
    color:white;
    text-align:center;
`

export const Image = ({url}) => {
    return (
        <Images source={{uri:url}}/>
    );
};

export const Horizontal = () => {
    return(
        <ScrollView horizontal={true}>
            <TouchableOpacity>
            <HContainer>
            </HContainer>
            </TouchableOpacity>
        </ScrollView>
    )
}

export const Votes = ({average}) =>{
    return(
    <Text>
        🌟 {average}
    </Text>
    )
}

export const BgImage = ({url}) =>{
    return(
        <BG source={{uri:url}} />
    );
}

export const OverView = ({overview}) =>{
    return(
        <OvText>
            {trimText(overview,200)}
        </OvText>
    );
}