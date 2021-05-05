

//Modulo del File System
const fs = require('fs')

//Escribir en un archivo
fs.writeFile('newFile.txt','Hola desde Note FS', 'utf8', (err)=>{
    if(err){
        console.error('No se pudo crear el archivo')
        return  
     }
    console.log('Se escribio el archivo exitosamente')
})
