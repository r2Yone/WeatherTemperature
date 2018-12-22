import convert from 'convert-units';
import {
        SUN,
        CLOUD,
        RAIN,
        SNOW,
        THUNDER,
        DRIZZLE
} from './../constants/weather';


const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = weatherData => {
    const {id} = weatherData;
    if (id < 300){
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id < 800) {
        return SUN;    
    } else {
        return CLOUD;
    }
}

const transformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);

    const data = {
        humidity,
        temp: getTemp(temp),
        weatherState,
        wind: `${speed} km/h`,
    }

    return data;
}

export default transformWeather;