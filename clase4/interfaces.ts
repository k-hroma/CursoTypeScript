//una interface es un contrato que debemos de respetar
//contrato--->es un tipo de dato que tiene determinados atributos y/o métodos

//definimos una interface
//tipo de dato Usuario debe tener: nombre, password y opcionalmente una confirmación. todo de tipo string
interface Usuario { 
  nombreUsuario: string;
  password: string;
  confirmarPassword?: string;
}

// creamos un objeto del tipoUsuario y respetar las variables necesarias de tipo string
// no es un clase
let usuario1: Usuario = { nombreUsuario: "Juan", password: "1234", confirmarPassword: "1234" }

console.log(usuario1)

interface Abordar { 
  abordarTransporte(): void;
}

let avion: Abordar = {
  abordarTransporte: function () { 
    console.log("abordando")
  }
}

avion.abordarTransporte();