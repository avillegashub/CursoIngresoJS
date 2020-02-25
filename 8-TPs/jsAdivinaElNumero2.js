/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/


var numeroSecreto; 
var contadorIntentos= 0;
var maximo = 100;
var minimo = 1;
var guess;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	contadorIntentos= 0;	
  numeroSecreto = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
  
  
  alert("Se ha generado un Numero Secreto " + numeroSecreto);

}

function verificar()
{
  
  
  
	contadorIntentos++;	
  
  guess = parseInt(document.getElementById("numero").value);
  
  
  while(isNaN(guess))
  {
	  
	  alert("No es un Numero");
	  contadorIntentos = contadorIntentos -1
	  break;
	  
	}
	
    
    if(guess > numeroSecreto )
    {
		alert ("Te pasaste.");
    }
    if(guess < numeroSecreto )
    {
		alert ("Te falta.");
		
    }
    
    if( guess == numeroSecreto)
    {
		
		
		
		
		if(contadorIntentos == 1)
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("Usted es un Psíquico");
		}
		
		if(contadorIntentos == 2)
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("excelente percepción");
		}
		
		if(contadorIntentos == 3)
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("Esto es suerte");
		}
		
		if(contadorIntentos == 4)
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("Excelente técnica");
		}
		
		if(contadorIntentos == 5)
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("usted está en la media");
		}
		
		if(contadorIntentos > 5  && contadorIntentos < 11 )
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("falta técnica");
		}
		
		if(contadorIntentos > 10 )
		{
			alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
			alert("afortunado en el amor!!");
		}
		
		
    }
	
    
    
	
    
	
	document.getElementById("intentos").value = contadorIntentos;
	
	
}














   /*
    if( guess == numeroSecreto)
    {
		
    
    
 */

