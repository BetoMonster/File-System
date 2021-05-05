

//Modulo del File System
const fs = require('fs')


//Leer  un archivo
fs.readFile('newFile.txt', (error, data) => {
    if(error){
        console.error('No se pudo leer el archivo')
        return  
     }
    console.log(data);
  });

