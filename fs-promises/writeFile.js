const fs = require('fs')
fs.promises.writeFile('newFolder/nuevo.txt','holliiii')
    .then(()=>{
        console.log('todo cool')
    })
    .catch(()=>console.error('error: ',error))