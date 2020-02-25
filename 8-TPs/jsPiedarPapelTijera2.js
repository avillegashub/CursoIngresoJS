

var eleccionMaquina;
var maximo = 3;
var minimo = 1;
var ganadas = 0;
var perdidas = 0;
var empatadas = 0;

function comenzar() {

	eleccionMaquina = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

}

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
	document.getElementById("ganadas").value = ganadas;
	document.getElementById("perdidas").value = perdidas;
	document.getElementById("empatadas").value = empatadas;
}
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
	document.getElementById("ganadas").value = ganadas;
	document.getElementById("perdidas").value = perdidas;
	document.getElementById("empatadas").value = empatadas;
}

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

			s;
	}

	document.getElementById("ganadas").value = ganadas;
	document.getElementById("perdidas").value = perdidas;
	document.getElementById("empatadas").value = empatada

}