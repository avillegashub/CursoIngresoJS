function mostrar() {
    //tomo la edad  

    var edad

    edad = parseInt(document.getElementById("edad").value);


/*    if (edad >= 13 && edad < 18) {

        alert("Es Adolescente");


    }*/

    if (!(edad < 13 || edad > 17)){
        alert("Es Adolescente");
    }





}

//  OPERADORES LOGICOS
//  OR || pipe
// AND && ampersand
// NOT !

//FIN DE LA FUNCIÓN