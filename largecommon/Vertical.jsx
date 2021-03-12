import React from 'react';
import styled from 'styled-components/native';
import { apiImage } from '../myapi';
import Vertdata from './Vertdata';



const Container = styled.View`
`;

const Vertical = ({data}) => {
    return (
        <Container>
            {data.map(result => 
                    <Vertdata
                    result={result}
                    key={result.id}
                    id={result.id}
                    url={apiImage(result.poster_path)}
                    title={result.title || null}
                    name={result.name || null}
                    />
                )}
        </Container>
    );
};

export default Vertical;