function mostrar() {
    //tomo la edad  

    var edad
    var status

    edad = parseInt(document.getElementById("edad").value);

    status = document.getElementById("estadoCivil").value;

    if (edad < 18 && status !="Soltero" )
    {
        
        alert("Es muy pequeño para ser soltero");

        

    }

}//FIN DE LA FUNCIÓN

/*

<input type="text"  placeholder="Ingrese su edad" id="edad">
	   	<select id="estadoCivil">
					<option value="Soltero"> Soltero </option>
					<option value="Casado"> Casado </option>
					<option value="Divorciado"> Divorciado </option>
                </select>
                
                */