
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//console.log(argv);

/*console.log(process.argv);
const [,,arg3] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);*/



crearArchivo(argv.b,argv.l,argv.h)
           .then(nombreArchivo => console.log(nombreArchivo.brightBlue," Creado".brightBlue))
           .catch(error => console.log(error));
/*const fs = require('fs');
console.clear();
let salida = '';
console.log('================================')
console.log(' Tabla del 5 ');
console.log('================================');
for(let i= 1; i<=10; i++){
    salida += `${base} x ${i} = ${base * i}\n` ;
}
console.log(salida);

fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if(err){
        throw err;
    } 

    console.log("Archivo creado con exito");
});*/