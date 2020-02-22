function mostrar()
{

	var flag =0;
	var maximo;
	var minimo;
	var numero;
	var seguir;
	
		do 
		{
			numero = parseInt(prompt("Ingrese un Numero"));
	
			while (isNaN(numero)) 
			{
	
				numero = parseInt(prompt("Eso no es un Numero"));
			}
	
			if (flag == 0 || numero > maximo) 
			{
				maximo = numero;
	
			}
			
			if (flag == 0 || numero < minimo)
			{
				minimo = numero;
				flag++
			}
	
			seguir = prompt("quiere ingresar otro numero?");
	
				
		
		} while (seguir == "s");
	
	
	
	


	

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN