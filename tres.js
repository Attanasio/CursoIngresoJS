function mostrar()
{
	var precio;
	var amigos;
	var propina;
	var iva;
	var masiva;
	var total;
	var cadauno;

	precio=elPrecioFinal.value;
	amigos=prompt("Ingrese la cantidad de personas que son");
	
	iva=(precio*21/100);

	iva=parseInt(iva);
	precio=parseInt(precio);

    masiva=(precio+iva);
	propina=(masiva*10/100);

	propina=parseInt(propina);
	
	total=(masiva+propina)

	cadauno=(total/amigos);

	alert("El precio a pagar es $"+precio+", agregandole el IVA a cada precio el total quedaria en $"+masiva+", la propina siendo el 10% de la cuenta seria $"+propina+" dando un total de $"+total+" y ya que ustedes son "+amigos+" tendrianque poner $"+cadauno+" cada uno.");
}
