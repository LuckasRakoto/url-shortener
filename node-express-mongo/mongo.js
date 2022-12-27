const config = require('./config')
//const express = require('express')
const {MongoClient} = require('mongodb');
//const app = express()

const uri = config.uri
//console.log(uri)

async function connect(){ 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        await client.db("urlshortener").command({ ping: 1 });
        const collection = client.db("urlshortener").collection("urls")
        console.log("Connected successfully to culster");

        return collection
 
    } catch (e) {
        console.error(e);
    }
}

async function goShorten(urls){
    collection = await connect().catch(console.error)
    await sendtodb(collection, urls)
}

// app.get('/',)



async function sendtodb(collection, doc) {
    const result = await collection.insertOne(doc)
    console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
    )
}
