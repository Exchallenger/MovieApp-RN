import React from 'react';

const Tvsim = () => {
    return (
        <MapContainer>
            {sil.map(result => 
                <SimContainer key={result.id} id={result.id}>
                    <Simage url={apiImage(result.backdrop_path)}/>
                </SimContainer>
                )}
            </MapContainer>
    );
};

export default Tvsim;