export class Persona {
    public nombre: string; // Accesible desde cualquier lado
    protected edad: number; // Accesible solo desde la clase y sus subclases
    private esDev: boolean // Accesible solo desde la clase 

    constructor(nombre: string, edad: number, esDev: boolean = false) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDev = esDev;
    }

    public saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    protected soyDev() {
        return `Soy un desarrollador: ${this.esDev}`;
    }

    private soyDevPrivado() {
        return `Soy un desarrollador privado: ${this.esDev}`;
    }
}



//const juan = new Persona("Juan", 30);
//console.log(juan.saludar()); // Hola, mi nombre es Juan y tengo 30 años.