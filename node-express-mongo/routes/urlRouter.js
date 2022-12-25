const bodyParser = require('body-parser')
const express = require('express')

urlRouter = express.Router()

urlRouter.use(bodyParser.json())

urlRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res)=>{
    res.end('Will send you all the urls to you !')
})
.post((req,res)=>{
    res.end('Will add the dish: '+ req.body.name + ' with the description: '+ req.body.description)
})
.put((req,res)=>{
    res.statusCode = 403
    res.end('PUT operations not supported on /urls')
})
.delete((req,res)=>{
    res.end('Deleting all the urls !')
})

urlRouter.route("/:urlId")
.get((req,res,next) =>{
    res.end('Will send details of the url: ' + req.params.prompId + ' to you !')
})
.post((req,res,next)=>{
    res.status=403
    res.end('POST operation not supported on /urls/' + req.params.prompId)
})
.put((req,res,next)=>{
    res.write('Updating the url: ' + req.params.prompId + '\n')
    res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`)
})

.delete((req,res,next)=>{
    res.end(`Will delete the url: ${req.body.name}`)
})

module.exports = prompRouter