interface Direccion {
    calle: string;
    ciudad?: string;
    pais: string;
    codigoPostal: string;
}

let direccion: Direccion = {
    calle: "Calle Falsa",
    ciudad: "Springfield",
    pais: "USA",
    codigoPostal: "12345"
};

console.log(direccion);

// read only

interface PersonaReadOnly {
    readonly nombre: string;
    readonly edad: number;
    readonly esDeveloper: boolean;
  }

const personaRead: PersonaReadOnly= {   
    nombre: "Juan",
    edad: 30,
    esDeveloper: true
}

console.log("Persona:", personaRead);

// Interfae extendida

interface Empleado extends PersonaReadOnly {
    readonly salario: number;
    readonly puesto: string;
}

const empleadoRead: Empleado = {
    nombre: "Ana",
    edad: 28,
    esDeveloper: false,
    salario: 50000,
    puesto: "Desarrolladora"
}
console.log("Empleado:", empleadoRead);