"use strict";
let saludo = "Hola Mundo";
// saludo = 10 --->error
saludo = "Rocio"; //----> funciona porque es un string
let numero; //----> permite inicializar la variable más tarde
let cualquiera; //---->permite inicializar y modificar con cualquier dato
cualquiera = 10;
cualquiera = "string";
// las----> constantes igual que en JavaScript no pueden modificarse luego de ser inicializadas.
//   -----> se escriben en mayúsculas
const NOMBRE_APELLIDO = "Rocio Mendonca";
function saludar() {
    console.log(saludo);
}
