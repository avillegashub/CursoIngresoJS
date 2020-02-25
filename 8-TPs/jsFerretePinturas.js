/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    var fah;
    var cen;    



    fah = document.getElementById("Temperatura").value;


    cen = (fah * 9/5) + 32;

    document.getElementById("Temperatura").value = fah + "º Fahrenheit son " + cen + "º centígrados.";
    
}

function CentigradosFahrenheit () 
{
    
    var fah;
    var cen;    
    
    
    
    cen = document.getElementById("Temperatura").value;
    
    
    fah = (cen - 32) * 9/5;
    
    document.getElementById("Temperatura").value = cen + "º Fahrenheit son " + fah + "º centígrados.";
}
//(0 °C × 9/5) + 32 = 32 °F
