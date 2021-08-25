#Manejo de jQuery con Angular

###Instalación
Para instalar jQuery en angular se requiere el comando:

**_npm install --save jquery_**

Esto nos agregará jQuery dentro de la carpeta del proyecto en Angular, para que la instalación funcione, hay que modificar el archivo *angular.json* en el apartado de scripts se agrega al arreglo la siguiente cadena:
**_"node_modules/jquery/dist/jquery.min.js"_**

Una vez instalado esto desde la consola y dentro de la carpeta del proyecto se ejecuta el comando:

**_npm install --save-dev @types/jquery_**

Este comando nos permitirá que Angular reconozca el símbolo _$_ y así poder usarlo dentro de los archivos de Angular.

Finalmente para que funcione, en cada archivo se debe hacer el import:

**_declare const $: any;_**

Con esto la integración de jQuery en Angular estará completa y totalmente funcional.