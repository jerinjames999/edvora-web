import React from 'react'
import { useState, useEffect } from 'react';
function FetchApi() {
    const [Data, setData] = useState([]);
    const getData = ()=>{
        
        fetch('https://assessment.api.vweb.app/rides')
        .then((res)=>res.json())
        .then((res)=>{
            console.log('hi',Data);
            console.log(res);
            setData(res);
            console.log(Data);
        });
    }
    useEffect(() => {
    
      getData();
    }, [])
    
  return (
      
    <div onClick={getData}>FetchApi</div>
  )
}

export default FetchApi