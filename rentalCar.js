
function rentalCar(vehiculo,dias, sillabebe) {  
    
    let tarifa ;
    

    if (vehiculo === "Compacto") {  
        tarifa = 14000;  
    } else if (vehiculo === "Mediano") {  
        tarifa = 17000;  
    } else if (vehiculo === "Camioneta") {  
        tarifa = 28000;  
       
    }  
      
      let total = tarifa * dias;  
    
    
    
    if (sillabebe) {  
        total += 1200 * dias; 
      
     
    }  
  
     
    console.log (`Estimado cliente: en base al tipo de vehículo ${vehiculo} alquilado, considerando los ${dias} días utilizados, el monto total a pagar es de $ ${total},`);  
    
  if (sillabebe){
    console.log("esto incluye servicio de silla para niños")
  }else{
        console.log("sin servicio de silla para niños");
  }
  

    
}  

console.log(rentalCar("Mediano", 5, false));
