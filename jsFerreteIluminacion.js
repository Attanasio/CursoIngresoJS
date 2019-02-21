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
/*{
	var lamparitas;
	var marca;
	var total;
	var iibb;

	lamparitas=Cantidad.value;
	lamparitas=parseInt(lamparitas);
	marca=Marca.value
	if(lamparitas>=6)
   {
	   total=lamparitas*35*0.5;
   }
   else if(lamparitas==5)
   {
	   if(marca=="ArgentinaLuz")
	   {
		   total=lamparitas*35*0.6;
	   }
	   else
	   {
		   total=lamparitas*35*0.7;	
	   }
   }
   else if(lamparitas==4)
   {
	   if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
	   {
		   total=lamparitas*35*0.75;
	   }
	   else
	   {
		   total=lamparitas*35*0.8;	
	   }
   }
   else if(lamparitas==3)
   {
	   if(marca=="ArgentinaLuz")
	   {
		   total=lamparitas*35*0.85;
	   }
	   else if(marca=="FelipeLamparas")
	   {
		   total=lamparitas*35*0.9;
	   }
	   else
	   {
		   total=lamparitas*35*0.95;
		}
	}
	if(total>=120)
   {
	   iibb=(total*1.10)-total;
	   total=total*1.10;
	   alert("Usted pago "+iibb+" de IIBB")
	}
	precioDescuento.value=total;
}*/
{
	var lamparitas;
	var marca;
	var total;
	var iibb;
	
	lamparitas=Cantidad.value;

	lamparitas=parseInt(lamparitas);

	marca=Marca.value;

	switch(lamparitas)
	{
		
	}
}
