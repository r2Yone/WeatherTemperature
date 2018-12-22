import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({data: {temp, weatherState, humidity, wind} }) => {
    return <div className="weatherDataCont">
                <WeatherTemperature temp={temp} weatherState={weatherState}/>
                <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
}

WeatherData.propTypes = {
        data: PropTypes.shape( {
                temp: PropTypes.number.isRequired,
                weatherState: PropTypes.string.isRequired,
                humidity: PropTypes.number.isRequired,
                wind: PropTypes.string.isRequired,
                }
        )
}

export default WeatherData;