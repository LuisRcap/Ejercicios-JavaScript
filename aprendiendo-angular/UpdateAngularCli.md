#Actualizar el CLI de Angular
-------------------------
Lo primero que hay que hacer es actualizar a la última versión de NodeJS desde su sitio oficial [nodejs.org](https://nodejs.org/es/), normalmente con la versión LTS que es la más estable, se ejecuta el archivo de instalación y se hace la instalación normal sólo dando clic a siguiente hasta finalizar.

Una vez que se instaló la última versión de node, en una ventana de comandos o desde consola se ejecuta el comando para desinstalar la versión actual de Angular CLI.
**_npm uninstall -g @angular/cli_**

Ya que se desinstaló Angular se procede a borrar la caché de nodeJS para que no cause ningún conflicto al instalar la nueva versión de Angualar CLI, para esto se ejecutan estos dos comandos:
**_npm cache verify_**
**_npm cache clean --force_**

Ya que se hizo esto se procede con el comando para instalar Angular CLI.
**_npm install -g @angular/cli_**

Con esto la actualización está lista.