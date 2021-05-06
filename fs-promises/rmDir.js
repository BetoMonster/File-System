// rmdir
const fs = require('fs')
fs.promises.rmdir('./newFolder', { recursive: true })
.then(()=>{
    console.log('carpeta borrada ')
})
.catch((error)=>console.error('La carpeta no pudo ser borradada: ',error))