function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	
	var respuesta='no';

	contador = prompt("Ingrese un Numero");
	respuesta = prompt("Quiere ingresar otro numero");

	while (respuesta != "no" && respuesta != "si") 
	
	{

		respuesta = prompt("Quiere ingresar otro numero");

		
	}

	while (respuesta == "si" || respuesta == "no")
	{

		contador = prompt("Ingrese un Numero");
		respuesta = prompt("Quiere ingresar otro numero");
		
	}

	while (contador >= 0)
	{
		positivo = positivo + contador;
		respuesta = prompt("Quiere ingresar otro numero?");
	}
	
	while (contador < 0)
	{
		negativo = negativo *contador;
		respuesta = prompt("Quiere ingresar otro numero?");
	}






document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN