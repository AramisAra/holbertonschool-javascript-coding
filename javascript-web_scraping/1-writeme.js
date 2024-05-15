#!/usr/bin/node
const fs = require('fs');
const fdPath = process.argv[2];
const fdWrite = process.argv[3];

fs.writeFile(fdPath, fdWrite, (err, data) => {
  if (err) {
    console.log(err);
  }
})
