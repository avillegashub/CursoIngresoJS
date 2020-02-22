function mostrar() {

	var flag = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = "si";

	do {
		numero = parseInt(prompt("Ingrese un Numero"));

		while (isNaN(numero)) {

			numero = parseInt(prompt("Eso no es un Numero"));
		}

		if (numero >= 0) {
			positivo = positivo + numero;

		}

		else {
			negativo = negativo * numero;
			flag = 1;
		}

		respuesta = prompt("quiere ingresar otro numero?");

		

	
	} while (respuesta == "s")


	if (flag == 0) {
		negativo = 0;

	}







	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN
/*
do 

{
	contador  = parseInt(prompt("Ingrese un Número"));
	
	while (isNaN(contador) )
	
	{

		contador = parseInt(prompt("Error : Ingrese un Numero"));
		
	}
	
	while (contador >= 0)

	{
		positivo = positivo + contador;
	
	}


	while (contador < 0)
	{
		negativo = negativo * contador;
	
	}

	respuesta = prompt("Quiere ingresar otro numero/ si o no ?");
	
	while (!(respuesta == "si" && respuesta == "no"))
	
	{
		respuesta = prompt("Error : Quiere ingresar otro numero/ si o no?");
		
	}

	
		
		
		
}while(respuesta == "si");
	
	*/
