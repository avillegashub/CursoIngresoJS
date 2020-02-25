/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var radio;
var rec;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
radio = parseInt(document.getElementById("Radio").value);

rec = (largo + ancho) * 3;

alert("Metros de cable necesario por area = "+ rec);


}
function Circulo () 
{

    var radio;
    var long;
   
    
    radio = parseFloat(document.getElementById("Radio").value);
    
    
    long = 6.2832 * radio;

    alert("Metros circulares = "+ long);
}
function Materiales () 
{
  
var largo;
var ancho;
var mcua;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);

mcua = largo * ancho;

alert(" Se necesitan " + (2*mcua) + " bolsas de Cemento y " + (3*mcua) + " bolsas de Cal para " + (mcua) +  "mtrs2.");

    }