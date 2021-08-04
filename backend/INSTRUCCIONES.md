##Instrucciones para iniciar un proyecto

Los comandos que se deben usar son:

_npm init_

Este comando sirve para iniciar un proyecto con node, al hacerlo se creará un archivo json en la carpeta en la que nos encontremos en la consola y se indicaran:

* Package name: (Se nombra el proyecto)
* Version: (Se da la versión inicialmente la 1.0.0)
* Description: (Se da una descripción del proyecto)
* Entry point: (Regularmente index.js)
* test command: (Se puede dejar vacío)
* Git repository: (Se puede dejar vacío)
* Keywords: (Se puede dejar vacío)
* Author: (Nombre del autor)
* License: (Yo uso la "MIT"

Una vez hecho esto se aceptará que la configuración es correcta y entonces se creará en automático el archivo *package.json*.

-------------------------------
##Instalar dependencias
La primera dependencia que se va a instalar es *express*, este es un framework para trabajar con el protocolo HTTP que además permite definir rutas, tener un sistema de rutas, recibir peticiones HTTP, crear acciones, métodos entre otras cosas, para hacerlo se usa el comando:

**_npm install express --save_**

La bandera de _save_ se usa para que se guarde en el archivo package.json del proyecto.

Lo siguiente que se va a usar es el **body-parser** que es una librería que convierte las peticiones del backend por post a un objeto json para utilizarse por JavaScript, para esto se usa el comando.

**_npm install body-parser --save_**

Otra cosa a instalar es el **connect-multiparty** que permite subir archivos al backend que permite trabjar con la variable "files" hay otras dependencias que permiten subir archivos pero para este proyecto se usa esta, para instalarlo se utiliza el comando:

**_npm install connect-multiparty --save_**

También se debe instalar la dependencia **mongoose**, esta nos servirá para  trabajar con mongodb que además incluye algunos métodos que ya vienen optimizados, para instalarlo se usa el comando:

**_npm install mongoose --save_**

Por último se debe instalar la dependencia llamada **nodemon**, lo que hace esta dependencia es que cuando se haga un cambio en el código estos cambios se actualicen también en el servidor y de esta forma ya no se debe hacer manualmente, para esto se usa el comando:

**_npm install nodemon --save-dev_**

En este caso la bandera _--save_ cambió a _--save-dev_ para que esta dependencia sólo se ejecute cuando esté en desarrollo en local, cuando se suba a un servidor esta dependencia no se tomará en cuenta.

Una vez hecho esto, en el archivo package.json se debe agregar en la parte de scripts la siguiente línea para que nodemon funcione:

*start: "nodemon index.js"*

Con esto nuestro entorno en el proyecto estará listo para empezar a trabajar.
-----------------------------------------

**Nota:** Para iniciar el servidor de node se debe ejecutar el comando _npm start_ en la raíz del proyecto.