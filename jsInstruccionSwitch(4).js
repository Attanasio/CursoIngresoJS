function mostrar()
{

var mesDelAño
mesDelAño=mes.value;

switch(mesDelAño)
{
    case "Febrero":
        alert("Este mes tiene 28 dias salvo en los años bisiestos que tiene 29 días.");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("ESte mes tiene 30 dias.");
        break;
    default:
        alert("Este mes tiene 31 dias.");
}


	
	



}//FIN DE LA FUNCIÓN