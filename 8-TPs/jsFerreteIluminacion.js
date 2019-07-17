/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var descuento;
    var aumento;
    var precio;
    var total;

    cantidadLamparas=document.getElementById("Cantidad").value;
    marcaLamparas=document.getElementById("Marca").value;

    precio=(cantidadLamparas*35);

    cantidadLamparas=parseInt(cantidadLamparas);
    descuento=parseInt(descuento);
    total=parseInt(total);
    precio=parseInt(precio);
    aumento=parseInt(aumento);

    precio=parseInt(precio);

    if(cantidadLamparas>5)
    {
         descuento=(precio*50/100);
         total=(precio-descuento);
    }
        else if(cantidadLamparas==5 && marcaLamparas=="ArgentinaLuz")
        {
            descuento=(precio*40/100);
            total=(precio-descuento);
        }
            else if(cantidadLamparas==5 && marcaLamparas!="ArgentinaLuz")
            {
                descuento=(precio*40/100);
                total=(precio-descuento);
            }
                else if(cantidadLamparas==4 && marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    descuento=(precio*25/100);
                    total=(precio-descuento); 
                }
                    else if(cantidadLamparas==4 && marcaLamparas!="ArgentinaLuz" || marcaLamparas!="FelipeLamparas")
                    {
                        descuento=(precio*20/100);
                        total=(precio-descuento); 
                    }
                        else if(cantidadLamparas==3 && marcaLamparas=="ArgentinaLuz")
                        {
                            descuento=(precio*15/100);
                            total=(precio-descuento); 
                        }
                            else if(cantidadLamparas==3 && marcaLamparas=="FelipeLamparas")
                            {
                                descuento=(precio*10/100);
                                total=(precio-descuento);
                            }
                                else if(cantidadLamparas==3)
                                {
                                    descuento=(precio*5/100);
                                    total=(precio-descuento);
                                }
    
    if(total>120)
    {
        aumento=(total*10/100);
        total=(total+aumento);
        
        alert("Se le sumo un extra de "+aumento+" por superar la suma de $120.");
    }

    document.getElementById("precioDescuento").value=("$"+total);
}
