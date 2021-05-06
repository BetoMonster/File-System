/*

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
*/

const fs = require('fs');
const fsPromises = fs.promises;
let text = "Hola koders";
  
async function principal() {
    
        write = await fsPromises.writeFile(
                "testFile.txt", text)
        
        console.log("File written successfully");
            
};

principal()
.then(()=>{
    console.log('archivo creado')
})
.catch ((error) =>{
console.error(error);
})  