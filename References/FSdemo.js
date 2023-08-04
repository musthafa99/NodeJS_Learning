const fs=require('fs');
const path=require('path');

// Create Folder
/*fs.mkdir(path.join(__dirname,'/test'),{},err =>{
    if(err) throw err
    console.log('Folder Created');
    });*/

// Create and write a file
/*fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World ',err =>{
    if(err) throw err
    console.log('Sucess');
    });
//overwrites the previous file    
/*fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Welcome to NodeJS Learning Tutorail',err =>{
        if(err) throw err
        console.log('Sucess');
        });*/
    
//Append the  two texts
/*fs.appendFile(path.join(__dirname,'/test','hello.txt'),' Welcome to NodeJS Learning Tutorail',err =>{
    if(err) throw err
    console.log('Sucess');
    }); */

// Read a File
/*fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) =>{
    if(err) throw err
    console.log(data);
});*/

//Rename a file
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','Nodejs Learning.txt'),err =>{
    if(err) throw err
    console.log('Reanmed');
});