class Programa{
    public nombre: string;
    public version: number;

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