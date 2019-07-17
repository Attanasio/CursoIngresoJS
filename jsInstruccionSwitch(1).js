function mostrar()
{
    var mes;

    mes=document.getElementById("mes").value;

    switch(mes)
    {
        case "Enero":
                    alert("Que comiences bien el año!.")
                break;
        case "Marzo":
                    alert("A clases!.")
                break;
        case "Diciembre":
                    alert("Felices fiestas!.")
                break;
        default:
                    alert("No pasa nada.");
                break;
    }
}