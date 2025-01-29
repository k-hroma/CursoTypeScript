"use strict";
class Persona {
    //creamos las variables
    apellido;
    nombre;
    //creamos el constructor de clase
    constructor(nombre, apellido) {
        this.apellido = apellido;
        this.nombre = nombre;
    }
    //para los atributos privados necesitamos utilizar el método get para poder utilizarlos
    getNombre() {
        return this.nombre;
    }
    //definimos un método stático
    //(Los métodos estáticos en JavaScript son funciones que pertenecen a una clase, pero no pueden ser llamadas desde instancias de esa clase. Se llaman directamente desde la clase en sí.
    static metodoEstatico() {
        return 10;
    }
}
// creamos una instacia de clase y pasamos los argumentos
let persona1 = new Persona("Juan", "Mendonca");
// llamamos al método get para acceder al atributo privado
console.log(persona1.getNombre());
console.log(persona1.apellido);
//acceder a un método estático
console.log(Persona.metodoEstatico());
