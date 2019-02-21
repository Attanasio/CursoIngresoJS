/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var total;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	total=(primerPrecio+segundoPrecio+tercerPrecio);

	alert("La suma de los tres precios es de $"+total);
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var multiplicacion;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	multiplicacion=(primerPrecio*segundoPrecio*tercerPrecio);
	total=(multiplicacion/3);

	alert("El promedio de los tres precios es de $"+total);
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var iva;
	var total;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	suma=(primerPrecio+segundoPrecio+tercerPrecio);
	iva=(suma*21/100);

	suma=parseInt(suma);
	iva=parseInt(iva);

	total=(suma+iva);

	alert("El total de la compra mas el IVA es de $"+total);
}
