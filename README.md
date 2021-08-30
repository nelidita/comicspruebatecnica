# Comics - Prueba Técnica.

Este proyecto se trata de diseñar una interfaz sencilla consumiendo el API de xkcd en https://xkcd.com/json.html
mostrando en el navegador un comic aleatorio de xkcd, ademas permitir que el usuario califique el comic de
forma interactiva.

## ¿Cómo se construyó la solución?

Este proyecto consiste en hacer un llamado a la API REST de xkcd para acceder a la data y poder mostrar en el
navegador el titulo y la imagen del comic alli dado.

La solicitud se hace a traves de fetch con el uso de async-await para asi obtener un archivo json y procesar
la información para mostrar el titulo y la imagen del comic obtenido.

Por otro lado, se agregaron 3 íconos para que el usuario pueda calificar el comic mostrado.
  - Carita triste: No me gusta.
  - Carita meh: mmm normal.
  - Carita feliz: Si me gusta.

## ¿Cuáles fueron los principales problemas encontrados?

Cuando se llamó la API RES de https://xkcd.com/json.html, genero un error llamado CORS (Intercambio de 
Recursos de Origen Cruzado), este tipo de error ocurre cuando se hace una solicitud de un dominio diferente 
al que se encuentra la información.

Por razones de seguridad, los exploradores restringen las solicitudes HTTP de origen cruzado iniciadas dentro
de un script, mas información en: https://developer.mozilla.org/es/docs/Web/HTTP/CORS

## Solucion a los problemas encontrados

Para solucionar el error y poder acceder a la data, la opción era acceder desde el servidor haciendo uso de 
express y este hiciera la petición en vez de nuestra aplicación de frontend.

Para esto salimos del directorio de nuestro proyecto y creamos una carpeta donde iniciamos nuestro proyecto express 
con npm init y con el comando npm install express node-fetch cors instalamos express y algunas dependencias,
creamos un archivo server.js y alli hacemos nuestra peticion con fetch en un puerto diferente al de nuestro proyecto
frontend en nuestro caso configuramos nuestro puesto a 5000 en vez que al 3000 que es el puerto por defecto de 
nuestra aplicacion frontend.

Luego configuramos que las solicitudes del localhost:3000 pueda acceder a la información del localhost:5000,
entonces como la solicitud se realiza a través del servidor no genera el error CORS y se devuelve una respuesta 
con el metodo json(). 

En nuestro proyecto en vez de hacer la llamada a https://xkcd.com/json.html, hacemos la llamada a localhost:5000 que
es donde configuramos el puerto en el servidor y finalmente levantamos el servidor express con node server.js para luego
refrescar el navegador de nuestro proyecto de comics y pudimos ver el objeto con toda la informacion presentada en la
API REST.

En el siguiente repositorio se encuentra el proyecto con el servidor creado para el backend de este proyecto:
https://github.com/nelidita/backendComics


