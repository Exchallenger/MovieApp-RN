import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tv from '../components/Tv/TvContainer';
import Movies from '../components/Movies/MovieContainer';
import Search from '../components/Search/SearchContainer';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({navigation, route}) => {
    return(
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor:'white',
            style:{
                backgroundColor:'black'
            }
        }}
        screenOptions={({route}) =>({
            tabBarIcon:({focused}) =>{
                let iconName;
                if(route.name ==='Movies'){
                    iconName = 'ios-film'
                } else if(route.name ==="Tv"){
                    iconName = 'ios-tv'
                }else if(route.name === "Search"){
                    iconName = 'ios-search'
                }
                return <Ionicons name={iconName} size={15} color={focused ? "white": "gray" }/>
            }
        })}
        >
            <Tab.Screen name="Movies" component={Movies}/>
            <Tab.Screen name="Tv" component={Tv}/>
            <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>   
    );
}

export default Tabs;
