import React from 'react'
import './Weather.css'
const Weather = ({weather}) => {
    const temp = Math.round(weather?.main?.temp - 273.15)
  return (
   <div>
     <div className='weather'>
        <p className="weather__city">
            {weather?.name}
        </p>
        <p className="weather__temp">
            {temp}&#xb0;C
        </p>
    </div>
   </div>
  )
}

export default Weather