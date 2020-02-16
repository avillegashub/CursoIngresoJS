function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mes)

{

    case "Febrero":
    alert("Este més no tiene más de 29 días.")
    break;

    default:
    alert("Este mes tiene 30 o más dias.");
    break;	


}

}//FIN DE LA FUNCIÓN