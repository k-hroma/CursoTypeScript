//decoradores:
//----> agregar funcionalidad sin modificar
//----> clases / metodos / atributos


//---->Ejemplo
//1.definimos una función decoradora llamada Saludar.
//2.parámetro target: Function -> hace referencia a la clase a la que se aplicará el decorador.
//3.void-> la funcion saludar solo modifica la clase, no devuelve una nueva clase u otro valor.
//4.target es la función constructora de la clase que está siendo decorada.
//5.target.prototype.saludos ---> todas las instancias de la clase decorada pueden acceder al método saludos.
function Saludar(target: Function): void { 
  target.prototype.saludos = function (): void { 
    console.log("Hola desde decoradores")
  }
}

@Saludar
class Hola { 
  constructor() { }
}

// al aplicar el decorador a la clase Hola lo que ocurre es:
// Hola.prototype.saludos = function (): void {
//   console.log("Hola desde decoradores");
// };


let hola1 = new Hola()
hola1.saludos();