import React from 'react';
import { ScrollView } from 'react-native';
// import { Text } from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';

const View = styled.View`
flex:1;
`;

const Text = styled.Text``;

const View1 = styled.View`
    background-color:blue;
    flex:1;
    align-items:center;
    justify-content:center;
`;
const View2 = styled.View`
    background-color:red; 
    flex:1;
    align-items:center;
    justify-content:center;
`;
const View3 = styled.View`
    background-color:yellow;
    flex:1;
    align-items:center;
    justify-content:center;
`;

const Test = () => {
    return (
        // <View>
        <Swiper>
            {/* <ScrollView> */}
            <View1>
                <Text>
                    Hi1
                </Text>
            </View1>
            <View2>
                <Text>
                    Hi2
                </Text>
            </View2>
            <View3>
                <Text>
                    Hi3
                </Text>
            </View3>
            {/* </ScrollView> */}
        </Swiper>
        // </View>
    );
};

export default Test;