import React from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Tabs from '../tabs/Tabs';
import Detail from './Detail';
import SimDetail from './SimDetail';


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
        </Stack.Navigator>
    );

};

export default Stacks;