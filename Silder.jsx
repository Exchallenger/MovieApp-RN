import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions} from 'react-native';
import styled from 'styled-components/native';
import { BgImage, Image, OverView, Votes } from './common';
import { apiImage } from './myapi';
import { trimText } from './tool';


const View = styled.View`
    flex:1;
    width:${Dimensions.get('window').width}px;
    height:${Dimensions.get('window').height/3}px;
`;

const Container = styled.View`
    
`;


const FlexContainer = styled.View`
`;

const FlexContainer2 = styled.View`
    max-width:65%;
    margin-top:15px;
    flex-direction:row;
    `;

const Text = styled.Text`
    color:white;
    text-align:center;
`;

const Btn = styled.TouchableOpacity`
    background-color:red;
    padding: 4px 17px;
    border-radius:12px;
    color:white;
    position:absolute;
    left:50%;
    transform:translateX(-50px);
    bottom:15px;
`;

const BText = styled.Text`
    color:white;
    font-size:14px;
`

const Silder = ({id,overview,result,name,titles,url,vote}) => {
    const navigation = useNavigation();
    const goToDetail = () => navigation.navigate("Details",
    {
        title:titles,
        name,
        url,
        overview,
        id,
        vote,
        bg:apiImage(result.backdrop_path)
    });
    return (
            <View>
                <BgImage url={apiImage(result.backdrop_path)}/>
                <FlexContainer2>
                    <FlexContainer>
                        <Image url={apiImage(result.poster_path)}/>
                        <Text>{trimText(titles ? titles : name ,13)}</Text>
                        <Votes average={result.vote_average}/>
                    </FlexContainer>
                    <Container>
                    <OverView overview={result.overview} len={280}/>
                    <Btn onPress={goToDetail}>
                        <BText>Show Detail</BText>
                    </Btn>
                    </Container>
                </FlexContainer2>
            </View>
            
       
    );
};

export default Silder;