"use strict";
//una interface es un contrato que debemos de respetar
//contrato--->es un tipo de dato que tiene determinados atributos y/o métodos
// creamos un objeto del tipoUsuario y respetar las variables necesarias de tipo string
// no es un clase
let usuario1 = { nombreUsuario: "Juan", password: "1234", confirmarPassword: "1234" };
console.log(usuario1);
let avion = {
    abordarTransporte: function () {
        console.log("abordando");
    }
};
avion.abordarTransporte();
