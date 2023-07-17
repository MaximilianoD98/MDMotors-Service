let variableCambiante = true;


alert ("Bienvenido a MD-Motors")

function cambioDeAceite(fecha,nombreTitular){
    this.nombre= "Servicio de cambio de aceite";
    this.valor= 1000;
    this.fechaDeRealizacion = fecha;
    this.nombreDelTitular=nombreTitular;
  }

  function inspeccionMotor(fecha,nombreTitular){
    this.nombre= "Servicio de inspección de motor";
    this.valor= 1700;
    this.fechaDeRealizacion = fecha;
    this.nombreDelTitular=nombreTitular;
  }

  function inspeccionFrenos(fecha,nombreTitular){
    this.nombre= "Servicio de inspección de frenos";
    this.valor= 1200;
    this.fechaDeRealizacion = fecha;
    this.nombreDelTitular=nombreTitular;
  }

  function inspeccionSuspension(fecha,nombreTitular){
    this.nombre= "Servicio de inspección de suspensión";
    this.valor= 1100;
    this.fechaDeRealizacion = fecha;
    this.nombreDelTitular=nombreTitular;
  }

  function inspeccionTransmision(fecha,nombreTitular){
    this.nombre= "Servicio de inspección de transmisión";
    this.valor= 1500;
    this.fechaDeRealizacion = fecha;
    this.nombreDelTitular=nombreTitular;
  }



function opciones (servicio){
    switch (servicio){
        case 1:
            fechaAct= prompt("Ingrese la fecha actual")
            nombreCliente=prompt("Ingrese nombre del cliente")
            let objetoDeTipoCambioDeAceite = new cambioDeAceite(fechaAct,nombreCliente);
            let listaDetalleDelServicioAceite=[objetoDeTipoCambioDeAceite.nombre,objetoDeTipoCambioDeAceite.valor,objetoDeTipoCambioDeAceite.fechaDeRealizacion,objetoDeTipoCambioDeAceite.nombreDelTitular]
            alert(listaDetalleDelServicioAceite)
            servicio = objetoDeTipoCambioDeAceite.nombre;
            valor = objetoDeTipoCambioDeAceite.valor;
            
            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 2:
            fechaAct= prompt("Ingrese la fecha actual")
            nombreCliente=prompt("Ingrese nombre del cliente")
            let objetoDeTipoMotor = new inspeccionMotor(fechaAct,nombreCliente);
            let listaDetalleDelServicioMotor=[objetoDeTipoMotor.nombre,objetoDeTipoMotor.valor,objetoDeTipoMotor.fechaDeRealizacion,objetoDeTipoMotor.nombreDelTitular]
            alert(listaDetalleDelServicioMotor)
            servicio = objetoDeTipoMotor.nombre;
            valor = objetoDeTipoMotor.valor;

            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 3:
            fechaAct= prompt("Ingrese la fecha actual")
            nombreCliente=prompt("Ingrese nombre del cliente")
            let objetoDeTipoFrenos = new inspeccionFrenos(fechaAct,nombreCliente);
            let listaDetalleDelServicioFrenos=[objetoDeTipoFrenos.nombre,objetoDeTipoFrenos.valor,objetoDeTipoFrenos.fechaDeRealizacion,objetoDeTipoFrenos.nombreDelTitular]
            alert(listaDetalleDelServicioFrenos)
            servicio = objetoDeTipoFrenos.nombre;
            valor = objetoDeTipoFrenos.valor;

            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 4:
            fechaAct= prompt("Ingrese la fecha actual")
            nombreCliente=prompt("Ingrese nombre del cliente")
            let objetoDeTipoSuspension = new inspeccionSuspension(fechaAct,nombreCliente);
            let listaDetalleDelServicioSuspension=[objetoDeTipoSuspension.nombre,objetoDeTipoSuspension.valor,objetoDeTipoSuspension.fechaDeRealizacion,objetoDeTipoSuspension.nombreDelTitular]
            alert(listaDetalleDelServicioSuspension)
            servicio = objetoDeTipoSuspension.nombre;
            valor = objetoDeTipoSuspension.valor;

            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 5:
            fechaAct= prompt("Ingrese la fecha actual")
            nombreCliente=prompt("Ingrese nombre del cliente")
            let objetoDeTipoTransmision = new inspeccionTransmision(fechaAct,nombreCliente);
            let listaDetalleDelServicioTransmision=[objetoDeTipoTransmision.nombre,objetoDeTipoTransmision.valor,objetoDeTipoTransmision.fechaDeRealizacion,objetoDeTipoTransmision.nombreDelTitular]
            alert(listaDetalleDelServicioTransmision)
            servicio = objetoDeTipoTransmision.nombre;
            valor = objetoDeTipoTransmision.valor;

            alert ("Usted a seleccionado " + servicio + "\nEl monto a abonar será de $" + valor);
            break;
        case 6:
            fechaAct= prompt("Ingrese la fecha actual")
            nombreCliente=prompt("Ingrese nombre del cliente")
            let servicioDeTipoAceite = new cambioDeAceite(fechaAct,nombreCliente);
            let servicioDeTipoMotor = new inspeccionMotor(fechaAct,nombreCliente);
            let servicioDeTipoFrenos = new inspeccionFrenos(fechaAct,nombreCliente);
            let servicioDeTipoSuspension = new inspeccionSuspension(fechaAct,nombreCliente);
            let servicioDeTipoTransmision = new inspeccionTransmision(fechaAct,nombreCliente);
            servicio = servicioDeTipoAceite.nombre + ", " + servicioDeTipoMotor.nombre + ", " + servicioDeTipoFrenos.nombre + ", " + servicioDeTipoSuspension.nombre + ", " + servicioDeTipoTransmision.nombre;
            valor = servicioDeTipoAceite.valor + servicioDeTipoMotor.valor + servicioDeTipoFrenos.valor + servicioDeTipoSuspension.valor + servicioDeTipoTransmision.valor;

            alert ("Usted a seleccionado los servicios: " + servicio + "\nEl monto a abonar será de $" + valor);
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