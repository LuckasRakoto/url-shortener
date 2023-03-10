const config = require('./config')
const {MongoClient} = require('mongodb');
const { query } = require('express');

const uri = config.uri

async function connect(){ 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected successfully to culster");

        return client
 
    } catch (e) {
        console.error(e);
    }
}

async function connectAndSend(url){
    client = await connect().catch(console.error)
    await client.db("urlshortener").collection('urls').insertOne(url, (err, result) => {
        if (err) {
            return console.log(err)
         }
     })
}

async function findOGLink(shortURL){
    client = await connect()
    const query = {url: shortURL}
    const doc = await client.db("urlshortener").collection("urls" ).findOne(query)
    console.log(doc.name)
    return doc.name
}


module.exports = {
    connectAndSend: connectAndSend,
    findOGLink: findOGLink
}