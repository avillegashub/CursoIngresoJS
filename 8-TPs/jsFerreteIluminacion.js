/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var lamp;
    var precio = 35;
    var arLuz = 0;
    var feLam = 0;
    var tax;
    var final;
    var diezpor;
    var marca;
    var descuento = 0;

    marca = document.getElementById("Marca").value;

    lamp = parseInt(document.getElementById("Cantidad").value);

    suma = lamp * precio;


    if (lamp > 5) {
        descuento = suma * 50 / 100;


    }

    if (lamp > 2 && lamp < 6) {


        if (marca == "ArgentinaLuz") {

            if (lamp == 3) {

                descuento = suma * 15 / 100;

            }

            else if (lamp == 4) {

                descuento = suma * 25 / 100;

            }

            else {

                descuento = suma * 40 / 100;

            }
        }
        else if (marca == "FelipeLamparas") {
            if (lamp == 3) {

                descuento = suma * 10 / 100;

            }

            else if (lamp == 4) {

                descuento = suma * 25 / 100;

            }

            else {
                descuento = suma * 30 / 100;
            }
        }
        else {
            if (lamp == 3) {
                descuento = suma * 5 / 100;
            }

            else if (lamp == 4) {
                descuento = suma * 20 / 100;
            }

            else {
                descuento = suma * 30 / 100;
            }

        }


    }


    final = suma - descuento;


    if (final > 120) {
        diezpor = final * 10 / 100;

        document.getElementById("precioDescuento").value = "Usted pago : " + (final + diezpor) + " siendo " + diezpor + " el impuesto que se pagó.";
    }

    else {
        document.getElementById("precioDescuento").value = final;
    }



}
/*




<>


<OPTION >ArgentinaLuz</OPTION>
					<OPTION >FelipeLamparas</OPTION>
					<OPTION >JeLuz</OPTION>
					<OPTION >HazIluminacion</OPTION>
					<OPTION >Osram</OPTION>


*/




/*

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
function CalcularPrecio() {

    var precio = 35;
    var cantidad;
    var marca;
    var porcDescuento;
    var descuento;
    var precioConDescuento;
    var importeFinal;
    var iibb;


    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantidad) {

        case 1:
        case 2:
            porcDescuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                porcDescuento = 15;
            }
            else if (marca == "FelipeLamparas") {
                porcDescuento = 10;
            }
            else {

                porcDescuento = 5;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                porcDescuento = 25;
            }
            else {
                porcDescuento = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                porcDescuento = 40;
            }
            else {
                porcDescuento = 30;
            }
            break;
        default:
            porcDescuento = 50;

    }
    //------------------------------------
    descuento = precio * porcDescuento / 100;

    precioConDescuento = precio - descuento;

    document.getElementById("precioDescuento").value = precioConDescuento;

    importeFinal = precioConDescuento * cantidad;

    if (importeFinal > 120) {
        iibb = importeFinal * 10 / 100;
        importeFinal = importeFinal + iibb;

        alert("Total a pagar $ " + importeFinal + " Usted pago $ " + iibb + " de ingresos brutos");

    }
    else {
        alert("Total a pagar $ " + importeFinal);
    }

}
*/