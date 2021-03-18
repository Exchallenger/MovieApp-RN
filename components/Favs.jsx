import React, { useEffect, useState } from 'react';
import { Animated, PanResponder, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Simage } from '../common';
import { apiImage } from '../myapi';




const FavContainer = styled.View`
    background-color:black;
    height:100%;
`;

const FavContainer2 = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
`;

const FavText = styled.Text`
    color:white;
`;

const CardContainer = styled.View`
    
`;

const CardText = styled.Text`

`;


const Favs = ({route}) => {
    const [data, setDatas] = useState(route.params);
    const [card, setCard] = useState([route.params]);
    console.log(data,card);
    useEffect(() =>{
        data.url && card.push(data);
    },[data])
    const pos = new Animated.ValueXY();
    const panResponse = PanResponder.create({
        onMoveShouldSetPanResponder : () => true,
        onPanResponderMove:(evt, {dx,dy}) =>{
            pos.setValue({x:dx, y:dy});
            console.log(dx,dy);
        },
        onPanResponderRelease:() =>{
            Animated.spring(pos,{
                toValue:{
                    x:0,
                    y:0
                },
                bounciness:20,
                useNativeDriver:true
            }).start();
        }
    })

    return (
        <FavContainer>
            {data === [] ? <FavText>Not exist</FavText> 
            : <FavContainer2>
                {card.map(result => 
                <CardContainer key={Date.now()}>
                    {/* <TouchableOpacity> */}
                     <Animated.View 
                    style={{
                        transform:[...pos.getTranslateTransform()],
                        zIndex:1,
                    }}
                    {...panResponse.panHandlers}>
                    <Simage url={result.url}/>
                </Animated.View>
                    {/* </TouchableOpacity> */}
                </CardContainer>
                )}
                </FavContainer2>}
        </FavContainer>
    );
};

export default Favs;