/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingresado;
	var porcentaje;
	var total;
	
	ingresado=importe.value;

	ingresado=parseInt(ingresado);

	porcentaje=(ingresado*25/100);
	total=(ingresado-porcentaje);

	resultado.value=total;
}
