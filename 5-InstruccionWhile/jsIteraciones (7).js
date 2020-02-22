function mostrar() 

{

	var contador = 0;
	var acumulador = 0;
	var respuesta;


	do 
	{
		while (isNaN(acumulador))

		{
			acumulador = parseInt(prompt("Eso no es un numero. Ingrese Numero"));
	
		}
		
	acumulador = acumulador + parseInt(prompt("Ingrese un número"));
	contador ++;
	respuesta = prompt("Quiere ingresar otro numero");

	}while(respuesta == "s");






document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;

}
//FIN DE LA FUNCIÓN
/*acumulador = parseInt(prompt("Ingrese un número"));

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
	contador = contador +1*/