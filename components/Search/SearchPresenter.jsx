import React, { useState } from 'react';
import {  ActivityIndicator, TextInput } from 'react-native';
import { onChange } from 'react-native-reanimated';
import styled from 'styled-components/native';
import { mymovie, myTv } from '../../myapi';
import SearchBefore from './SearchBefore';
import SearchData from './SearchData';

const Container = styled.View`

`;

const SearchPresenter = () => {
    const [keyword, setKeyword] = useState();
    const [datas, setData] = useState({
        loading:true,
        data:[],
        datat:[],
    });


    const onChange = (text) => {
        setKeyword(text);
    };

    const onSubmit = () =>{
        getData(keyword);
    }

    const getData = async(key) =>{
        const data = await mymovie.search(key);
        const datat = await myTv.search(key);
        setData({
            loading:false,
            data,
            datat
        })
    }
    return (
        <Container>
        <TextInput
        style={{height:25,
            color:'white',
            borderColor:'white',
            borderWidth:1,
            borderRadius:6,
            padding:6,
        }}
        keyboardAppearance='dark'
        placeholder="Search Movie or Tv"
        placeholderTextColor='gray'
        returnKeyType='search'
        onChangeText={text => onChange(text)}
        onSubmitEditing={onSubmit}
        clearTextOnFocus={true}
        />
        {datas.loading ? <SearchBefore/> 
        : <SearchData 
        keyword={keyword} 
        data={datas.data} 
        datat={datas.datat}/>}
        </Container>
    );
};

export default SearchPresenter;