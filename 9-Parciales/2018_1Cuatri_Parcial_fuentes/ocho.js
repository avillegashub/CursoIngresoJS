function mostrar() 
{


    var numero=0;
    var acumuladorPositivo=0;
    var acumuladorNegativo=0;
    var contPositivo=0;
    var contNegativo=0;
    var contCero=0;
    var maximo=0;
    var letraMaximo;
    var minimo=0;
    var letraMinimo;
    var letra;
    var contPares=0;
    var contImpar=0;
    var seguir;
    var flag = 0;
    do    
    {
        
        
        letra = prompt("Ingrese una letra: ");
        
        while (!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z"))) 
        {
            letra = prompt(letra+ " no es una letra. Ingrese una letra: ");
        }
        
        numero = parseInt(prompt("Ingrese nota(-100 al 100): "));

        while (numero < -100 || numero > 100 || isNaN(numero)) 
        {
            numero = parseInt(prompt("Numero invalido. Ingrese numero(-100 al 100): "));
        }
        
        
        if (numero > 0) 
        {
            acumuladorPositivos = acumuladorPositivo + numero;
            contPositivo++
            
        }
        
        else if(numero < 0) 
        {
            
            acumuladorNegativo = acumuladorNegativo + numero;
            
        }
        
        else
        {
            contCero++;
        }
        
        if(flag == 0 || numero < minimo)
        {
            minimo = numero;
            letraMinimo = letra;
            
        }
        
        if(flag == 0 || numero >  maximo)
        {
            maximo = numero;
            letraMaximo = letra;
            flag++;
        }
        
        if( numero % 2 == 0)
        {
                contPares++;
            }
            
            if( numero % 2 != 0)
            {
                contImpar++;
            }
            
            seguir = prompt("Quiere continuar: s o n ");

            
            while (!(seguir == "n" || seguir == "s")) {
                
                seguir = prompt("Quiere continuar: s o n ");
            }

            
    }while( seguir == "s");

    document.write("La Cantidad de Numeros pares es: " + contPares + "</br>");
    document.write("La Cantidad de Numeros impares es: " + contImpar + "</br>");
    document.write("La Cantidad de Ceros es: " + contCero + "</br>");
    document.write("El promedio de todos los números positivos ingresados: " + (acumuladorPositivo / contPositivo) + "</br>");
    document.write("La suma de todos los números negativos: " + acumuladorNegativo + "</br>");
    document.write("El Numero Maximo es: " + maximo + " y su letra es: " + letraMaximo + "</br>");
    document.write("El Numero Minimo es: " + minimo + " y su letra es: " + letraMinimo + "</br>");



        
        
        
      
    

}

/*a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

function mostrar() {
    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPos = 0;
    var contadorPos = 0;
    var promedioPos = 0;
    var acumuladorNeg = 0;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    var flag = 0;


    do {
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero (-100 y 100): "));
        }

        // ---------Pares-----------
        if (numero % 2 == 0) {
            // par
            contadorPares++;
        }
        else {
            // impar
            contadorImpares++;
        }

        // ------------- Signo------------------

        if (numero > 0) {
            // positivos
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        else if (numero < 0) {
            // negativos
            acumuladorNeg = acumuladorNeg + numero;
        }
        else {
            // cero
            contadorCeros++;
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
