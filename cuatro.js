function mostrar()
{
    var PrimerNumero;
    var SegundoNumero;
    var TercerNumero;
    var CuartoNumero;
    var MasAlto;
    var Suma;
    var Total;

    PrimerNumero = prompt ("Ingrese el primer precio");
    SegundoNumero = prompt ("Ingrese el segundo precio");
    TercerNumero = prompt ("Ingrese el tercer precio");
    CuartoNumero = prompt ("Ingrese el cuarto precio");

    PrimerNumero = parseInt (PrimerNumero);
    SegundoNumero = parseInt (SegundoNumero);
    TercerNumero = parseInt (TercerNumero);
    CuartoNumero = parseInt (CuartoNumero);

    if (PrimerNumero>=SegundoNumero&&PrimerNumero>=TercerNumero&&PrimerNumero>=CuartoNumero)
    {
        MasAlto = PrimerNumero
    } else 
    {
        if (SegundoNumero>=PrimerNumero&&SegundoNumero>=TercerNumero&&SegundoNumero>=CuartoNumero)
        {
            MasAlto = SegundoNumero
        } else 
        {
            if (TercerNumero>=SegundoNumero&&TercerNumero>=PrimerNumero&&TercerNumero>=CuartoNumero)
            {
                MasAlto = TercerNumero
            } else 
            {
                if (CuartoNumero>=SegundoNumero&&CuartoNumero>=TercerNumero&&CuartoNumero>=PrimerNumero)
                {
                    MasAlto = CuartoNumero
                }
            }
        } 
    }
    
    Suma = (PrimerNumero+SegundoNumero+TercerNumero+CuartoNumero);

    if (Suma>100)
    {
        Total = (Suma*0.90);
    } else 
    {
        if (Suma>50)
        {
            Total = (Suma*0.95);
        } else 
        {
          Total = (Suma*1.15);  
        }
    }
    alert ("El precio mas alto que pago es $"+MasAlto+" y el total a pagar es de "+Total);
}
