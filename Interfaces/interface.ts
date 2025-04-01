interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
    esDev: boolean
}

let persona : Persona = {
    nombre: "Felipe",
    edad: 41,
    ciudad: "Cordoba",
    esDev: true,
}

console.log("Persona: ", persona)

let personas: Persona[] = [
    {
        nombre: "Felipe",
        edad: 41,
        ciudad: "Cordoba",
        esDev: true,
    },
    {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid",
        esDev: false,
    },
    {
        nombre: "Ana",
        edad: 25,
        ciudad: "Barcelona",
        esDev: true,
    }
]

console.log("Personas: ", personas)

interface Sumar {
    sumar(a: number, b: number): number;
  }
  
  let suma: Sumar = {
    sumar(a: number, b: number): number {
      return a + b;
    }
  };
  
  console.log(suma.sumar(3, 5)); // Resultado: 8

   
    