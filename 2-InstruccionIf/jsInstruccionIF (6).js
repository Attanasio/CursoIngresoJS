function mostrar()
{
    var edad;

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if (edad>17)
    {
        alert("Usted es mayor de edad.");
    }
    else
        {
            if(edad>12)
            {
                alert("Usted es un adolescente.");
            }
            else
                {
                    alert("Usted es un niño.");
                }
        }
}