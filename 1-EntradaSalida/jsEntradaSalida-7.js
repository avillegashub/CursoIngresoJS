/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var num1;
    var num2;
    var resultado;

    //num1= document.getElementById("numeroUno").value;
    //num2= document.getElementById("numeroDos").value;

    //num1 = parseInt(num1);
    //num2 = parseInt(num2);

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resultado = num1 + num2;

    alert("La suma es " + resultado);
}

function restar() {
    var num1;
    var num2;
    var resta;

    //num1= document.getElementById("numeroUno").value;
    //num2= document.getElementById("numeroDos").value;

    //num1 = parseInt(num1);
    //num2 = parseInt(num2);

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    resta = num1 - num2;

    alert("La Resta es " + resta);



}

function multiplicar() {
    var num1;
    var num2;
    var times;

    //num1= document.getElementById("numeroUno").value;
    //num2= document.getElementById("numeroDos").value;

    //num1 = parseInt(num1);
    //num2 = parseInt(num2);

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    times = num1 * num2

    alert("La multiplacion es " + times);
}

function dividir() {
    var num1;
    var num2;
    var div;

    //num1= document.getElementById("numeroUno").value;
    //num2= document.getElementById("numeroDos").value;

    //num1 = parseInt(num1);
    //num2 = parseInt(num2);

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    div = num1 / num2;

    alert("La divicion es " + div);
}

