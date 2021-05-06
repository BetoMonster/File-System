// readdir
const fs = require('fs')
async function printFolder(path) {
    const files = await fs.promises.readdir(path);
    for (const file of files) {
      console.log(file);
    }
  }
  printFolder('./newFolder').catch(console.error);