/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    function Sumar () 
{
    var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    
    alert("La suma de los tres Precios es: " + (num1 + num2 + num3));
    
    
}

function Promedio () 
{
    var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    
    alert("El promedio es: " + ((num1 + num2 + num3) / 3).toFixed(2));
    
}

function PrecioFinal () 
{
    var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    
   var porcentaje = parseInt((num1 + num2 + num3) *21 / 100);
    var suma = parseInt(num1 + num2 + num3);



    alert("El promedio es: " + (porcentaje + suma));
	
}