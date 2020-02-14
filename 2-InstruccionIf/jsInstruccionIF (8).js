function mostrar()
{
//tomo la edad  


var edad
var status

edad = parseInt(document.getElementById("edad").value);

status = document.getElementById("estadoCivil").value;

if (edad >= 18 && status =="Soltero") 

{
    
    alert("Es Soltero y no es menor");

    

}
	


}//FIN DE LA FUNCIÓN