let n = 1;
let dato = 10;

while (true){
    dato--;
    n *= dato + 1;
    if (dato === 1){
        break;
    }
}
console.log(n)