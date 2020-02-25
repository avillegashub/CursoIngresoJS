/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno=0;
var numeroDos=0;
var operador=0;
var miRespuesta;
var minimo = 1;
var maximo = 10;
var maximoDos = 4;
var operadorId;

function comenzar()
{
    numeroUno = parseInt(Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo));    
    numeroDos = parseInt(Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo));    
    operador = parseInt(Math.floor(Math.random() * ((maximoDos + 1) - minimo) + minimo));    

    switch(operador)
    {
        case 1:
        operadorId = " + ";
        respuesta = numeroUno + numeroDos;
        break;
    
    
        case 2:
    
        operadorId = " - ";
        respuesta = numeroUno - numeroDos;
        break;
    
        case 3:
    
        operadorId = " * ";
        respuesta = numeroUno * numeroDos;
        break;
    
        case 4:
    
        operadorId = " / ";
        respuesta = numeroUno / numeroDos;
        break;
    }

    document.getElementById("PrimerNumero").value   = numeroUno ;
    document.getElementById("SegundoNumero").value = numeroDos;
    document.getElementById("Operador").value = operadorId;
	

}//FIN DE LA FUNCIÓN

function Responder()
{

    miRespuesta = parseInt(document.getElementById("Respuesta").value);

    if(miRespuesta == respuesta)
    {
        alert("Respuesta Correcta");
    }
    else
    {
        alert("Respuesta Incorrecta");
    }

}//FIN DE LA FUNCIÓN
