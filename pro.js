<script LANGUAGE="JavaScript"> 
<!-- 
function ver(boton) 
{ 
//contenida en un valor numerico para poder realizar la suma posteriormente. 
cantidadpizza = Number(form1.cantidadpizza.options[form1.cantidadpizza.selectedIndex].value);
numerodetortas = Number(form1.numerodetortas.options[form1.numerodetortas.selectedIndex].value);
preciodetortas = Number(form1.preciodetortas.options[form1.preciodetortas.selectedIndex].value);
extra = Number(form1.extra.options[form1.extra.selectedIndex].value);
preciorefresco = Number(form1.preciorefresco.options[form1.preciorefresco.selectedIndex].value);
select3 = Number(form1.select3.options[form1.select3.selectedIndex].value);
// cramos una variable donde guardaremos el valor sumado de las 
// dos variables creadas anteriormente

valor = select3 * cantidadpizza;
valor1 = numerodetortas * preciodetortas;
valor2 = valor + valor1 + extra + preciorefresco;
// aca mostramos el valor para ver si sumo bien .. jejej 
alert("El precio total de la venta es:" +valor2);
} 
//--> 
</script> 
quiero asignar el resultado de la variable en este caso valor2 a esta caja de texto, lo estoy haciendo de esta forma pero no me anda.

<table width="30%" border="0" align="center" class="down">

<tr>
<td width="38%" class="menumain">PRECIO DE LA VENTA:</td>
<input name="preciototal" class="boot" type="text" id="preciototal" size="15" value="javascript:valor2"></td>
</tr>

</table>