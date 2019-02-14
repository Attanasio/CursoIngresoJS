
function mostrar()
{
	var ancho;
	var largo;
	var anchotot;
	var largotot;
	var perimetro;

	ancho=prompt("Ingrese el ancho del rectangulo ");
	largo=prompt("Ingrese el largo del rectangulo ");

	anchotot=(ancho*2);
	largotot=(largo*2);

	anchotot=parseint(anchotot);
	largotot=parseint(largotot);

	perimetro=(anchotot+largotot);

	alert("El perimetro total del rectangulo es "+perimetro);

}
