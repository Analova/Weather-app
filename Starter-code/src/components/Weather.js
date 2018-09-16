import React from "react"

const Weather = props =>(
     <div>
            {props.country && props.city &&  <p> Temperature:  {props.country}-{props.city}</p>}
            {props.temperature && <p>Lcation: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p> Conditions: {props.description}</p>} 
            {props.error && <p>{props.error}</p>}
        </div>
)


export default Weather;