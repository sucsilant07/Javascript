let objetos = {
    nombre: "Sandro",
    apellido: "Urbina",
    edad: 25,
    altura: 1.75,
    desarrollador: true,
}

let obj = "edad";
//console.log(objetos[obj])

let objetos2 = {
    nombre: "Mitzi",
    apellido: "Saldaña",
    edad: 24,
    altura: 1.65,
    desarrollador: false,
}

let objetos3 = {
    nombre: "Juan",
    apellido: "Rodriguez",
    edad: 28,
    altura: 1.70,
    desarrollador: false,
}

let lista = [objetos, objetos2, objetos3];
lista.sort((a, b) => a.edad - b.edad);

//console.log(lista);