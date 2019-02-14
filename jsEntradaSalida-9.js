/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingresado;
	var porcentaje;
	var total;
	
	ingresado=sueldo.value;

	ingresado=parseInt(ingresado);

	porcentaje=(ingresado*10/100);
	total=(ingresado+porcentaje);

	resultado.value=total;
}
