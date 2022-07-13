import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';


const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
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
};

initCLI();

