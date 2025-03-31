function imprimirMensaje(message: string): void {
    console.log(message);
}

imprimirMensaje("Hola, TypeScript!");

function sumar(a: number, b: number): number {
    return a + b;
}

const resultado = sumar(5, 10);
console.log(`La suma es: ${resultado}`);