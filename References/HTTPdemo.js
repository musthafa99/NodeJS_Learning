const http=require('http');

//creating http server
http.createServer((req,res) =>{
     res.write("Server created");
     res.end()
}).listen(3000,()=> console.log("Server Running..."));
