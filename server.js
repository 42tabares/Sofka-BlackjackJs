// Express Setup
const express = require('express')
const open = require('open')
const app = express()
const port = 8000

//Static file imports
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/css'))


app.get('', (req,res) => {
    res.sendFile(__dirname + 'index.html')
})

// Server launch
app.listen(port, () => console.log("Server running on " + port))
open('http:localhost:'+ port)







/*
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
*/