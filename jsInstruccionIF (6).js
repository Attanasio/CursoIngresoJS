function mostrar()
{
	var años;

	años=edad.value;

	if(años<=13){
		alert("Sos un niño");
	}else{
		if(años<17){
			alert("Sos un adolescente");
		}else{
			if(años>=18){
				alert("Sos mayor de edad");
			}
		}
	}
}