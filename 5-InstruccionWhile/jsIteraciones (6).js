function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio 
	
	acumulador = parseInt(prompt("Ingrese un número"));
	

	while(isNaN(acumulador))
	{
		acumulador = prompt("Error: Ingrese un Numero");

	}
	
	contador++
	while(contador < 5)
	{
	
	acumulador = acumulador + parseInt(prompt("Ingrese un número"));	

		contador++
	}

	promedio= acumulador /contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN