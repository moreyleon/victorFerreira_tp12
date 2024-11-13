function calcularCostoHamburguesa(tipoCarne, jamon, queso, salsadetomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let cuentaTotalaPagar = 0;

    if (tipoCarne == "carne") {
        cuentaTotalaPagar = 1800;
    }
    if (tipoCarne == "pollo") {
        cuentaTotalaPagar = 1500;
    }
    if (tipoCarne == "vegetal") {
        cuentaTotalaPagar = 1200;
    }
    //console.log(cuentaTotalaPagar);


    if (jamon == true) {
        cuentaTotalaPagar += 30;
    }
    if (queso == true) {
        cuentaTotalaPagar += 25;
    }
    if (salsadetomate == true) {
        cuentaTotalaPagar += 5;
    }
    if (mayonesa == true) {
        cuentaTotalaPagar += 5;
    }
    if (mostaza == true) {
        cuentaTotalaPagar += 5;
    }
    if (tomate == true) {
        cuentaTotalaPagar += 15;
    }
    if (lechuga == true) {
        cuentaTotalaPagar += 10;
    }
    if (cebolla == true) {
        cuentaTotalaPagar += 10;
    }
    return cuentaTotalaPagar;
    //console.log(cuentaTotalaPagar);
}

calcularCostoHamburguesa("vegetal", true, true, true, true, true, true, true, true);


function fastFood(nombre, apellido, tipoCarne, jamon, queso, salsadetomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let cuentaTotalaPagar = calcularCostoHamburguesa(tipoCarne, jamon, queso, salsadetomate, mayonesa, mostaza, tomate, lechuga, cebolla)
    let mensaje = `Estimado ${nombre} ${apellido}, el monto total a pagar por su hambueguesa de ${tipoCarne} es de: $${cuentaTotalaPagar}`;
    console.log(mensaje);

}

fastFood("victor", "ferreira", "carne", true, true, true, true, true, true, true, true);
