

const axios = require('axios')

const kelvinToGrados = (gradosEnKelvin)=> {
    
    const aRestar = 273.15
    return  gradosEnKelvin-aRestar;
    }

const respWeather = async (latitud, longitud) =>{
    const apiKey = 'Your_Api_Key'

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}`)
  
    let temp = await kelvinToGrados(resp.data.main.temp);
    let temperatura = await temp.toFixed(2)
    let humedad = await resp.data.main.humidity;
    let stateOfSky = await resp.data.weather[0].description;
    

    
    return {
        temperatura,
        humedad,
        stateOfSky
    
    }
}
module.exports ={
    respWeather
}