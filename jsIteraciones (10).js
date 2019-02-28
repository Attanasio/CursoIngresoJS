/* Prueba de escritorio: -2 -5 3 8 0 */
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivo;
	var contadorNegativo;
	var contadorCero;

	respuesta='si';
	sumaNegativos=0;
	sumaPositivos=0;
	contadorNegativo=0;
	contadorPositivo=0;
	contadorCero=0;

	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(contadorCero==0)
		{
			contadorCero++
		}else
			{
				if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos+numeroIngresado
				contadorNegativo++
			}else
				{
					sumaPositivos=sumaPositivos+numeroIngresado
					contadorPositivo++
				}

		respuesta=prompt("ingrese no para salir");

		console.log("La suma de negativos es: "+sumaNegativos);	
		console.log("La suma de positivos es: "+sumaPositivos);
		console.log("La cantidad de numeros negativos es: "+contadorNegativo);
		console.log("La cantidad de numeros positivos es: "+contadorPositivo);
		console.log("La cantidad de ceros es: "+contadorCero);
	}
}