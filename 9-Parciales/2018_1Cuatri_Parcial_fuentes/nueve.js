function mostrar()
{

var peso;
var cant= 0;
var temperatura;
var marca;
var tempPares= 0;
var marcaPesado = 0;
var bajoCeroCont= 0;
var acumuladorPeso=0;
var pesoMax;
var pesoMin;
var flag = 0;
var seguir;
var promedio;
do
{

    marca = prompt("Ingrese la Marca: ");

    peso = parseInt(prompt("Ingrese Peso: 1 al 100"));
    
    while   ( peso < 1 || peso >100 )
    {
    peso = parseInt(prompt("Error: Ingrese Peso: 1 al 100"));
    }
    
    temperatura = parseInt(prompt("Ingrese la Temperatura: -30 a 30"));
    
    while ( temperatura < -30 || temperatura > 30)
    {
        
        temperatura = parseInt(prompt("Error :Ingrese la Temperatura: -30 a 30"));
    }
    
    cant++;
    acumuladorPeso = acumuladorPeso + peso;

    if ( temperatura %  2 == 0)
    {
            tempPares++;
    }

    if ( peso > marcaPesado)
    {
        marcaPesado = peso;
        marcaPesado = marca;
    }

    if ( temperatura < 0)
    {
        bajoCeroCont++;
    }

    if (peso > pesoMax || flag == 0)
    {
        pesoMax = peso;
    }
    
    if (peso < pesoMax || flag == 0)
    {
        pesoMin= peso;
        flag++;
    }

    seguir = prompt(" Quiere continuar. s o n");

    while (!(seguir == "n" || seguir == "s")) {
                
        seguir = prompt("Quiere continuar: s o n ");
    }

}while(seguir == "s");



    promedio = acumuladorPeso / cant;


document.write("a) La cantidad de temperaturas pares: " + tempPares + "</br>" ); 
document.write("b) La marca del producto más pesado: " + marcaPesado + "</br>" );
document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " +bajoCeroCont +  "</br>");
document.write("d) El promedio del peso de todos los productos: " + promedio + "</br>");
document.write("f) El peso máximo: " + pesoMax + "</br>");
document.write("f) El peso mínimo: " + pesoMin + "</br>");
document.write( acumuladorPeso);


}


/*

Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser
 entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 

function mostrar() {
    var temperatura;
    var marca;
    var peso;
    var contadorPares = 0;
    var contadorCong = 0;
    var marcaPesada;
    var pesoMaximoMas0;
    var pesoMaximo;
    var pesoMinimo;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var seguir;
    var flag = 0;

    //--------------------------------------------

    do {
        marca = prompt("Ingrese marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }
        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > pesoMaximoMas0) && temperatura > 0) {
            pesoMaximoMas0 = peso;
            marcaPesada = marca;
            flag = 1;
        }

        if (temperatura < 0) {
            contadorCong++;
        }

        acumuladorPeso = acumuladorPeso + peso;

        if (contador == 0 || peso > pesoMaximo) {
            pesoMaximo = peso;
        }
        if (contador == 0 || peso < pesoMinimo) {
            pesoMinimo = peso;
        }

        contador++;

        seguir = prompt("Quiere continuar?:");
    } while (seguir == 's');

    promedioPeso = acumuladorPeso / contador;

    if( flag == 0){
        marcaPesada = "sin datos";
    }

    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCong + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("f) El peso máximo: " + pesoMaximo + " y el mínimo: " + pesoMinimo + "</br>");


}

        // ------------- Maximos y minimos ---------------
        if (flag == 0 || numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?:");
    } while (seguir == 's');

    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    document.write("a) Cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) Cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) Cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) Promedio de todos los números positivos ingresados: " + promedioPos.toFixed(2) + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Número Máximo: " + numeroMax + " Letra: " + letraMax + "</br>");
    document.write("f) Número Minimo: " + numeroMin + " Letra: " + letraMin + "</br>");

}



*/