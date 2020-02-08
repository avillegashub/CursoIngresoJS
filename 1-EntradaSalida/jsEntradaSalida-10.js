/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
    var num1;

    var porc

   

    var resultado
    
 
    

    //num1= document.getElementById("numeroUno").value;
    //num2= document.getElementById("numeroDos").value;

    //num1 = parseInt(num1);
    //num2 = parseInt(num2);

    num1 = parseFloat(document.getElementById("importe").value) ;

    porc = (num1 * 25) /100;

    

    resultado = num1 - porc;

    
    document.getElementById("resultado").value = resultado.toFixed(2);


 
}
