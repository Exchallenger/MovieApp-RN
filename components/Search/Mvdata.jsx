import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Simage } from '../../common';
import { apiImage } from '../../myapi';


const ImgContainer = styled.View`
    flex-direction:row;
`;


const Mvdata = ({key, id, url, title,result}) => {  
    const navigation = useNavigation();
    const goToDetail = () => {navigation.navigate("Details",{
        title,
        url,
        overview:result.overview,
        id,
        vote:result.vote_average,
        bg:apiImage(result.backdrop_path),
    })};
return(
    <ImgContainer key={key} id={id}>
    <TouchableOpacity onPress={goToDetail}>
        <Simage url={url}/>
    </TouchableOpacity>
    </ImgContainer>
    );}

export default Mvdata;