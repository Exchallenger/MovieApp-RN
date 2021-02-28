import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';


const Images = styled.Image`
    width:120px;
    height:160px;
    margin: 0px 7px 0px 7px;
`;

const HContainer = styled.View`
    flex-direction:row;
    margin: 7px 8px 7px 8px;
`;

const ScrollView = styled.ScrollView`
    flex-direction:row;
`;

export const Image = ({url}) => {
    return (
        <Images source={{uri:url}}/>
    );
};

export const Horizontal = () =>{
    return(
        <ScrollView horizontal={true}>
            <TouchableOpacity>
            <HContainer>
            </HContainer>
            </TouchableOpacity>
        </ScrollView>
    )
}


