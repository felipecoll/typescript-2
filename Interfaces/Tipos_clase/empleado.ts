import {Persona} from "./clase";

export class Empleado extends Persona {
    public puesto: string;
    public salario: number;

    constructor(nombre: string, edad: number, puesto: string, salario: number) {
        super(nombre, edad);
        this.puesto = puesto;
        this.salario = salario;
    }

    public saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y soy ${this.puesto}.`;
    }

    public obtenerInfo(): string {
        return `Soy ${this.nombre}, tengo ${this.edad} años y mi salario es ${this.salario}.`;
    }
}