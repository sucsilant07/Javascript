let compras = ["pan", "arroz", "atun", "leche", "jamon"];

compras.push("Aceite de Girasol");
//console.log(compras);

compras.pop("Aceite de Girasol");
//console.log(compras);

let lista_peliculas = [
    {titulo:"Avenger: Infinity War", director:"Anthony Russo, Joe Russo", fecha: new Date(2018, 04, 27)},
    {titulo:"Spiderman: No way home", director:"Jon Watts", fecha: new Date(2021, 12, 17)},
    {titulo:"Joker", director:"Todd Phillips", fecha: new Date(2019, 10, 04)}
]

let new_lista = lista_peliculas.filter(pel => pel.fecha > new Date(2010, 01, 01));
//console.log(new_lista)

let lista_directores = lista_peliculas.map(dir => dir.director);
//console.log(lista_directores)

let lista_titulo = lista_peliculas.map(tit => tit.titulo);
//console.log(lista_titulo)

let titulo_directores = lista_titulo.concat(lista_directores);
//console.log(titulo_directores)

let titulo_directores_prop = [...lista_titulo, ...lista_directores]
//console.log(titulo_directores_prop)
