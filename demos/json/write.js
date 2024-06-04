const fs = require('node:fs');
let binary_data = [
  { name: "kevin", age: 56 }, 
  { name: "kay", age: 59 }
];

freeze_dried = JSON.stringify(binary_data,undefined, 4);
fs.writeFile('output.json', freeze_dried, undefined, e=>console.log(e));
