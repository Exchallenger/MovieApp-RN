import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { trimText } from './tool';




const Images = styled.Image`
    width:110px;
    height:160px;
    margin: 0px 16px 12px 7px;
    border-radius:5px;
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
    opacity:0.4;
`;

const OvText = styled.Text`
    color:white;
    text-align:center;
`

const Simages = styled.Image`
    width:${Dimensions.get('window').width/4.2};
    height:150px;
    margin: 6px 2px 6px 2px;
`;

export const Image = ({url}) => {
    return (
        <Images source={{uri:url}}/>
    );
};

export const Simage = ({url}) =>{
    return(
        <Simages source={{uri:url}}/>
    )
}


export const Votes = ({average}) =>{
    return(
    <Text>
        {average === 0 ? "Not yet" : `🌟 ${average}`}
    </Text>
    )
}

export const BgImage = ({url}) =>{
    return(
        <BG source={{uri:url}} />
    );
}

export const OverView = ({overview,len}) =>{
    return(
        <OvText>
            {trimText(overview,len)}
        </OvText>
    );
}