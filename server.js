const http = require('http')
const open = require('open')
const port = 8000


const server = http.createServer(function(req, res){
    res.write('Hello Web')
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log("ERROR: ",error)
    } else {
        console.log("Server launched on port: " + port)
        open('http:localhost:'+ port)
    }
})