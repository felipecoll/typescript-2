class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const juan = new Persona("Juan", 30);
console.log(juan.saludar()); // Hola, mi nombre es Juan y tengo 30 años.