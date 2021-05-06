//read File
const fs = require('fs')
fs.promises.readFile('newFolder/nuevo.txt')

    .then((data)=>{
        console.log('data: ',data)
    })
    .catch((error)=>console.error('error: ',error))