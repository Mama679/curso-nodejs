const fs = require('fs');
let color = require('colors');
console.clear();
let salida = '';
let consola = '';

const crearArchivo = (base,listar,hasta) => {
    console.log('================================'.rainbow);
    console.log(' Tabla Multiplicar'.green);
    console.log('================================'.rainbow);
    return new Promise((resolve,reject) =>{
        for(let i= 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n` ;
        }
        
        try{
            if(listar){
                console.log(consola);
            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt`);
        }catch(error){
            reject(error);
        }
    });
}

module.exports ={
    crearArchivo
}

