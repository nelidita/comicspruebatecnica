# Comics - Prueba Técnica.

Este proyecto se trata de diseñar una interfaz sencilla consumiendo el API de xkcd [https://xkcd.com/json.html]
mostrando en el navegador un comic aleatorio de xkcd, ademas permitir que el usuario califique el comic de
forma interactiva.

## ¿Cómo se construyó la solución?

Este proyecto consiste en hacer un llamado a la API RES de xkcd para acceder a la data y poder mostrar en el
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

Para esto salimos del directorio de nuestro proyecto y creamos una carpeta donde iniciamos con npm init
instalamos express cors, creamos un archivo server.js y alli hacemos nuestra peticion con fetch en un puerto
diferente al de nuestro proyecto frontend en nuest5ro caso configuramos nuestro puesto a 5000 en vez que al
3000 que es el puerto por defecto de nuestra aplicacion frontend.
