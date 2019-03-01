function mostrar()
{
    var velocidad;
    var tipo;
    var contador;
    var velocidadNueva;
    var promedio;

    contador=0;
    velocidadNueva=0;


    while(contador<5)
    {
        velocidad=prompt("Ingrese la velocidad");
        velocidad=parseInt(velocidad);

        velocidadNueva=velocidadNueva+velocidad;

        contador++
    }
    promedio=velocidadNueva/5;

    alert("El promedio de las cinco velocidades es: "+promedio);
    
}
