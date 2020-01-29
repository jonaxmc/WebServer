## Servidor Web + Express + HBS + Heroku
## Descripción:
Página Web desarollada en NodeJS, dónde se muestra una pestaña de Home y About usando Bootstrap. Para el desarrollo de ésta página fueron utilizados ciertos elementos que se listan a continuación:
-Express: Es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares.
-HBS: Handlebars o HBS es un sistema de plantillas liviano para Node. Handlebars nos permite evitar el código repetitivo y ayuda a reducir código en nuestra página.
-Helpers: Permiten definir iteradores personalizados y otras funcionalidades que pueden invocar el bloque pasado con un nuevo contexto.

### La estructura de la página está de la siguiente manera:
```
WebServer
├── hbs
|   ├── helpers.js
├── node_modules
├── public
|   ├── assets
|       ├── css
|       ├── img
|       ├── js
├── views
|   ├── parciales
├── .gitignore
├── README.MD
├── package.json
├── server.js
```
## EJECUCIÓN
Recuerda instalar las dependencias:

```
npm install
```

Para ejecutar:

```
npm start
```
### Luego de correr la aplicación, copia la siguiente dirección en tu navegador para vizualizar la página web
```
http://localhost:3000/
```