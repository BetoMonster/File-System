//copy File
const fs = require('fs')
fs.promises.copyFile('newFolder/nuevo.txt' ,'newFolder/copia_nuevo.txt')

    .then(()=>{
        console.log('archivo copiado en copia_nuevo.txt')
    })
    .catch((error)=>console.error('El archivo no pudo ser copiado: ',error))