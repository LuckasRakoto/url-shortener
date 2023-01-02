const mongo = require('../mongo')
const bodyParser = require('body-parser')
const express = require('express')
const { findOGLink } = require('../mongo')

const urlRouter = express.Router()

urlRouter.use(bodyParser.json())
urlRouter.use(bodyParser.urlencoded({ extended : true }))
    
urlRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next)=>{
    res.end('Will send you all the urls to you !')
})
.post((req,res,next)=>{
    mongo.connectAndSend(req.body)
})
.put((req,res,next)=>{
    res.statusCode = 403
    res.end('PUT operations not supported on /urls')
})
.delete((req,res,next)=>{
    res.end('Deleting all the urls !')
})

urlRouter.route("/:urlId")
.get(async (req,res,next) =>{
    let link = await mongo.findOGLink("http://localhost:3000/urls/" + req.params.urlId)
    res.redirect(link)
})
.post((req,res,next)=>{
    res.status=403
    res.end('POST operation not supported on /urls/' + req.params.urlId)
})
.put((req,res,next)=>{
    res.write('Updating the url: ' + req.params.urlId + '\n')
    res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`)
})

.delete((req,res,next)=>{
    res.end(`Will delete the url: ${req.body.name}`)
})

module.exports = urlRouter