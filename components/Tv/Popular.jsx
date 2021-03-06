import React from 'react';
import { Text } from 'react-native';
import Horizontal2 from '../../largecommon/Horizontal2';

const Popular = ({data}) => {
    return (
        <Horizontal2 data={data} titles="Popular Tvs"/>
    );
};

export default Popular;