let nombre: string = 'Leon Felipe Coll Brandaleci'

console.log(nombre.length)

function obtenerLongitud<T extends {length: number}>(obj: T): number {
    return obj.length
}

console.log(obtenerLongitud('supercalifragilisticoespialidoso'))