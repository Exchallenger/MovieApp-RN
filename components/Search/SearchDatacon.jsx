import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Simage } from '../../common';
import { trimText } from '../../tool';

const TitleText = styled.Text`
    color:white;
`;

const RContainer = styled.View``;

const SearchDatacon = ({key,id,url,title,name,result,overview}) => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Details",
    {
        title,
        name,
        url,
        overview,
        id,
        vote:result.vote_average,
        bg:result.backdrop_path
    });
    return (
        <RContainer key={id} id={id}>
               <TouchableOpacity onPress={goToDetail}>
               <Simage url={url} />
               <TitleText>{trimText(title || name,10)}</TitleText>
        </TouchableOpacity>
        </RContainer>);
};

export default SearchDatacon;