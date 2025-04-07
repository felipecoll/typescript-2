type PersonaType = {
    nombre: string;
    edad: number
}

type Parcial<T> = {
    [K in keyof T]?: T[K]
}

type PersonaParcial = Parcial<PersonaType>;

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K]
}
type PersonaSoloLectura = SoloLectura<PersonaType>;

let persona : PersonaSoloLectura = {
    nombre: 'Juan',
    edad: 30
}

console.log(persona.nombre);
