var persona = {
    nombre: "Felipe",
    edad: 41,
    ciudad: "Cordoba",
    esDev: true,
};
console.log("Persona: ", persona);
var personas = [
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
];
console.log("Personas: ", personas);
var suma = {
    sumar: function (a, b) {
        return a + b;
    }
};
console.log(suma.sumar(3, 5)); // Resultado: 8
