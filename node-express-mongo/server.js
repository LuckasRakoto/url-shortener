const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const urlRouter = require('./routes/urlRouter')

const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/urls', urlRouter)

app.use(express.static(path.join(__dirname,'../src',)))

app.get((req,res,next) =>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.sendFile(path.join(__dirname,'../src','index.html'))
})



const server = http.createServer(app)

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})
