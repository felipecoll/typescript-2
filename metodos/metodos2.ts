function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    } else {
        return `Hola, ${nombre}`;
    } 
}

console.log(saludar("Felipe"));
console.log(saludar("Felipe", "Buenos dias perri!"))

// Parametros multiples

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((a, b) => a + b, 0);
}
console.log(sumarTodos(1, 2, 3, 4, 5));

// Valores por defecto 

function despedirse(nombre: string, saludo: string = "Adios"): string {
    return `${saludo}, ${nombre}`;
}
console.log(despedirse("Felipe"));
console.log(despedirse("Felipe", "Hasta luego perri!"))