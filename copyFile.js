


const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

let file1='newFile.txt'
let file2='destination.txt'

function callback(error) {
    if(error){
        console.error('No se pudo copiar el archivo')
        return  
     }
  console.log(`The "${file1}" was copied to ${file2}`);
}

// destination.txt will be created or overwritten by default.
fs.copyFile(file1, file2, callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile(file1, file2, COPYFILE_EXCL, callback);