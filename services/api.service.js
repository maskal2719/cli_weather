import axios from 'axios';
import {getKeyValue, tokenDictionary} from './storage.service.js'

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(tokenDictionary.token);

    if (!token) {
        throw new Error('Key API undefined')
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });
    return data;
};

export {getWeather};
