// Interfaz
interface CamisetaBase
{
    setColor(color);
    getColor();
}

// Clase (Molde del objeto)
class Camiseta implements CamisetaBase
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

// Clase hija
class Sudadera extends Camiseta
{
    public capucha: boolean;

    public setCapucha(capucha: boolean)
    {
        this.capucha = capucha;
    }

    getCapucha(): boolean
    {
        return this.capucha
    }
}

var camiseta = new Camiseta("Roja", "Manga larga", "Nike", "L", 15);

console.log(camiseta);

var sudaderaNike = new Sudadera("Rojo", "Manga larga", "Nike", "L", 20);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor("Gris Jaspeado");
console.log(sudaderaNike);