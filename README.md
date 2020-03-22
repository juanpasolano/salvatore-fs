
## Monta un sitio web rapido para recibir pagos
Este repositorio le permite a diferentes negocios recibir pagos de manera facil y segura.

### Por que esto y no el Boton de Pago
La gran diferencia de este proyecto y el boton de pago es que El boto de pago no te permite generar links al instante con diferentes montos. Digamos que en tu tienda necesitas cobrarle a cada persona un total dependiendo de lo que te pida. Con el boton de PAgo necesitarias ir a MercadoPago y generar un nuevo boton de compra por cada transaccion, un proceso muy dispendioso. 
Con este proyecto solo compartes el link directamente y puedes acomodar el total de la compra facilmente. 

El boton de pago de MercadoPAgo esta pensado para que combres Un producto determinado, este proyecto te permite cobrar totales.


## Como usarlo

### Paso 1: Crear cuentas

Esta tal vez sea la parte mas dispendiosa. Crear las 3 cuentas que necesitas:
1. **[Mercado Pago](https://www.mercadopago.com.co/):** Mercado pago es el encargado de procesar los pagos, genera los links para tus clientes y hace todo el proceso facil y seguro. Ten en cuenta que Mercado Pago va a cobrar un porcentaje por transacción. Al escribir esta guia es del 3,29% + $ 800 por transacción.
3. **[Github](https://www.netlify.com/):** Este es simplemente un requerimiento de Netlify para poder usarlo.
2. **[Netlify](https://www.netlify.com/):** Este se encarga de "hostear" el sitio. Es dicir es la manera ne que podemos poner el sitio al aire o publico. Usa tu nueva cuenta de Github para abrir la cuenta de Netlify


### Paso 2: Generar Access_token de Mercado Pago
PAra este punto ya debes tener tu cuenta de mercado pago. Ahora debes ir a este link:

[Visita este link para obtener tus credenciales](https://www.mercadopago.com/mco/account/credentials)

Y deberias ver algo como esto. En ocaciones las credenciales no se muestran asi que dale un "refresh" a ver si lo logras.

![Crendeciales MercadoPago](https://i.imgur.com/IWyCwbX.png)

### Paso 3: Crear el sitio Web

👇👇👇Dale click a el boton de abajo 👇👇👇

[![Deply to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/juanpasolano/mercadopago-payme)\\

Y luego deberias ver algo como esto:

![Acceso al repo](https://imgur.com/sTrOGaA.png)
![Poner los datos](https://imgur.com/OjOtq91.png)

En este punto el sitio comenzará a genererace.

![El sitio se esta generando](https://imgur.com/bBqEeXF.png)

### Paso 4. Cambiarle el nombre al sitio web

Mientras Netlify termina de hacer lo que debe hacer debemos cambiarle el nombre a nuestro sitio web para que tenga mas sentido **"modest-stornebraker-8fea37"** no es un buen nombre para una tienda

En Netlify vamos a **Settings** y le damos click a "Change site name"

Y debes ver esto:

![Settings](https://imgur.com/bDRtuq0.png)

Y luego pones el nombre que quieras
![Poner el nombre que quieres](https://imgur.com/dvqlJJr.png)

### Paso 5: Visitar el sitio web 

El sitio ya debe estar listo!
![click para ver el sitio web](https://imgur.com/IHy7xdi.png)

Y deberias ver algo como esto

![El sitio web](https://imgur.com/e03Nl00.png)

### Paso 6: Cobrar y agregar un monto predeterminado

Ahora ya puedes cobrar! Envia el link
Si quieres agregar un valor predeterminado puedes usar el link y agregar `?amount=2000000` al link:

En nuestro ejemplo quedaria:

`https://elcafedesanjuan.netlify.com/?amount=200000`

Y se vera ahora así cuando la persona visite el link.

![El sitio web](https://imgur.com/7sIzsQE.png)


### Para developers
Mercadopago node SDK info
https://www.mercadopago.com.ar/developers/es/plugins_sdks/sdks/official/nodejs/