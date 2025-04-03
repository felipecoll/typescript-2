function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hola");

console.log(output); // Output: Hola

let output2 = identity<number>(123);

console.log(output2); // Output: 123

// creacion de una clase 

class Caja<T> {

  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  public mostrarContenido(): T {
    return(this.contenido);
  }
}

let cajaAlgo = new Caja<string>("Libracos");
console.log(cajaAlgo.mostrarContenido()); // Output: Libracos