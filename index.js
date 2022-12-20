const config = require('./config')
const express = require('express')
var mysql = require('mysql')
const {MongoClient} = require('mongodb');
const app = express()

const uri = config.uri
//console.log(uri)

async function connect(){ 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

connect().catch(console.error);
// app.get('/',)