import React from 'react';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => {
    return <div className="weatherExtraInfoCont">
                <span className="weatherExtraInfoText">{ `Humedad: ${humidity} % ` }</span>
                <span className="weatherExtraInfoText">{ `Viento: ${wind} ` }</span>
            </div>
}

export default WeatherExtraInfo;