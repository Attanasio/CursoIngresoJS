/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero;
	var segundonumero;
	var total;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	total=(primernumero+segundonumero);

	alert("El total de la suma es "+total);
}

function restar()
{
	var primernumero;
	var segundonumero;
	var total;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	total=(primernumero-segundonumero);

	alert("El total de la resta es "+total);
}

function multiplicar()
{ 
	var primernumero;
	var segundonumero;
	var total;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	total=(primernumero*segundonumero);

	alert("El total de la multiplicacion es "+total);
}

function dividir()
{
	var primernumero;
	var segundonumero;
	var total;

	primernumero=numeroUno.value;
	segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);

	total=(primernumero/segundonumero);

	alert("El total de la dividicion es "+total);
}

