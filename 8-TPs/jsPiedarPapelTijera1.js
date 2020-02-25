/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
1 piedra
2 papel
3 tijera
*/
var eleccionMaquina;
var maximo = 3;
var minimo = 1;
var ganadas= 0;
var perdidas= 0;
var empatadas= 0;

function comenzar() {

    eleccionMaquina = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

}//FIN DE LA FUNCIÓN
function piedra() {
    switch (eleccionMaquina) {
        case 1:
            alert("Empate");
            empatadas++;
            break;

        case 2:
            alert("Papel envuelve a Piedra - Perdiste");
            perdidas++;
            break;

        case 3:
            alert("Piedra mata tijera - Ganaste");
            ganadas++;
            break;

    }


}//FIN DE LA FUNCIÓN
function papel() {


    switch (eleccionMaquina) {
        case 1:
            alert("Papel envuelve a Piedra - Ganaste");
            ganadas++;
            break;

        case 2:
            alert("Empate");
            empatadas++;
            break;

        case 3:
            alert("Tijera corta el papel - Perdiste");
            perdidas++;
            break;

    }




}//FIN DE LA FUNCIÓN
function tijera() {

    switch (eleccionMaquina) {
        case 1:

            alert("Piedra mata tiejra - Perdiste");
            perdidas++;
            break;

        case 2:
            alert("Tijera corta el papel - Ganaste");
            ganadas++;
            break;

        case 3:
            alert("Empate");
            empatadas++;
            break;

    }
document.getElementById("ganadas").value= ganadas;
document.getElementById("perdidas").value= perdidas;
document.getElementById("empatadas").value= empatadas;


}//FIN DE LA FUNCIÓN