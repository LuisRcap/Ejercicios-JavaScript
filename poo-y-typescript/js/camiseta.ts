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
    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string
    {
        return this.color;
    }
}

var camiseta = new Camiseta();
camiseta.setColor("Rojo");
//camiseta.getColor();

var playera = new Camiseta();
playera.setColor("Azul");

console.log(camiseta.getColor(), playera);
