import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, tokenDictionary } from './services/storage.service.js';

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

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        
    }
    if (args.t){
      return saveToken(args.t)
    }

    getWeather('Moscow')
};

initCLI();

