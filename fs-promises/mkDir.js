// mkdir
const fs = require('fs')
fs.promises.mkdir('newFolder')
.then(()=>{
    console.log('carpeta creada satisfactoriamente')
})
.catch((error)=>console.error('La carpeta no pudo ser creada: ',error))