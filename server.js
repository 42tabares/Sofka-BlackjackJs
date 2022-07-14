const http = require('http')
const open = require('open')
const fs = require('fs')
const port = 8000

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})

    fs.readFile('index.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('Something went wrong :c')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if (error){
        console.log("ERROR AT DEPLOYMENT:\n",error)
    } else {
        console.log("Server launched on port: " + port)
        open('http:localhost:'+ port)
    }
})