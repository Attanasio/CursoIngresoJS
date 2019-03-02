function mostrar()
{
  	var dinero;
  	var descuento;
  	var iva;
  	var masiva;

  	dinero=elNombre.value;
  	descuento=(dinero*10/100);
  	iva=(dinero*21/100);

  	descuento=parseInt(descuento);
  	iva=parseInt(iva);

  	masiva=(descuento+iva);

  	alert("Tu compra es de $"+dinero+", tenes un descuento del 10%, queda en "+descuento+" mas el IVA es $"+masiva+".");

}
