const fs = require('fs')

//
fs.promises.writeFile('nuevo.txt','holliiii')
    .then(()=>{
        console.log('todo cool')
    })
    .catch(()=>console.error('error: ',error))

/*    async function principal(){
        await fs.promises.writeFile('otronuevo.txt','holliiii')
        await fs.promises.appendFile('otronuevo.txt','koders')
    }

    principal()
    .then(()=>console.log('creado y modificado'))
    .catch(()=>console.error('error: ',error))
*/

//append File
fs.promises.appendFile('nuevo.txt','koders 11va')
    .then(()=>{
        console.log('todo cool')
    })
    .catch(()=>console.error('error: ',error))

//read File
fs.promises.readFile('nuevo.txt')

    .then((data)=>{
        console.log('data: ',data)
    })
    .catch((error)=>console.error('error: ',error))

//unlink File   
fs.promises.unlink('nuevo.txt')
.then((data)=>{
    console.log('nuevo.txt was deleted',data)
})
.catch((error)=>console.error('No se pudo borrar el archivo: ',error))

//copy File
fs.promises.copyFile('nuevo.txt' ,'copia_nuevo.txt')

    .then(()=>{
        console.log('archivo copiado en copia_nuevo.txt')
    })
    .catch((error)=>console.error('El archivo no pudo ser copiado: ',error))

// mkdir

fs.promises.mkdir('newFolder')
.then(()=>{
    console.log('carpeta creada satisfactoriamente')
})
.catch((error)=>console.error('La carpeta no pudo ser ccreada: ',error))


// readdir
async function printFolder(path) {
  const files = await fs.promises.readdir(path);
  for (const file of files) {
    console.log(file);
  }
}
printFolder('./newFolder').catch(console.error);
