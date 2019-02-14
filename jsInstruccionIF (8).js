function mostrar()
{
	var años;
 	var ecivil;

 	años=edad.value;
 	ecivil=estadoCivil.value;

 	if(años>18&&ecivil=="Soltero"){
 		alert("Es soltero y no es menor");
 	}
}