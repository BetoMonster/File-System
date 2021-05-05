
//Modulo del File System
const fs = require('fs')

//Escribir en un archivo
fs.writeFile('created.txt','Hola desde Note FS', 'utf8', (error)=>{
    if(error){
        console.error('No se pudo crear el archivo')
        return  
     }
    console.log('Se escribio el archivo exitosamente')
})

