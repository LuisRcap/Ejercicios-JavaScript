// Clase (Molde del objeto)
class Camiseta
{
    // Propiedades (Características del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Métodos (Funciones o acciones del objeto)
    constructor(color, modelo, marca, talla, precio)
    {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string
    {
        return this.color;
    }
}

var camiseta = new Camiseta("rojo", "Manga larga", "Nike", "L", 14);
camiseta.setColor("Rojo");
//camiseta.getColor();

console.log(camiseta);
