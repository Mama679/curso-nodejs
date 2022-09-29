const { alias, options, boolean } = require('yargs');
const argv = require('yargs')
                            .options({
                                'b':{
                                    alias:'base',
                                    type:'number',
                                    demandOption:true,
                                    describe:'Base de la Tabla de multiplocar'
                                },
                                'l':{
                                    alias:'listar',
                                    type:boolean,
                                    default:false,
                                    describe:'Muestra la tabla en consola'
                                },
                                'h':{
                                    alias:'hasta',
                                    type:'number',
                                    default:10,
                                    describe:'Limite de numeros a multiplicar la base'
                                }
                            })    
                            .check((argv,options)=>{
                                //console.log('Yargs ',argv)
                                if(isNaN(argv.base)){
                                    throw 'LA BASE TIENE QUE SER UN NUMERO Y ES REQUERIDO'; 
                                }
                                return true;
                            })                        
                            .argv;

module.exports = argv;