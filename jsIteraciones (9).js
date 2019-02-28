function mostrar()
{

	var contador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	respuesta='si';
	/*numeroMaximo=-999999;
	numeroMinimo=9999999;*/
	bandera=0;

	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(bandera==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera=1;
		} 
			else
		{
			if(numeroMaximo<numeroIngresado)
		{
			numeroMaximo=numeroIngresado;
		}
			if(numeroMinimo>numeroIngresado)
		{
			numeroMinimo=numeroIngresado;
		}
		}

		respuesta=prompt("ingrese no para salir");
	}
	console.log("El maximo es: "+numeroMaximo);
	console.log("El minimo es: "+numeroMinimo);



}//FIN DE LA FUNCIÓN