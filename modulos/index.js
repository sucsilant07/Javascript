import * as modulocontroller from './controller.js'
import chalk from 'chalk'

const suma = modulocontroller.suma (1, 2);

console.log(suma);

const suma2 = modulocontroller.suma(4, 5);

console.log(suma2);

const mult = modulocontroller.multiplica (suma, suma2);

console.log(chalk.green(mult));