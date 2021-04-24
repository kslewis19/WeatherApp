
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

function WeatherViewer(props){
    const [isDaily, setIsDaily]= useState(true)


    const daily= <div> daily weather</div>
    const hourly= <div>hourly weather</div>

    const toggleDaily = ()=>{
        setIsDaily(!isDaily)
    }
    
     console.log(props.weather)
     console.log(props.forcast)
    if(props.weather.name!=null){
    return(
       <div style ={{flex:1}}>
           <h1>Weather in {props.weather.name}</h1>
            <h2> The current temerature is {props.weather.main.temp} F</h2>
            <h2> Sky Condition {props.weather.weather[0].main}</h2>
            <Button onClick={toggleDaily} variant="contained"> Toggle Forcast</Button>
            <br/>
           {isDaily? daily: hourly}
           
       </div>

    )
    }
    else{
        return(
        <div> Error bad zip</div>
        )
    }
}

export default WeatherViewer;