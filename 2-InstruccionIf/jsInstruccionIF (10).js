function mostrar()
{
	var nota;
	var mensaje;
	
	nota=Math.floor((Math.random () * 10) + 1);
	
	if(nota>8)
	{
		mensaje=("Exelente");
	}
		else if(nota>3)
		{
			mensaje=("Aprobo");
		}
			else if(nota<4)
			{
				mensaje=("Vamos, la proxima se puede");
			}

	console.log(nota);
	console.log(mensaje);
}