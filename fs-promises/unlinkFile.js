//unlink File   
const fs = require('fs')
fs.promises.unlink('newFolder/nuevo.txt')
.then((data)=>{
    console.log('nuevo.txt was deleted',data)
})
.catch((error)=>console.error('No se pudo borrar el archivo: ',error))