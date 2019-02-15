
function mostrar()
{
	var primernombre;
	var segundonombre;
	var primerpeso;
	var segundopeso;
	var total;

	primernombre=prompt("Ingrese el nombre de la primer mascota");
	primerpeso=prompt("Ingrese el peso de la primer mascota");
	segundonombre=prompt("Ingrese el nombre de la segunda mascota");
	segundopeso=prompt("Ingrese el peso de la segunda mascota");

	primerpeso=parseInt(primerpeso);
	segundopeso=parseInt(segundopeso);

	total=(primerpeso+segundopeso);

	alert("Tenes dos mascotas "+primernombre+" y "+segundonombre+", que pesan "+primerpeso+" y "+segundopeso+" kilos, la suma de los kilos es "+total+".");

}
