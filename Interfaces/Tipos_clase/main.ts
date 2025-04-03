import { Empleado } from "./empleado";

const empleado = new Empleado("Juan", 30, "Desarrollador", 50000);
console.log(empleado.saludar()); // Hola, mi nombre es Juan y soy Desarrollador.
console.log(empleado.obtenerInfo()); // Soy Juan, tengo 30 años y mi salario es 50000.
console.log(empleado); // Empleado { nombre: 'Juan', edad: 30, puesto: 'Desarrollador', salario: 50000 }
// console.log(empleado.soyDev()); // Error: Property 'soyDev' is protected and only accessible within class 'Persona' and its subclasses.