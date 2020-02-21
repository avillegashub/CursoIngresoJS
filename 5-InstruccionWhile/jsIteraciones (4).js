function mostrar()
{

	var numero = parseInt(prompt("ingrese el número clave."));



	//while (numero < 0 || numero > 9 || isNaN(numero)){
	while (!(numero >= 0 && numero <= 9 ) || isNaN(numero)){
	
		numero = parseInt(prompt("Error! Ingrese el número clave."));
	
	}

	document.getElementById("Numero").value = numero;
}

//FIN DE LA FUNCIÓN*/