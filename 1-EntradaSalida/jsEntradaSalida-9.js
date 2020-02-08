/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

    var num1;

    var porc

    var resultado



    //num1= document.getElementById("numeroUno").value;
    //num2= document.getElementById("numeroDos").value;

    //num1 = parseInt(num1);
    //num2 = parseInt(num2);

    num1 = parseInt(document.getElementById("sueldo").value);

    //num1 = parseFloat(document.getElementById("sueldo").value) ;
    // para tomar números con decimales.

    porc = (num1 * 10) / 100;

    // porc = num1 * 1.1  --- > Así se ve Horrible.

    resultado = num1 + porc;


    document.getElementById("resultado").value = resultado;

    //document.getElementById("resultado").value = resultado.toFixed(2);










}
