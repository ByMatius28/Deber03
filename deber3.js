'use strict'

let vehicle = {
    make: 'Hyundai',
    model: 'compact',
    color: 'Yellow',
    licensePlate: 'ABC-2345',
    year: 2013,
    isEnable: false,

}

function validarTaxi (taxi){
    let antiguedad = new Date().getFullYear() - taxi.year;
    if (antiguedad < 10){
        return true;
    } else{
        return false;
    }
}

let resultado = validarTaxi(vehicle);

alert(resultado)