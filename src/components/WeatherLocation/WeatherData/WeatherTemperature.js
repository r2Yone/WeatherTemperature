import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weather'
import './styles.css';

const weatherIcons = {
    [SUN]: 'day-sunny',
    [CLOUD]: 'day-cloudy',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers',
}

const getWeatherIcon = weatherState => {
    const icon = weatherIcons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
}

const WeatherTemperature = ( { temp, weatherState } ) => {
    return  <div className="weatherTempCont">
                { 
                    getWeatherIcon(weatherState) 
                }
                <span className="temp">{ `${temp}`}</span>
                <span className="tempType">{ ` °C`}</span>
            </div>
}

WeatherTemperature.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;