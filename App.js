import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './stacks/Stacks';




export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stacks/>
    </NavigationContainer>
    
  );
}


