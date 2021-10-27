const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }
//
//   console.log('folder was created')
// });

const filePath = path.join(__dirname, 'test', 'text.txt');
// fs.writeFile(filePath, 'Hello NodeJS!', (err) => {
//   if (err) {
//     throw err;
//   }
//
//   console.log('file was created');
//
//   fs.appendFile(filePath, 'Hello cat!', (err) => {
//     if (err) {
//       throw err;
//     }
//
//     console.log('file was created');
//   });
// });

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  // const data = Buffer.from(content)
  //
  // console.log('Content:', data.toString());

  console.log(content);
});
