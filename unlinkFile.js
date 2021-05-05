
//Modulo del File System
const fs = require('fs')



//Borrar un archivo
fs.unlink('./newFile.txt', (err) => {
    if(err){
        console.error('No se pudo borrar el archivo')
        return  
     }
    console.log('newFile.txt was deleted');
});


