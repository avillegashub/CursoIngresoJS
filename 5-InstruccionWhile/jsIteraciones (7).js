function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";

	acumulador = parseInt(prompt("Ingrese un número"));

	respuesta = prompt("Quiere ingresar otro numero");
	contador = contador +1


	while (respuesta != "no" && respuesta != "si") 
	
	{

		respuesta = prompt("Quiere ingresar otro numero");

		
	}
	
	while (respuesta == "si") 
	
	{

		acumulador = acumulador + parseInt(prompt("Ingrese un número"));
		respuesta = prompt("Quiere ingresar otro numero");
		contador = contador +1
	}


	



	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN