
//Modulo del File System
const fs = require('fs')

let updateData='data to append'

//Actualizar  un archivo

fs.appendFile('newFile.txt', updateData, (error) => {
    if(error){
        console.error('No se pudo actualizar el archivo')
        return  
     }
    console.log(`The "${updateData}" was appended to file!`);
});



