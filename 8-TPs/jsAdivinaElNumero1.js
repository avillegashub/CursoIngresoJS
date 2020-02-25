/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos= 0;
var maximo = 100;
var minimo = 1;
var guess;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
  numeroSecreto = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
  
  alert("Se ha generado un Numero Secreto");

}

function verificar()
{
  
  
  
  
  guess = parseInt(document.getElementById("numero").value);
  contadorIntentos++;
  
  
  while(isNaN(guess))
  {
    
    alert("No es un Numero");
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
      alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
    }
    
    
 
    

  
  document.getElementById("intentos").value = contadorIntentos;
	
}

/*
>

<
*/