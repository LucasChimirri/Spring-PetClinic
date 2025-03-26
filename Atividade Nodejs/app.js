const { OpenWeatherAPI } = require("openweather-api-node");

const cidadeEntrada = process.argv[2];

const climaAPI = new OpenWeatherAPI({
    key: "6d6e78462231ba2c4ec32d3ccb537281",    //Chave emprestada por Bruno Bamenga

/* Chaves Testadas:
d5d30901bdedd901772511e382c0a365
ed9a15e84f0eb055e85fe2d0c4044360
404ceacc379f88d9e8506ec87f4b85fb
*/

    locationName: cidadeEntrada,            
    units: "metric"                         
});

climaAPI
    .getCurrent()
    .then(resultado => {
        const tempAtual = resultado.weather.temp.cur;          
        const descricaoClimatica = resultado.weather.description; 
        const sensacaoAtual = resultado.weather.feelsLike.cur; 

        console.log(`Clima em ${cidadeEntrada}:`);
        console.log(`- Temperatura: ${tempAtual} °C`);
        console.log(`- Condição: ${descricaoClimatica}`);
        console.log(`- Sensação térmica: ${sensacaoAtual} °C`);
    })