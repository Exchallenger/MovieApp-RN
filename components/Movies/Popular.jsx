
import React, { useEffect, useState } from 'react';
import Horizontal2 from '../../largecommon/Horizontal2';
import  {mymovie} from '../../myapi';



const Popular = (props) => {
    const [pop, setPop] = useState([]);
    const setData = async() =>{
        const data = await mymovie.popular();
        data && setPop(data);
    }
    useEffect(()=>{
        setData();
    },[]);

    return (
        <Horizontal2 
        data={pop} 
        titles="Popular Movies"/>
    );
};

export default Popular;