function mostrar() {
    //tomo la edad  

    var edad

    edad = parseInt(document.getElementById("edad").value);

   /* if (edad < 18) {
        if (edad < 13) {

            alert("Es Niño")

        }
        else {

            alert("Es Adolescente");

        }

    }
    else {

        alert("Es Adulto")
    }*/

    /*if (edad < 13) 
    {

        alert("Niño")

    }

    else if (edad < 17)
    {
    
        alert("Adolescente")

    }
    else 
    {

        alert("Adulto")
    }*/
    

    

    if (edad < 13) 
    {

        alert("Niño");

    }

    else (edad > 12 )
    {
        if (edad < 18)
        {
        alert("Adolescente");

        }

        else 
        {

        alert("Adulto");
        
        }
    }
}


//FIN DE LA FUNCIÓN