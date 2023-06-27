let variableCambiante = true;


alert ("Bienvenido a MD-Motors")




function opciones (servicio){
    switch (servicio){
        case 1:
            servicio = "Cambio de aceite y filtros"
            valor = 1000
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 2:
            servicio = "Inspección de motor"
            valor = 2000
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 3:
            servicio = "Inspección de frenos"
            valor = 1500
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 4:
            servicio = "Inspección de suspensión"
            valor = 1300
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 5:
            servicio = "Inspección de transmisión"
            valor = 2000
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 6:
            servicio = "Inspección de completa"
            valor = 7000
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 7:
            alert ("Gracias por considerarnos, vuelva pronto.");
            break;
        default:
            alert ("La opción es incorrecta");
            break; 

    }
}


while (variableCambiante){
    variableCambiante = false;

    let servicio = Number(prompt ("¿Que servicio desea adquirir\n\n1 - Cambio de aceite y filtros\n2 - Inspección de motor\n3 - Inspección de frenos \n4 - Inspección de suspensión\n5 - Inspección de transmisión \n6 - Inspección completa \n7 - Salir"))

    opciones (servicio);
    if (servicio == 1 || servicio == 2 || servicio == 3 || servicio == 4 || servicio == 5 || servicio == 6 ){
        alert ("¿Cómo desea abonar?");
        let cuota = Number(prompt ("1 - 1 cuota/contado \n 2 - 3 cuotas"));
        pago (cuota);
        alert ("Gracias por elegirnos y utilizar nuestro servicio, que tenga un buen día, nos vemos pronto.");

    }

}


function pago (cuotas, total){
    let interes = 0;
    switch (cuotas){
        case 1: 
            total = valor;
            alert ("Usted abonará $ " + total + " de contado");
            alert ("El pago se realizó con éxito, muchas gracias")
            break;
        case 2:
            total = valor * 1.3;
            interes = total / 3;
            alert ("Usted abonará $" + total + " en 3 cuotas de $ " + interes);
            alert ("El pago se realizó con éxito, muchas gracias")
            break;
        default:
            alert ("Ingrese una opción correcta.");
            break;
    }
}