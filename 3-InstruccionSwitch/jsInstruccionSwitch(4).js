function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mes)

{

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    
    alert("Este més no tiene 30 días.");
    break;

    case "Febrero":
    alert("Este més tiene 29 días,");
    break;

    default:
    alert("Este mes tiene 31 dias.");
    break;	


}
	
	



}//FIN DE LA FUNCIÓN