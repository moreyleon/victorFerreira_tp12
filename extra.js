let frase = "loro barranquero";
let contenedor = frase.toUpperCase();
function upperConverter(parametro) {
    //let string = "union fc campeon torneo virgen nina 2024";
    //let convertir = string.toUpperCase();
    return contenedor

}



//console.log(upperConverter());




function dataType(param) {
    return param
}

//console.log(dataType(typeof "union fc campeon"));

function dogAge() {

    let edadPerros = i * 7;

    return edadPerros

}
let i = 3;
//console.log(dogAge());




function hourPrice(salario, diasTrabajados, horasTrabajadas) {
let horasTotal = horasTrabajadas * diasTrabajados;

let valorHora = salario / horasTotal;
 
return valorHora
}
 
//console.log( hourPrice(800000, 20, 8));

 
module.exports = {upperConverter, dataType, dogAge, hourPrice}