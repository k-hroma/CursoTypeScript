- Compilamiento = tsc nombre_archivo
- IDE = tsc -init
- Observen cambios en automático = tsc -w

### para ejecutar nuestros modulos es necesario resolver a traves un servidor:

- npm install webpack webpack-cli webpack-dev-server
- npm install typescript ts-loader --save-dev
- npm init -y

### en archivo package.json

"scripts": {
"start": "webpack-dev-server --mode development"
}

### agregamos el archivo webpack.config.js

- modificamos el archivo de entrada
- npm start
