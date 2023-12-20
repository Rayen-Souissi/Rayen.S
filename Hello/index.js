http = require('http');

server=http.createServer()
server.on("request",(req,res)=>{
    console.log("Hello world!")
})
server.listen(3000,()=>{
    console.log("serveur en écoute 3000")
})
