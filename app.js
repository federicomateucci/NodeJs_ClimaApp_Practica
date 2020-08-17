
const colors = require('colors')
const axios = require('axios');
const latylong = require('./direccion/direccion');

const argv = require('./utilidades/yargs').argv
const getClima = require('./clima/clima')

console.log(`Processing request...`)
const city = argv.direccion;
const country = argv.pais;

const getWeather = async (city,country) => {
const data = await latylong.getLatYLong(city, country);
const toShow = await getClima.respWeather(data.latitud, data.longitud)
return toShow;
}

getWeather(city, country).then(resp=>
    console.log(`Los datos meteoroligos para la ciudad de`+` ${city}`.blue +` =

    Humedad`+` ${resp.humedad}`.green+`, Temperatura`+ ` ${resp.temperatura}`.green+`, Estado Del Cielo`+ ` ${resp.stateOfSky}`.yellow)
   
).catch(err=>console.log(err))




