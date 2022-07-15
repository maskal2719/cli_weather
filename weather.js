import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, tokenDictionary } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Not token');
        return
    }   
    try {
        await saveKeyValue(tokenDictionary.token, token);
        printSuccess(' Token save');    
    } catch (error) {
        printError(error.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Not city');
        return;
    }   
    try {
        await saveKeyValue(tokenDictionary.city, city);
        printSuccess('City save');    
    } catch (error) {
        printError(error.message)
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(tokenDictionary.city)
        const weather = await getWeather(city);
        printWeather(weather)
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('Invalid city');
        }else if (error?.response?.status == 401) {
            printError('Invalid token');
        }else {
            printError(error.message);
        }
    }
    
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
       return printHelp();
    }
    if (args.s) {
       return saveCity(args.s)
    }
    if (args.t){
      return saveToken(args.t)
    }

    return getForecast();
};

initCLI();

