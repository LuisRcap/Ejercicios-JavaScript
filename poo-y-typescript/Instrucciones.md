#Compilar TypeScript con watcher
-----------------

Lo primero que se necesita es instalar *TypeScript*, esto puede ser de manera global o sólo para una carpeta. Para hacerlo de manera global en una ventana de comandos se ejecuta el comando:
**_`npm install -g typescript`_**

Para instalar *TypeScript* sólo en una carpeta de proyecto se accede a esa carpeta desde línea de comandos y se ejecuta el comando:
**_`npm install typescript --save-dev`_**

Una vez instalado se necesita iniciar un proyecto con *TypeScript* en la carpeta del proyecto, para esto desde línea de comandos en esa carpeta se ejecuta el comando:
**_`tsc --init`_**
Esto generará un archivo **tsconfig.json** este nos ayudará para que el transpuilador de TypeScript sepa que es un proyecto en la carpeta en la que está este archivo para activar el watcher en la carpeta para transpilar todos los archivos _.ts_ que se tengan en la carpeta, se ejecuta el comando:
**_`tsc -w`_**

Y con esto cada vez que se haga un cambio en los archivos TypeScript en la carpeta serán transpilados generando su respectivo archivo _.js_