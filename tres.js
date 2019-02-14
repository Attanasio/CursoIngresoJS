function mostrar()
{
	var precio;
	var descuento;
	var total

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");

	total=(precio*descuento/100);

	elPrecioFinal.value="$"+total;

}

