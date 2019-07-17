function mostrar()
{
    var edad;
    var estadoCivil;

    edad=document.getElementById("edad").value;
    estadoCivil=document.getElementById("estadoCivil").value;

    edad=parseInt(edad);

    if(edad<18 && estadoCivil!="Soltero")
    {
        alert("Es muy pequeño para no ser soltero.");
    }
}