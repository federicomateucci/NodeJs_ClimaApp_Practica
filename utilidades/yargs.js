const { demand } = require('yargs');

const argv = require('yargs').options(                                               {
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    },
    pais:{
        alias: 'p',
        demand: true,
        desc: 'Ingrese pais de busqueda'
    }
}).help()
.argv;

module.exports = {
    argv
}