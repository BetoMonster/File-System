//append File
const fs = require('fs')
fs.promises.appendFile('newFolder/nuevo.txt','koders 11va')
    .then(()=>{
        console.log('todo cool')
    })
    .catch(()=>console.error('error: ',error))