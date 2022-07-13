const printError = (error) => {
    console.log('ERROR' + '' + error)
};
const printSuccess = (message) => {
    console.log('SUCCESS' + '' + message)
};
const printHelp = () => {
    console.log(
    `HELP
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KET] для сохранения токена     
    `
    )
};

export { printError, printSuccess, printHelp};