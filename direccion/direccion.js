const axios = require('axios');







const getLatYLong = async(direccion,pais) =>{

const encondedDir = encodeURI(direccion)


const resp = await axios.get(`https://geocode.xyz/?locate=location?city=${encondedDir},${pais}&auth=223619506145522350304x7118&json=1`)
  if(resp.data === undefined){
        throw new Error(`No hay resultado para ${encondedDir}`)
  }
const data = resp.data;
const city = data.standard.city;
const latitud = data.latt;
const longitud = data.longt;

  return {
      city,
      pais,
      latitud,
      longitud

  }
}










module.exports ={
    getLatYLong
    
}