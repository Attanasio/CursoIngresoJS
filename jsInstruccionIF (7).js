function mostrar()
{
 	var años;
 	var ecivil;

 	años=edad.value;
 	ecivil=estadoCivil.value;

 	if(años<18&&ecivil!="Soltero"){
 		alert("Es muy pequeño para no ser soltero");
 	}

}