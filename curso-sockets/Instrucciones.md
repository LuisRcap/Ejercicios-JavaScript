#Pasos pra iniciar un proyecto con socket.io

Lo primero es iniciar un proyecto con NodeJS con el comando:
**_`npm init`_**

Seguido de esto se pedirá que se configure:
* Package name: nombre del proyecto
* Version: Version del proyecto, por ejemplo, 1.0.0
* Description: Descripción acerca del proyecto
* Entry point: Archivo principal por ejemplo "index.js"
* Test command: Comando para iniciar test (opcional)
* Git repository: Repositorio para git (opcional)
* Kewywords: Palabras clave (opcional)
* Author: Nombre del autor
* License: Licencia que se usará para el proyecto (Por ejemplo ISC o MIT)

Con esto se generará el archivo *package.json*.

---------------------
###Instalar dependencias

La primera dependencia será **express**, para esto se usa el comando:
**_`npm install express --save`_**
Esta dependencia nos servirá para manegar las rutas que se estarán usando en el proyecto.

La siguiente dependencia será **socket.io** que nos permitirá crear las conexiones en tiempo real y los sockets, para esto se usa el comando:
**_`npm install socket.io --save`_**

También se necesitará la dependencia de **nodemon** y esta se usará como dependencia de desarrollo que servirá para que cuando se haga un cambio en el código también se haga el cambio en el servidor, para hacerlo se ejecuta el comando:
**_`npm install nodemon --save-dev`_**

Una vez lista las dependencias, en el archivo *package.json*, se agregará un script en la sección con ese nombre, para esta aplicación lo que se necesita es ejecutar el *index.js* para que se hagan los cambios en el servidor cada vez que se haga un cambio en el proyecto, para esto se agregará la siguiente línea en la parte de *scripts*:
**_`start: "nodemon server/index.js"`_**
De esta forma cada vez que se iniciar la aplicación sólo se necesitará ejecutar el comando:
**_`npm start`_**