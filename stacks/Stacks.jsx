import React, { useState } from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Tabs from '../tabs/Tabs';
import Detail from './Detail';
import SimDetail from './SimDetail';
import Favs from '../components/Favs';



const Stack = createStackNavigator();

const Stacks = (props) => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:"black",
            },
            headerTintColor:"white",
        }}
        >
            <Stack.Screen name="Hoonflix" component={Tabs}/>
            <Stack.Screen name="Details" component={Detail}/>
            <Stack.Screen name="Detail" component={SimDetail}/>
            <Stack.Screen name="Favorite" component={Favs}/>
        </Stack.Navigator>
    );

};

export default Stacks;