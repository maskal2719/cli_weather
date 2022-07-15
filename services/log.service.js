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

const printWeather = (response) => {
    console.log(
`Weather in city ${response.name}
Temp : ${response.main.temp}
Feel like: ${response.main.feels_like}
Speed wind: ${response.wind.speed}   
Humidity: ${response.main.humidity}   
`
        )
}

export { printError, printSuccess, printHelp, printWeather};