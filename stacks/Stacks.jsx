import React from 'react';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import Tabs from '../tabs/Tabs';


const Stack = createStackNavigator();

const Stacks = (props) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:"black"
            },
            headerTintColor:"white"
        }}
        >
            <Stack.Screen name="tabs" component={Tabs}/>
        </Stack.Navigator>
    );

};

export default Stacks;