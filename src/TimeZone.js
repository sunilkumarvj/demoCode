import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

function TimeZone(){
    const [country, setCountry]=useState([]);
    const [selOption,setSelOption]=useState("Europe/Andorra");
    const [formattedDate, setFormattedDate]=useState();
    useEffect(()=>{
        Axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*')
        .then(response=>{
            setCountry(response.data.zones);
        })
    },[]);
    const timeResponse=()=>{
        Axios.get(`http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=${selOption}`)
        .then(res=>{
            setFormattedDate(res.data.formatted)
          
        })
    }
    useEffect(()=>{
        timeResponse();
       const interval= setInterval(() => {
        timeResponse();
           
        }, 5000);
        return () => clearInterval(interval);
    },[selOption]);
const un=country.map(name=>{
    return name.zoneName;
})
const changeSelected=(e) => {
    setSelOption(e.target.value);
  }
    return(
        <div>
            <select
        value={selOption}
        onChange={changeSelected}
      >
            {
                un.map((res)=>{
                    
                 return <option key={res} value={res}>{res}</option>  
            })
            }
            </select>
            <div>
                <h1>Location:&nbsp;&nbsp;{selOption}</h1>
            </div>
            <div>
                <h1>Time:  {formattedDate}</h1>
            </div>
        </div>
    )
}
export default TimeZone