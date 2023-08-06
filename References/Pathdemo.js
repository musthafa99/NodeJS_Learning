const path=require('path');

//Base file name
console.log(__filename);
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));

//Concate paths--> Use Join.

console.log(path.join(__dirname,'test','hello.html'));

