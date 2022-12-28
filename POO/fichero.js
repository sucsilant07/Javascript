class Estudiante {
    nombre = "Sandro"
    asignaturas = ["HTML", "CSS", "Javascript"]
    constructor (nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenDatos(){
        return {
            nombre: this.nombre, 
            asignaturas: this.asignaturas,
        }
    }
}

const estudiante = new Estudiante ();

console.log(estudiante, obtenDatos())