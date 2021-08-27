function arranque(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = function(): void{
            alert(lanzar);
        }
    }
}

@arranque('Lanzamiento del curso de NodeJS y Angular')
class Programa{
    public nombre: string;
    public version: number;
    lanzamiento: any;

    constructor(){
        this.nombre = "";
        this.version = 0;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre: string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version: number){
        this.version = version;
    }
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa{
    public timeLine: number;

    constructor(){
        super();
        this.timeLine = 0;
    }

    setTimeLine(timeLine: number){
        this.timeLine = timeLine;
    }

    getTimeLine(){
        return this.timeLine;
    }

    getAllData(): string{
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    }
}

var editor = new EditorVideo();

editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());

// Lógica del formulario

var programas:Array<Programa> = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);

    programas.push(programa);

    var list = "";

    for(let i = 0; i < programas.length; i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";
}